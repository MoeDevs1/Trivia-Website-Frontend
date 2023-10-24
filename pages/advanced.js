import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Form, ProgressBar } from 'react-bootstrap';
import styles from '../styles/advanced.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const advanced = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(1890); // 3 minutes in seconds
  const router = useRouter();

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
          'https://muslimtrivia.com/api/v1/auth/authenticate/api/v1/auth/user',
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
    fetchQuestions("ADVANCED");  // Fetch beginner level questions
  }, []);

  const fetchQuestions = async (difficulty, numberOfQuestions =7) => {
    try {
      const response = await fetch(`https://muslimtrivia.com/api/v1/auth/authenticate/api/v1/auth/questions/${difficulty}/${numberOfQuestions}`);
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
    // Reset game state
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScore(0);
    setGameOver(false);
    setTimeRemaining(420); // 3 minutes in seconds
    
    fetchQuestions("ADVANCED"); // Fetch new questions
  
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
  
    if (currentQuestionIndex + 1 ===7) {
      try {
        const token = `Bearer ${sessionStorage.getItem('token')}`;
        const config = {
          headers: { Authorization: token },
        };
  
        const correctAnswers = questions.filter(
          question => userAnswers[question.id] === question.correctAnswer
        );
        const totalCorrect = correctAnswers.length;
  
        const requestData = {
          score: totalCorrect * 3, // Use the total number of correct answers as the score
        };
  
        await axios.post(
          `https:///api/v1/auth/authenticate/api/v1/auth/leaderboard/${username}`,
          requestData,
          config
        );
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  ;


     const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
 
  const renderResult = () => {
    const correctAnswers = questions.filter(
      question => userAnswers[question.id] === question.correctAnswer
    );
    const incorrectAnswers = questions.filter(
      question => userAnswers[question.id] !== question.correctAnswer
    );
    const totalCorrect = correctAnswers.length;
    const totalQuestions = 7;
  
    return (
      <div className={styles.Container}>
                <div className={styles.bottomContainer}>
                <div className={styles.logo} onClick={() => router.push('/')}>
        <Image
          src="/img/muslim-trivia-high-resolution-logo-color-on-transparent-background.png"
          alt=""
          width={140}
          height={60}
          className={styles.logo}
        />
      </div>    <button className={styles.buttonPlay}  onClick={startGame} >Play Again</button>
    </div>
           <div className={styles.imageContainer}>
         
     
         <div className={styles.resultContainer}>
          <Card className={`${styles.resultCard} mt-3`}>
            <Card.Body>
            <div className={styles.titleContainer}>
 Results 
        </div>

              <Card.Text>
                
                <strong className={styles.resultCorrect}>Score: {totalCorrect * 3}</strong>
              </Card.Text>
              <Card.Text>
              
              </Card.Text>
              <div className={styles.scrollContainer}>
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
              </div>
            </Card.Body>
          </Card>
          </div>

        </div>
        <span className={styles.bottowmContainer2}>
 

        <div className={styles.scoreContainer2}>

<strong className={styles.resultScore}>
  {totalCorrect}/{totalQuestions}
</strong>

</div>     </span>
      </div>
       
    );
           
    };     

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={styles.lobbyContainer} >
      {!gameStarted && (
     
            <div className={styles.container}>
     
      <div className={styles.bottomContainer2}>
      <div className={styles.logo} onClick={() => router.push('/')}>
        <Image
          src="/img/muslim-trivia-high-resolution-logo-color-on-transparent-background.png"
          alt=""
          width={140}
          height={60}
          className={styles.logo}
        />
      </div> 

      <Button variant="primary" className={styles.startButton} onClick={startGame}>
          Start Game
        </Button>
       </div>
      <div className={styles.pointSystemContainer}>
      <Image
          src="/img/pointer.jpg"
          alt="Point System"
          width={600}
          height={680}
          className={styles.pointSystemImage}
        />

        <Image
          src="/img/instruct.jpg"
          alt="Point System"
          width={600}
          height={680}
          className={styles.pointSystemImage}
        />
      </div>
      <span className={styles.bottowmContainer2}>
   </span>
    </div>
      )}
     
     
     
     
     
     
     
     
     
     
      {gameStarted && !gameOver && (

        <div>
           
           
            <div className={styles.bottomContainer}>
                <div className={styles.logo} onClick={() => router.push('/')}>
        <Image
          src="/img/muslim-trivia-high-resolution-logo-color-on-transparent-background.png"
          alt=""
          width={140}
          height={60}
          className={styles.logo}
        />
      </div>    

 
      <h2 className={styles.questionTitle}>  Question {currentQuestionIndex + 1}</h2>
          <ProgressBar now={(currentQuestionIndex / questions.length) * 100} />
          <div> 
            <span className={styles.questionTitle}> Time Remaining: {formatTime(timeRemaining)}</span>
     </div>
    </div>
    <div className={styles.questionContainer}>

          
          {questions.length > 0 && (
            <Card className={`${styles.questionCard} mt-3`}>
            <Card.Body>
              <div className={styles.questionTextContainer}>
                <div className={styles.questionText}>{questions[currentQuestionIndex].questionText}</div>
              </div>
              {questions[currentQuestionIndex].options.map((option, i) => (
                <div className={styles.optionsContainer}>
                  <Button
                    variant="outline-primary"
                    className={`${styles.optionButton} mb-3`}
                    key={i}
                    disabled={selectedOption !== null}
                    onClick={() => {
                      handleOptionChange(questions[currentQuestionIndex].id, option);
                      checkAnswerAndNext(questions[currentQuestionIndex]);
                    }}
                  >
                    {option}
                    {selectedOption && selectedOption.option === option && (
                      <span className={isCorrect ? styles.correctIcon : styles.incorrectIcon}>
                        {isCorrect ? '✔' : '✖'}
                      </span>
                    )}
                  </Button>
                </div>
              ))}
            </Card.Body>
          </Card>
          
           
          )}
        </div>
        </div>
        
      )}
          <span className={styles.bottowmContainer2}>
 
ADVANCED    </span>
      {gameOver && renderResult()}
    </div>
   );
};

export default advanced;
