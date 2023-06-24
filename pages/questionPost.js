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
            
                                  
                                    
            {
                questionText: "Who is the founder of Islam?",
                correctAnswer: "Prophet Muhammad (pbuh)",
                difficultyLevel: "BEGINNER",
                options: ["Prophet Moses (pbuh)", "Prophet Jesus (pbuh)", "Prophet Abraham (pbuh)", "Prophet Muhammad (pbuh)"]
                },
                {
                questionText: "What is the holy book of Islam?",
                correctAnswer: "Quran",
                difficultyLevel: "BEGINNER",
                options: ["Bible", "Torah", "Quran", "Bhagavad Gita"]
                },
                {
                questionText: "How many pillars are there in Islam?",
                correctAnswer: "5",
                difficultyLevel: "BEGINNER",
                options: ["3", "4", "5", "6"]
                },
                {
                questionText: "Which city is known as the birthplace of Islam?",
                correctAnswer: "Makkah",
                difficultyLevel: "BEGINNER",
                options: ["Madinah", "Makkah", "Baghdad", "Cairo"]
                },
                {
                questionText: "What is the Islamic term for 'charity'?",
                correctAnswer: "Zakat",
                difficultyLevel: "BEGINNER",
                options: ["Hajj", "Zakat", "Salah", "Sawm"]
                },
                {
                questionText: "What is the term for 'God' in Arabic?",
                correctAnswer: "Allah",
                difficultyLevel: "BEGINNER",
                options: ["Rabbi", "Allah", "Deus", "Dios"]
                },
                {
                questionText: "Which month is Ramadan in the Islamic calendar?",
                correctAnswer: "9th month",
                difficultyLevel: "BEGINNER",
                options: ["1st month", "5th month", "9th month", "12th month"]
                },
                {
                questionText: "Who was the first woman in Islam?",
                correctAnswer: "Khadija (pbuh)",
                difficultyLevel: "BEGINNER",
                options: ["Aisha (pbuh)", "Fatimah (pbuh)", "Maryam (pbuh)", "Khadija (pbuh)"]
                },
                {
                questionText: "What is the largest sect in Islam?",
                correctAnswer: "Sunni",
                difficultyLevel: "BEGINNER",
                options: ["Shia", "Sunni", "Ahmadiyya", "Sufi"]
                },
                {
                questionText: "Which prayer is performed just after sunset in Islam?",
                correctAnswer: "Maghrib",
                difficultyLevel: "BEGINNER",
                options: ["Fajr", "Dhuhr", "Asr", "Maghrib"]
                },
                {
                questionText: "What is the Islamic declaration of faith called?",
                correctAnswer: "Shahada",
                difficultyLevel: "BEGINNER",
                options: ["Shahada", "Salah", "Zakat", "Hajj"]
                },
                {
                questionText: "Who was the angel who revealed the messages from Allah to Prophet Muhammad (pbuh)?",
                correctAnswer: "Angel Gabriel (Jibril)",
                difficultyLevel: "BEGINNER",
                options: ["Angel Michael (Mikail)", "Angel Gabriel (Jibril)", "Angel Israfil", "Angel Azrael (Izrail)"]
                },
                {
                questionText: "What does 'Islam' mean in Arabic?",
                correctAnswer: "Submission (to the will of God)",
                difficultyLevel: "BEGINNER",
                options: ["Love", "Peace", "Submission (to the will of God)", "Knowledge"]
                },
                {
                questionText: "What is the term for the pilgrimage to Makkah that every Muslim is required to make at least once in their lifetime, if they are able?",
                correctAnswer: "Hajj",
                difficultyLevel: "BEGINNER",
                options: ["Zakat", "Salah", "Hajj", "Sawm"]
                },
                {
                questionText: "What is the Islamic term for fasting, particularly during the month of Ramadan?",
                correctAnswer: "Sawm",
                difficultyLevel: "BEGINNER",
                options: ["Zakat", "Salah", "Hajj", "Sawm"]
                },
                {
                questionText: "What is the longest chapter of the Quran called?",
                correctAnswer: "Al-Baqarah",
                difficultyLevel: "BEGINNER",
                options: ["Al-Fatiha", "Al-Baqarah", "Ali 'Imran", "An-Nisa"]
                },
                {
                questionText: "What is the Islamic term for a 'saying or action of Prophet Muhammad (pbuh)'?",
                correctAnswer: "Hadith",
                difficultyLevel: "BEGINNER",
                options: ["Sharia", "Fatwa", "Hadith", "Tafsir"]
                },
                {
                questionText: "Which city do Muslims face during prayer?",
                correctAnswer: "Makkah",
                difficultyLevel: "BEGINNER",
                options: ["Madinah", "Makkah", "Jerusalem", "Istanbul"]
                },
                {
                questionText: "Which Prophet (pbuh) built the Kaaba according to Islamic tradition?",
                correctAnswer: "Prophet Abraham (Ibrahim pbuh)",
                difficultyLevel: "BEGINNER",
                options: ["Prophet Noah (Nuh pbuh)", "Prophet Moses (Musa pbuh)", "Prophet Jesus (Isa pbuh)", "Prophet Abraham (Ibrahim pbuh)"]
                },
                {
                questionText: "Who is the last prophet in Islam?",
                correctAnswer: "Prophet Muhammad (pbuh)",
                difficultyLevel: "BEGINNER",
                options: ["Prophet Jesus (pbuh)", "Prophet Moses (pbuh)", "Prophet Abraham (pbuh)", "Prophet Muhammad (pbuh)"]
                },
                {
                questionText: "What is the language of the Quran?",
                correctAnswer: "Arabic",
                difficultyLevel: "BEGINNER",
                options: ["Hebrew", "Latin", "English", "Arabic"]
                },
                {
                questionText: "What is the Islamic dietary law called?",
                correctAnswer: "Halal",
                difficultyLevel: "BEGINNER",
                options: ["Kosher", "Vegan", "Halal", "Organic"]
                },
                
                
                
                
                {
                questionText: "What is the name of the cube-shaped building in Makkah that Muslims circle during Hajj?",
                correctAnswer: "Kaaba",
                difficultyLevel: "BEGINNER",
                options: ["Masjid al-Haram", "Kaaba", "Masjid al-Nabawi", "Al-Aqsa Mosque"]
                },
                
                
                
                
                ,{
                questionText: "What is the name of the Muslim call to prayer?",
                correctAnswer: "Adhan",
                difficultyLevel: "BEGINNER",
                options: ["Dua", "Salat", "Adhan", "Iqama"]
                },
                
                
                {
                questionText: "What is the celebration at the end of Ramadan called?",
                correctAnswer: "Eid al-Fitr",
                difficultyLevel: "BEGINNER",
                options: ["Eid al-Adha", "Eid al-Fitr", "Laylat al-Qadr", "Mawlid al-Nabi"]
                },
                {
                questionText: "What is the name of the first chapter of the Quran?",
                correctAnswer: "Al-Fatiha",
                difficultyLevel: "BEGINNER",
                options: ["Al-Fatiha", "Al-Baqarah", "Ali 'Imran", "An-Nisa"]
                },
                {
                questionText: "What is the title given to those who have memorized the Quran?",
                correctAnswer: "Hafiz",
                difficultyLevel: "BEGINNER",
                options: ["Hafiz", "Sheikh", "Imam", "Muezzin"]
                },
                {
                questionText: "What do Muslims do during the month of Ramadan?",
                correctAnswer: "Fast from dawn to sunset",
                difficultyLevel: "BEGINNER",
                options: ["Give up meat", "Fast from dawn to sunset", "Pray all night", "Go on pilgrimage"]
                },
                {
                questionText: "What is the second source of Islamic law after the Quran?",
                correctAnswer: "Hadith",
                difficultyLevel: "BEGINNER",
                options: ["Tafsir", "Fiqh", "Ijma", "Hadith"]
                },
                
                
                {
                questionText: "Which of the following is NOT one of the Five Pillars of Islam?",
                correctAnswer: "Jihad",
                difficultyLevel: "BEGINNER",
                options: ["Shahada", "Salah", "Zakat", "Jihad"]
                },
                {
                questionText: "What is the name of the prayer that Muslims perform five times a day?",
                correctAnswer: "Salah",
                difficultyLevel: "BEGINNER",
                options: ["Dua", "Tahajjud", "Taraweeh", "Salah"]
                },
                {
                questionText: "What is the term for a chapter of the Quran?",
                correctAnswer: "Surah",
                difficultyLevel: "BEGINNER",
                options: ["Ayah", "Juz", "Hizb", "Surah"]
                },
                {
                questionText: "What is the term for a verse of the Quran?",
                correctAnswer: "Ayah",
                difficultyLevel: "BEGINNER",
                options: ["Surah", "Juz", "Hizb", "Ayah"]
                },
                {
                questionText: "What is the first prayer of the day in Islam?",
                correctAnswer: "Fajr",
                difficultyLevel: "BEGINNER",
                options: ["Isha", "Maghrib", "Fajr", "Asr"]
                },
                
                
                {
                questionText: "What is the ritual purification before prayer called?",
                correctAnswer: "Wudhu",
                difficultyLevel: "BEGINNER",
                options: ["Ghusl", "Tayammum", "Istinja", "Wudhu"]
                },
                {
                questionText: "What is the full body ritual purification called?",
                correctAnswer: "Ghusl",
                difficultyLevel: "BEGINNER",
                options: ["Wudhu", "Ghusl", "Tayammum", "Istinja"]
                },
                {
                questionText: "How many Rak'ahs (units) are there in the Fajr prayer?",
                correctAnswer: "2",
                difficultyLevel: "BEGINNER",
                options: ["2", "3", "4", "5"]
                },
                {
                questionText: "How many Rak'ahs (units) are there in the Maghrib prayer?",
                correctAnswer: "3",
                difficultyLevel: "BEGINNER",
                options: ["2", "3", "4", "5"]
                },
                {
                questionText: "How many Rak'ahs (units) are there in the isha prayer?",
                correctAnswer: "4",
                difficultyLevel: "BEGINNER",
                options: ["2", "3", "4", "5"]
                },
                {
                questionText: "How many Rak'ahs (units) are there in the Asr prayer?",
                correctAnswer: "4",
                difficultyLevel: "BEGINNER",
                options: ["2", "3", "4", "5"]
                },
                
                
                {
                questionText: "What is the pre-dawn meal eaten before the fast starts during Ramadan called?",
                correctAnswer: "Suhoor",
                difficultyLevel: "BEGINNER",
                options: ["Iftar", "Suhoor", "Sadaqah", "Zakat"]
                },
                
                
                
                
                {
                questionText: "When is the Fajr prayer performed in Islam?",
                correctAnswer: "At dawn, before sunrise",
                difficultyLevel: "BEGINNER",
                options: ["At dawn, before sunrise", "Immediately after sunset", "In the late afternoon", "In the midday"]
                },
                {
                questionText: "When is the Dhuhr prayer performed in Islam?",
                correctAnswer: "After the sun has reached its zenith",
                difficultyLevel: "BEGINNER",
                options: ["Before sunrise", "After the sun has reached its zenith", "After sunset", "Late night"]
                },
                {
                questionText: "When is the Asr prayer performed in Islam?",
                correctAnswer: "In the afternoon",
                difficultyLevel: "BEGINNER",
                options: ["Before sunrise", "At noon", "In the afternoon", "Late night"]
                },
                {
                questionText: "When is the Isha prayer performed in Islam?",
                correctAnswer: "At nightfall",
                difficultyLevel: "BEGINNER",
                options: ["Before sunrise", "At noon", "After sunset", "At nightfall"]
                }
                
                
                
                ,{
                questionText: "What is the term for the special congregational prayer performed by Muslims during the month of Ramadan?",
                correctAnswer: "Taraweeh",
                difficultyLevel: "BEGINNER",
                options: ["Isha", "Fajr", "Taraweeh", "Jumu'ah"]
                }
                ,
                
                {
                questionText: "Which Surah (chapter) of the Quran is recited in every unit of the Muslim prayer?",
                correctAnswer: "Al-Fatiha",
                difficultyLevel: "BEGINNER",
                options: ["Al-Baqarah", "Al-Ikhlas", "Al-Fatiha", "Al-Kawthar"]
                },
                {
                questionText: "What is the term for an Islamic house of worship?",
                correctAnswer: "Masjid",
                difficultyLevel: "BEGINNER",
                options: ["Madrassah", "Zawiya", "Khanqah", "Masjid"]
                },
                
                

                  
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
