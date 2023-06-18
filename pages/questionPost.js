import React, { useEffect } from 'react';

const QuestionPost = () => {



    const updateQuestion = async (id, updatedQuestionData) => {
        try {
            const response = await fetch(`http://localhost:8080/api/v1/auth/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedQuestionData),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
 
    const postQuestions = async () => {
        const questions = [
            {
                questionText: "What is the day of congregational prayer in Islam?",
                correctAnswer: "Friday",
                difficultyLevel: "BEGINNER",
                options: ["Monday", "Friday", "Saturday", "Sunday"]
                },
           
        ];
   
    

        for (let questionData of questions) {
            try {
                const response = await fetch('http://localhost:8080/api/v1/auth', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(questionData),
                });
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    const deleteQuestion = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/v1/auth/questions/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log(`Question with ID ${id} deleted successfully`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        <div>
        <h2>Question Post Component</h2>
        <button onClick={postQuestions}>Post Questions</button>
        <button onClick={() => deleteQuestion(254)}>Delete Question with ID 116</button>
        <button onClick={() => updateQuestion(228, {
            questionText: "How many pillars are there in islam?",
            correctAnswer: "5",
            difficultyLevel: "BEGINNER",
            options: ["1", "2", "3", "5"]
        })}>Update Question with ID 28</button>
    </div>

        
    );
};

export default QuestionPost;
