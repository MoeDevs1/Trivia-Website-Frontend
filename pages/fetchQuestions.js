import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Form, ProgressBar } from 'react-bootstrap';
import styles from '../styles/QuestionFetch.module.css';

const QuestionFetch = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(180); // 3 minutes in seconds

  const [email, setEmail] = useState(null);
  const [username, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = `Bearer ${sessionStorage.getItem('token')}`;
        const config = {
          headers: { Authorization: token },
        };
        const response = await axios.get(
          'http://localhost:8080/api/v1/auth/user',
          config
        );
        const { username, email } = response.data;
        setEmail(email);
        setUser(username);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    fetchQuestions("BEGINNER");  // Fetch beginner level questions
  }, []);

  const fetchQuestions = async (difficulty, numberOfQuestions = 10) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/auth/questions/${difficulty}/${numberOfQuestions}`);
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleOptionChange = (questionId, option) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const startGame = () => {
    setGameStarted(true);
    const timer = setInterval(() => {
      setTimeRemaining(prev => prev - 1);
    }, 1000); // Decrease time remaining by 1 second

    setTimeout(() => {
      endGame();
      clearInterval(timer);
    }, 180000); // 3 minutes timer

    return () => clearInterval(timer);
  };

  const checkAnswerAndNext = (question) => {
    const selectedAnswer = userAnswers[question.id];
    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }

    if (currentQuestionIndex + 1 === questions.length) {
      endGame();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const endGame = async () => {
    setGameOver(true);

    // Check if it's the last question (number 10)
    if (currentQuestionIndex + 1 === 10) {
      try {
        const token = `Bearer ${sessionStorage.getItem('token')}`;
        const config = {
          headers: { Authorization: token },
        };

        const requestData = {
          score,
        };

        await axios.post(
          `http://localhost:8080/api/v1/auth/leaderboard/${username}`,
          requestData,
          config
        );
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  const renderResult = () => {
    const correctAnswers = questions.filter(
      question => userAnswers[question.id] === question.correctAnswer
    );
    const incorrectAnswers = questions.filter(
      question => userAnswers[question.id] !== question.correctAnswer
    );
    const totalCorrect = correctAnswers.length;
    const totalQuestions = 10;
  
    return (
        <div className={styles.Container}>
          <Card className={`${styles.resultCard} mt-3`}>
            <Card.Body>
              <Card.Title className={styles.resultCardTitle}>Game Results</Card.Title>
              <Card.Text>
                <strong className={styles.resultCorrect}>Score: {score}</strong>
              </Card.Text>
              <Card.Text>=
                <strong className={styles.resultScore}> {totalCorrect}/{totalQuestions}</strong>
              </Card.Text>
              {correctAnswers.length > 0 && (
                <Card.Text>
                  <strong className={styles.resultCorrect}>Correct Answers:</strong>
                  {correctAnswers.map((question, index) => (
                    <p key={index} className={styles.resultAnswer}>
                      {question.questionText}
                      <br />
                      Your Answer: {userAnswers[question.id]}
                      <br />
                      Correct Answer: {question.correctAnswer}
                    </p>
                  ))}
                </Card.Text>
              )}
              {incorrectAnswers.length > 0 && (
                <Card.Text>
                  <strong className={styles.resultIncorrect}>Incorrect Answers:</strong>
                  {incorrectAnswers.map((question, index) => (
                    <p key={index} className={styles.resultAnswer}>
                      {question.questionText}
                      <br />
                      Your Answer: {userAnswers[question.id]}
                      <br />
                      Correct Answer: {question.correctAnswer}
                    </p>
                  ))}
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        </div>
      );
    };     

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={styles.questionContainer} >
      {!gameStarted && (
        <Button variant="primary" className={styles.startButton} onClick={startGame}>
          Start Game
        </Button>
      )}
      {gameStarted && !gameOver && (
        <div>
          <h2 className={styles.questionTitle} >Question {currentQuestionIndex + 1}</h2>
          <ProgressBar now={(currentQuestionIndex / questions.length) * 100} />
          <div>
            <span>Time Remaining: {formatTime(timeRemaining)}</span>
          </div>
          {questions.length > 0 && (
            <Card className={`${styles.questionCard} mt-3`}>
              <Card.Body>
                <Card.Title>{questions[currentQuestionIndex].questionText}</Card.Title>
                <Form>
                  {questions[currentQuestionIndex].options.map((option, i) => (
                    <div key={i} className={`${styles.option} mb-3`}>
                      <Form.Check
                        type="radio"
                        id={`${questions[currentQuestionIndex].id}-${i}`}
                        name={questions[currentQuestionIndex].id}
                        value={option}
                        onChange={() => handleOptionChange(questions[currentQuestionIndex].id, option)}
                        label={option}
                      />
                    </div>
                  ))}
                </Form>
                <Button
                  variant="primary"
                  className={styles.checkAnswerButton}
                  onClick={() => checkAnswerAndNext(questions[currentQuestionIndex])}
                >
                  Check Answer & Next
                </Button>
              </Card.Body>
            </Card>
          )}
        </div>
      )}
      {gameOver && renderResult()}
    </div>
  );
};

export default QuestionFetch;
