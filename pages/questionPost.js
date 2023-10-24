import React, { useEffect } from 'react';

const QuestionPost = () => {



    const updateQuestion = async (id, updatedQuestionData) => {
        try {
            const response = await fetch(`http://3.17.156.147:8080/api/v1/auth/${id}`, {
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




            { questionText: "What is the name of the Islamic month in which Muslims fast six days after Ramadan?", correctAnswer: "Shawwal", difficultyLevel: "INTERMEDIATE", options: ["Rajab", "Shawwal", "Dhu al-Hijjah", "Safar"] },
            { questionText: "What is the name of the Islamic month in which the Night of Power (Laylat al-Qadr) is believed to occur?", correctAnswer: "Ramadan", difficultyLevel: "INTERMEDIATE", options: ["Shawwal", "Muharram", "Ramadan", "Rabi' al-Awwal"] },
            { questionText: "What is the name of the night when the first verses of the Quran were revealed?", correctAnswer: "Laylat al-Qadr", difficultyLevel: "INTERMEDIATE", options: ["Laylat al-Miraj", "Laylat al-Baraat", "Laylat al-Qadr", "Laylat al-Isra"] },
            { questionText: "Who was the first woman in Islam?", correctAnswer: "Khadija (pbuh)", difficultyLevel: "INTERMEDIATE", options: ["Aisha (pbuh)", "Fatimah (pbuh)", "Maryam (pbuh)", "Khadija (pbuh)"] },
            { questionText: "What is the name of the black stone embedded in the Kaaba?", correctAnswer: "Hajar al-Aswad", difficultyLevel: "INTERMEDIATE", options: ["Hajar al-Aswad", "Rukn al-Yamani", "Maqam Ibrahim", "Mizab al-Rahmah"] },
            { questionText: "What is the name of the well associated with the story of Prophet Ismael (pbuh) in Islamic tradition?", correctAnswer: "Zamzam", difficultyLevel: "INTERMEDIATE", options: ["Abraham's Well", "Moses' Well", "Zamzam", "Miriam's Well"] },
            { questionText: "What is the Islamic New Year called?", correctAnswer: "Hijri New Year", difficultyLevel: "INTERMEDIATE", options: ["Hijri New Year", "Islamic New Year", "Muslim New Year", "Arabic New Year"] },
            { questionText: "Who was the first caliph of Islam after the death of Prophet Muhammad (pbuh)?", correctAnswer: "Abu Bakr", difficultyLevel: "INTERMEDIATE", options: ["Umar", "Uthman", "Ali", "Abu Bakr"] },
            { questionText: "What is the term for the journey of Prophet Muhammad (pbuh) from Makkah to Jerusalem and then to heaven?", correctAnswer: "Isra and Mi'raj", difficultyLevel: "INTERMEDIATE", options: ["Hijra", "Isra and Mi'raj", "Laylat al-Qadr", "Laylat al-Baraat"] },
            { questionText: "What is the day of sacrifice during Hajj called?", correctAnswer: "Eid al-Adha", difficultyLevel: "INTERMEDIATE", options: ["Eid al-Fitr", "Eid al-Adha", "Ashura", "Mawlid"] },
            { questionText: "What is the highest level of paradise in Islamic belief?", correctAnswer: "Firdaws", difficultyLevel: "INTERMEDIATE", options: ["Jannah", "Firdaws", "Barzakh", "Nar"] },
            { questionText: "What is the term for an Islamic scholar?", correctAnswer: "Ulama", difficultyLevel: "INTERMEDIATE", options: ["Hafiz", "Muezzin", "Ulama", "Murabit"] },
            { questionText: "Who is the angel of death in Islamic belief?", correctAnswer: "Angel Azrael (Izra'il)", difficultyLevel: "INTERMEDIATE", options: ["Angel Michael (Mikail)", "Angel Gabriel (Jibril)", "Angel Israfil", "Angel Azrael (Izra'il)"] },
            { questionText: "In which city was Prophet Muhammad (pbuh) born?", correctAnswer: "Makkah", difficultyLevel: "INTERMEDIATE", options: ["Madinah", "Makkah", "Ta'if", "Yathrib"] },
            { questionText: "What is the belief in the oneness of God in Islam?", correctAnswer: "Tawhid", difficultyLevel: "INTERMEDIATE", options: ["Shirk", "Kufr", "Tawhid", "Iman"] },
            { questionText: "Which wife of the Prophet Muhammad (pbuh) is known as 'Mother of the Believers'?", correctAnswer: "Khadijah", difficultyLevel: "INTERMEDIATE", options: ["Aisha", "Khadijah", "Hafsa", "Zainab"] },
            { questionText: "Who was the Prophet Muhammad's (pbuh) father?", correctAnswer: "Abdullah", difficultyLevel: "INTERMEDIATE", options: ["Abu Talib", "Abdullah", "Abu Lahab", "Hamza"] },
            { questionText: "Who was the Prophet Muhammad's (pbuh) first wife?", correctAnswer: "Khadijah", difficultyLevel: "INTERMEDIATE", options: ["Aisha", "Khadijah", "Hafsa", "Zainab"] },

{
                questionText: "What is the name of the Prophet Muhammad's (pbuh) night journey from Mecca to Jerusalem?",
                correctAnswer: "Isra",
                difficultyLevel: "INTERMEDIATE",
                options: ["Miraj", "Hijra", "Isra", "Hegira"]
            },
            {
                questionText: "What is the name of the Muslim community?",
                correctAnswer: "Ummah",
                difficultyLevel: "INTERMEDIATE",
                options: ["Ummah", "Jama'ah", "Firqah", "Madhhab"]
            },
           
            {
                questionText: "Who was the prophet in Islam who was given the Ten Commandments by God?",
                correctAnswer: "Musa (pbuh)",
                difficultyLevel: "INTERMEDIATE",
                options: ["Ibrahim (pbuh)", "Musa (pbuh)", "Isa (pbuh)", "Adam (pbuh)"]
            },


            {
                questionText: "Who was the longest-serving caliph in Islamic history?",
                correctAnswer: "Uthman Ibn Affan",
                difficultyLevel: "INTERMEDIATE",
                options: ["Umar Ibn Al-Khattab", "Ali Ibn Abi Talib", "Abu Bakr", "Uthman Ibn Affan"]
            },
            {
                questionText: "What is the practice of Muslims reciting the Quran in Arabic called?",
                correctAnswer: "Tilawah",
                difficultyLevel: "INTERMEDIATE",
                options: ["Adhan", "Tilawah", "Tafsir", "Tahajjud"]
            },
            {
                questionText: "Which angel will blow the trumpet to signal the Day of Judgment in Islamic belief?",
                correctAnswer: "Angel Israfil",
                difficultyLevel: "INTERMEDIATE",
                options: ["Angel Michael (Mikail)", "Angel Gabriel (Jibril)", "Angel Israfil", "Angel Azrael (Izra'il)"]
            },


            {
                questionText: "Which Prophet built the Kaaba according to Islamic tradition?",
                correctAnswer: "Ibrahim (pbuh)",
                difficultyLevel: "INTERMEDIATE",
                options: ["Adam (pbuh)", "Nuh (pbuh)", "Musa (pbuh)", "Ibrahim (pbuh)"]
            },


            {
                questionText: "Who was the uncle of Prophet Muhammad (pbuh) who was known for his courage and strength?",
                correctAnswer: "Hamza ibn Abdul-Muttalib",
                difficultyLevel: "INTERMEDIATE",
                options: ["Abu Talib", "Abdullah", "Abu Lahab", "Hamza ibn Abdul-Muttalib"]
            },


            {
                questionText: "What is the name of the second caliph of Islam?",
                correctAnswer: "Umar ibn al-Khattab",
                difficultyLevel: "INTERMEDIATE",
                options: ["Abu Bakr", "Umar ibn al-Khattab", "Uthman ibn Affan", "Ali ibn Abi Talib"]
            }, {
                questionText: "What is the Islamic practice of temporary marriage called?",
                correctAnswer: "Nikah Mut'ah",
                difficultyLevel: "INTERMEDIATE",
                options: ["Nikah", "Nikah Misyar", "Nikah Mut'ah", "Nikah Halala"]
            },


            {
                questionText: "Which day in Islamic belief is known as the 'Day of Judgment' and represents the day of judgment?",
                correctAnswer: "Yawm al-Qiyamah",
                difficultyLevel: "INTERMEDIATE",
                options: ["Yawm al-Jum'ah", "Yawm al-Adha", "Yawm al-Fitr", "Yawm al-Qiyamah"]
            },


            {
                questionText: "What is the major sect of Islam that follows the Rashidun Caliphs after Prophet Muhammad (pbuh)?",
                correctAnswer: "Sunni",
                difficultyLevel: "INTERMEDIATE",
                options: ["Sunni", "Shia", "Sufi", "Ahmadiyya"]
            }







        ];




        for (let questionData of questions) {
            try {
                const response = await fetch('https://muslimtrivia.com/api/v1/auth', {
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
            const response = await fetch(`http://muslimtrivia.com/api/v1/auth/questions/${id}`, {
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
            <button onClick={() => updateQuestion(2, {
                questionText: "What is the term for the pilgrimage to Mecca performed by Muslims outside the obligatory Hajj?",
                correctAnswer: "Umrah",
                difficultyLevel: "BEGINNER",
                options: ["Hajj", "Umrah", "Tawaf", "Iftar"]
            })}>Update Question with ID 28</button>
        </div>


    );
};

export default QuestionPost;
