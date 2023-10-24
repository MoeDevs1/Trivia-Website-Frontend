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
                questionText: "What is the concept of predestination or divine decree in Islam?",
                correctAnswer: "Qadar",
                difficultyLevel: "ADVANCED",
                options: ["Halal", "Shirk", "Qadar", "Kufr"],
                },
                
                
                {
                questionText: "What is the term for the act of striving or struggling in the way of Allah?",
                correctAnswer: "Jihad",
                difficultyLevel: "ADVANCED",
                options: ["Hijra", "Shahada", "Haram", "Jihad"],
                },
                
                
                {
                questionText: "Who was the prominent Muslim philosopher, theologian, and physician from the Islamic Golden Age, known for his work 'The Book of Healing'?",
                correctAnswer: "Ibn Sina (Avicenna)",
                difficultyLevel: "ADVANCED",
                options: ["Ibn Rushd (Averroes)", "Ibn Sina (Avicenna)", "Al-Farabi", "Al-Ghazali"],
                },
                
                
                {
                questionText: "What is the name of the Islamic month in which fasting is prohibited?",
                correctAnswer: "Dhu al-Hijjah",
                difficultyLevel: "ADVANCED",
                options: ["Rajab", "Shawwal", "Dhu al-Hijjah", "Safar"],
                },
                
                
                {
                questionText: "Who was the renowned Muslim scholar and philosopher known for his works 'The Incoherence of the Philosophers' and 'The Revival of Religious Sciences'?",
                correctAnswer: "Al-Ghazali",
                difficultyLevel: "ADVANCED",
                options: ["Ibn Sina (Avicenna)", "Al-Farabi", "Al-Ghazali", "Ibn Rushd (Averroes)"],
                },
                
                
                {
                questionText: "Who was the Muslim polymath known for his contributions to various fields, including astronomy, mathematics, and optics?",
                correctAnswer: "Ibn al-Haytham",
                difficultyLevel: "ADVANCED",
                options: ["Al-Farabi", "Ibn al-Haytham", "Ibn Sina (Avicenna)", "Al-Kindi"],
                },
                
                
                {
                questionText: "What is the name of the Islamic month that marks the beginning of the Islamic calendar?",
                correctAnswer: "Muharram",
                difficultyLevel: "ADVANCED",
                options: ["Rabi' al-Awwal", "Shaban", "Muharram", "Rajab"],
                },
                
                
                {
                questionText: "Who was the Muslim philosopher and theologian known for his works 'The Incoherence of the Incoherence' and 'The Decisive Treatise'?",
                correctAnswer: "Ibn Rushd (Averroes)",
                difficultyLevel: "ADVANCED",
                options: ["Al-Ghazali", "Ibn Rushd (Averroes)", "Al-Farabi", "Ibn Sina (Avicenna)"],
                },
                
                
                {
                questionText: "What is the name of the Islamic month in which the Battle of Badr took place?",
                correctAnswer: "Ramadan",
                difficultyLevel: "ADVANCED",
                options: ["Muharram", "Safar", "Ramadan", "Shawwal"],
                },
                
                
                {
                questionText: "What is the Islamic concept of loyalty and allegiance to the Muslim community known as?",
                correctAnswer: "Wilayah",
                difficultyLevel: "ADVANCED",
                options: ["Iman", "Ihsan", "Wilayah", "Taqwa"],
                },
                {
                questionText: "Who was the Muslim military and political leader known as 'Lion of God' and fought alongside Prophet Muhammad (pbuh) in many battles?",
                correctAnswer: "Ali ibn Abi Talib",
                difficultyLevel: "ADVANCED",
                options: ["Umar ibn al-Khattab", "Uthman ibn Affan", "Abu Bakr as-Siddiq", "Ali ibn Abi Talib"],
                },
                {
                questionText: "What is the term for the Islamic practice of self-purification through spiritual and physical cleansing?",
                correctAnswer: "Tazkiyah",
                difficultyLevel: "ADVANCED",
                options: ["Taharah", "Ibadah", "Tazkiyah", "Muraqaba"],
                },
                {
                questionText: "Who was the prominent female companion of Prophet Muhammad (pbuh) known for her bravery and participation in battles?",
                correctAnswer: "Umm Salamah",
                difficultyLevel: "ADVANCED",
                options: ["Aisha bint Abu Bakr", "Fatimah bint Muhammad", "Khadijah bint Khuwaylid", "Umm Salamah"],
                },
                
                
                {
                questionText: "What is the Islamic term for the practice of seeking knowledge from qualified scholars?",
                correctAnswer: "Talab al-ʿIlm",
                difficultyLevel: "ADVANCED",
                options: ["Tafsir", "Fiqh", "Talab al-ʿIlm", "Ijtihad"],
                },
                
                
                {
                questionText: "What is the term for the Islamic practice of showing respect and honor to parents?",
                correctAnswer: "Birr al-Walidayn",
                difficultyLevel: "ADVANCED",
                options: ["Akhlaq", "Birr al-Walidayn", "Dhikr", "Ihsan"],
                },
                
                
                {
                questionText: "What is the name of the tribe that Prophet Muhammad (pbuh) belonged to?",
                correctAnswer: "Quraysh",
                difficultyLevel: "ADVANCED",
                options: ["Banu Hashim", "Ansar", "Muhajirun", "Quraysh"],
                },
                
                
                {
                questionText: "Which city did Prophet Muhammad (pbuh) migrate to, escaping persecution in Makkah?",
                correctAnswer: "Madinah",
                difficultyLevel: "ADVANCED",
                options: ["Ta'if", "Jerusalem", "Madinah", "Tabuk"],
                },
                
                
                {
                questionText: "What is the term for the farewell pilgrimage of Prophet Muhammad (pbuh) in the year of his death?",
                correctAnswer: "Hajjat al-Wida",
                difficultyLevel: "ADVANCED",
                options: ["Umrah al-Tamattu", "Hajjat al-Wida", "Hajj al-Ifrad", "Hajj al-Qiran"],
                },
                {
                questionText: "Who was the first person to accept Islam after Prophet Muhammad (pbuh) received the revelation?",
                correctAnswer: "Khadijah bint Khuwaylid",
                difficultyLevel: "ADVANCED",
                options: ["Abu Bakr", "Ali ibn Abi Talib", "Uthman ibn Affan", "Khadijah bint Khuwaylid"],
                },
                {
                questionText: "What is the name of the cave where Prophet Muhammad (pbuh) received the first revelation from Allah?",
                correctAnswer: "Hira",
                difficultyLevel: "ADVANCED",
                options: ["Thawr", "Hira", "Uhud", "Jabal al-Nour"],
                },
                {
                questionText: "Who is the uncle of Prophet Muhammad (pbuh) who initially provided protection and support to him?",
                correctAnswer: "Abu Talib",
                difficultyLevel: "ADVANCED",
                options: ["Umar ibn al-Khattab", "Uthman ibn Affan", "Abu Bakr as-Siddiq", "Abu Talib"],
                },
                {
                questionText: "What is the name of the battle in which the Muslims were outnumbered and achieved a decisive victory?",
                correctAnswer: "Battle of Badr",
                difficultyLevel: "ADVANCED",
                options: ["Battle of Uhud", "Battle of Badr", "Battle of Khandaq", "Battle of Hunayn"],
                },
                {
                questionText: "What is the term for the migration of Prophet Muhammad (pbuh) from Makkah to Madinah?",
                correctAnswer: "Hijrah",
                difficultyLevel: "ADVANCED",
                options: ["Istighfar", "Hijrah", "Tawakkul", "Iqra"],
                },
                {
                questionText: "Who was the first person to accept Islam from the Ansar (residents of Madinah)?",
                correctAnswer: "Sa'd ibn Mu'adh",
                difficultyLevel: "ADVANCED",
                options: ["Abdullah ibn Ubayy", "Sa'd ibn Mu'adh", "Abdullah ibn Salam", "Abu Ayyub al-Ansari"],
                },
                {
                questionText: "What is the term for the sealed letter that Prophet Muhammad (pbuh) sent to various rulers inviting them to Islam?",
                correctAnswer: "Sahifa",
                difficultyLevel: "ADVANCED",
                options: ["Fath", "Hadith", "Sahifa", "Sira"],
                },
                {
                questionText: "What is the name of the treaty signed between Prophet Muhammad (pbuh) and the Quraysh tribe, marking a truce and allowing the Muslims to enter Makkah?",
                correctAnswer: "Treaty of Hudaybiyyah",
                difficultyLevel: "ADVANCED",
                options: ["Treaty of Hudaibiya", "Treaty of Versailles", "Treaty of Bani Qaynuqa", "Treaty of Ta'if"],
                },
                {
                questionText: "Who was the Ethiopian Christian king who accepted the letter of Prophet Muhammad (pbuh) and granted protection to the Muslims?",
                correctAnswer: "Negus",
                difficultyLevel: "ADVANCED",
                options: ["Pharaoh", "Sultan", "Caliph", "Negus"],
                },
                {
                questionText: "What is the term for the practice of emulating the actions and sayings of Prophet Muhammad (pbuh)?",
                correctAnswer: "Sunnah",
                difficultyLevel: "ADVANCED",
                options: ["Shahada", "Salat", "Sunnah", "Sadaqah"],
                },
                {
                questionText: "Who was the companion of Prophet Muhammad (pbuh) known for his beautiful recitation of the Quran?",
                correctAnswer: "Abdullah ibn Masud",
                difficultyLevel: "ADVANCED",
                options: ["Abu Bakr", "Umar ibn al-Khattab", "Uthman ibn Affan", "Abdullah ibn Masud"],
                },
                {
                questionText: "What is the name of the well-known battle that took place after the death of Prophet Muhammad (pbuh) to establish the caliphate?",
                correctAnswer: "Battle of Jamal",
                difficultyLevel: "ADVANCED",
                options: ["Battle of Badr", "Battle of Uhud", "Battle of Jamal", "Battle of Siffin"],
                }
                
                
                ,
                {
                questionText: "What is the term for the practice of seeking blessings or intercession through the relics or belongings of Prophet Muhammad (pbuh)?",
                correctAnswer: "Tabarruk",
                difficultyLevel: "ADVANCED",
                options: ["Taqwa", "Tahajjud", "Tabarruk", "Tawakkul"],
                },
                {
                questionText: "Who was the freed slave and companion of Prophet Muhammad (pbuh) known for his generosity and loyalty?",
                correctAnswer: "Bilal ibn Rabah",
                difficultyLevel: "ADVANCED",
                options: ["Suhayb ar-Rumi", "Bilal ibn Rabah", "Zaid ibn Harithah", "Salman al-Farisi"],
                },
                {
                questionText: "What is the term for the migration of Prophet Muhammad (pbuh) from Madinah back to Makkah?",
                correctAnswer: "Fath",
                difficultyLevel: "ADVANCED",
                options: ["Hijrah", "Tawaf", "Fath", "Haram"],
                },
                {
                questionText: "Who was the companion of Prophet Muhammad (pbuh) known for his bravery and fighting skills?",
                correctAnswer: "Hamza ibn Abdul-Muttalib",
                difficultyLevel: "ADVANCED",
                options: ["Abu Bakr", "Umar ibn al-Khattab", "Uthman ibn Affan", "Hamza ibn Abdul-Muttalib"],
                },
                {
                questionText: "What is the term for the speech or sermon delivered by Prophet Muhammad (pbuh) during the Friday congregational prayer?",
                correctAnswer: "Khutbah",
                difficultyLevel: "ADVANCED",
                options: ["Adhan", "Tafsir", "Salat", "Khutbah"],
                },
                {
                questionText: "Who was the companion of Prophet Muhammad (pbuh) known for his beautiful calligraphy and preservation of the Quran?",
                correctAnswer: "Zaid ibn Thabit",
                difficultyLevel: "ADVANCED",
                options: ["Ali ibn Abi Talib", "Umar ibn al-Khattab", "Zaid ibn Thabit", "Abdullah ibn Masud"],
                },
                {
                questionText: "What is the name of the battle in which Prophet Muhammad (pbuh) and the Muslims conquered Makkah?",
                correctAnswer: "Conquest of Makkah",
                difficultyLevel: "ADVANCED",
                options: ["Battle of Khaybar", "Battle of Hunayn", "Conquest of Makkah", "Battle of Tabuk"],
                },
                {
                questionText: "Who was the companion of Prophet Muhammad (pbuh) known for his expertise in the interpretation of dreams?",
                correctAnswer: "Ibn Sirin",
                difficultyLevel: "ADVANCED",
                options: ["Umar ibn al-Khattab", "Ali ibn Abi Talib", "Ibn Sirin", "Abdullah ibn Abbas"],
                },
                {
                questionText: "What is the term for the night journey of Prophet Muhammad (pbuh) from Makkah to Jerusalem and then to the heavens?",
                correctAnswer: "Isra and Mi'raj",
                difficultyLevel: "ADVANCED",
                options: ["Hijrah", "Isra and Mi'raj", "Laylat al-Qadr", "Laylat al-Baraat"],
                },
                {
                questionText: "Who was the companion of Prophet Muhammad (pbuh) known for his eloquence and recitation of the Quran?",
                correctAnswer: "Abdullah ibn Abbas",
                difficultyLevel: "ADVANCED",
                options: ["Umar ibn al-Khattab", "Ali ibn Abi Talib", "Abdullah ibn Abbas", "Abu Bakr"],
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
