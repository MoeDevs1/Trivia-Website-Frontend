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
                questionText: "What ayat is this: مَنْ عَمِلَ صَالِحًا فَلِنَفْسِهِ ۖ وَمَنْ أَسَاءَ فَعَلَيْهَا ۗ",
                correctAnswer: "Chapter 41, Verse 46",
                difficultyLevel: "EXPERT",
                options: ["Chapter 18, Verse 30", "Chapter 41, Verse 46", "Chapter 2, Verse 286", "Chapter 9, Verse 129"],
                },
                
                {
                questionText: "What ayat is this: الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُمْ بِذِكْرِ اللَّهِ",
                correctAnswer: "Chapter 13, Verse 28",
                difficultyLevel: "EXPERT",
                options: ["Chapter 13, Verse 28", "Chapter 5, Verse 6", "Chapter 22, Verse 46", "Chapter 3, Verse 173"],
                },
                
                {
                questionText: "What ayat is this: قُلِ اللَّهُمَّ فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ",
                correctAnswer: "Chapter 39, Verse 46",
                difficultyLevel: "EXPERT",
                options: ["Chapter 39, Verse 46", "Chapter 12, Verse 64", "Chapter 6, Verse 101", "Chapter 30, Verse 40"],
                },
                
                {
                questionText: "What ayat is this: لَيْسَ الْبِرَّ أَنْ تُوَلُّوا وُجُوهَكُمْ قِبَلَ الْمَشْرِقِ وَالْمَغْرِبِ",
                correctAnswer: "Chapter 2, Verse 177",
                difficultyLevel: "EXPERT",
                options: ["Chapter 89, Verse 27", "Chapter 2, Verse 177", "Chapter 49, Verse 13", "Chapter 7, Verse 56"],
                },
                
                {
                questionText: "What ayat is this: يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَقُولُوا رَاعِنَا وَقُولُوا انظُرْنَا",
                correctAnswer: "Chapter 2, Verse 104",
                difficultyLevel: "EXPERT",
                options: ["Chapter 9, Verse 23", "Chapter 33, Verse 35", "Chapter 2, Verse 104", "Chapter 3, Verse 18"],
                },
                
                {
                questionText: "What ayat is this: إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ",
                correctAnswer: "Chapter 16, Verse 90",
                difficultyLevel: "EXPERT",
                options: ["Chapter 16, Verse 90", "Chapter 57, Verse 25", "Chapter 70, Verse 40", "Chapter 4, Verse 135"],
                },
                
                {
                questionText: "What ayat is this: فَبِمَا رَحْمَةٍ مِّنَ اللَّهِ لِنتَ لَهُمْ",
                correctAnswer: "Chapter 3, Verse 159",
                difficultyLevel: "EXPERT",
                options: ["Chapter 3, Verse 159", "Chapter 6, Verse 54", "Chapter 12, Verse 53", "Chapter 20, Verse 130"],
                },
                
                {
                questionText: "What ayat is this: وَلَوْ شَاءَ اللَّهُ لَجَعَلَكُمْ أُمَّةً وَاحِدَةً",
                correctAnswer: "Chapter 16, Verse 93",
                difficultyLevel: "EXPERT",
                options: ["Chapter 16, Verse 93", "Chapter 22, Verse 77", "Chapter 42, Verse 8", "Chapter 9, Verse 128"],
                },
                
                {
                questionText: "What ayat is this: فَاصْفَحِ الصَّفْحَ الْجَمِيلَ",
                correctAnswer: "Chapter 15, Verse 85",
                difficultyLevel: "EXPERT",
                options: ["Chapter 30, Verse 21", "Chapter 15, Verse 85", "Chapter 59, Verse 10", "Chapter 7, Verse 199"],
                },
                
                {
                questionText: "What ayat is this: وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ",
                correctAnswer: "Chapter 17, Verse 36",
                difficultyLevel: "EXPERT",
                options: ["Chapter 4, Verse 32", "Chapter 17, Verse 36", "Chapter 23, Verse 100", "Chapter 6, Verse 141"],
                },
                
                {
                questionText: "What ayat is this: وَاصْبِرْ عَلَىٰ مَا أَصَابَكَ",
                correctAnswer: "Chapter 31, Verse 17",
                difficultyLevel: "EXPERT",
                options: ["Chapter 31, Verse 17", "Chapter 2, Verse 45", "Chapter 12, Verse 90", "Chapter 16, Verse 127"],
                },
                
                {
                questionText: "What ayat is this: اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ",
                correctAnswer: "Chapter 24, Verse 35",
                difficultyLevel: "EXPERT",
                options: ["Chapter 24, Verse 35", "Chapter 39, Verse 22", "Chapter 56, Verse 75", "Chapter 11, Verse 61"],
                },
                
                {
                questionText: "What ayat is this: وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ",
                correctAnswer: "Chapter 17, Verse 23",
                difficultyLevel: "EXPERT",
                options: ["Chapter 2, Verse 255", "Chapter 17, Verse 23", "Chapter 5, Verse 76", "Chapter 9, Verse 31"],
                },
                
                {
                questionText: "What ayat is this: وَأَلْقَىٰ فِي الْأَرْضِ رَوَاسِيَ",
                correctAnswer: "Chapter 13, Verse 3",
                difficultyLevel: "EXPERT",
                options: ["Chapter 13, Verse 3", "Chapter 22, Verse 65", "Chapter 10, Verse 24", "Chapter 34, Verse 46"],
                },
                
                {
                questionText: "What ayat is this: يُحِبُّهُمْ وَيُحِبُّونَهُ",
                correctAnswer: "Chapter 5, Verse 54",
                difficultyLevel: "EXPERT",
                options: ["Chapter 5, Verse 54", "Chapter 9, Verse 71", "Chapter 18, Verse 28", "Chapter 48, Verse 29"],
                },
                
                {
                questionText: "What ayat is this: وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ",
                correctAnswer: "Chapter 17, Verse 23",
                difficultyLevel: "EXPERT",
                options: ["Chapter 2, Verse 255", "Chapter 17, Verse 23", "Chapter 5, Verse 76", "Chapter 9, Verse 31"],
                },
                
                {
                questionText: "What ayat is this: وَأَلْقَىٰ فِي الْأَرْضِ رَوَاسِيَ",
                correctAnswer: "Chapter 13, Verse 3",
                difficultyLevel: "EXPERT",
                options: ["Chapter 13, Verse 3", "Chapter 22, Verse 65", "Chapter 10, Verse 24", "Chapter 34, Verse 46"],
                },
                
                {
                questionText: "What ayat is this: يُحِبُّهُمْ وَيُحِبُّونَهُ",
                correctAnswer: "Chapter 5, Verse 54",
                difficultyLevel: "EXPERT",
                options: ["Chapter 5, Verse 54", "Chapter 9, Verse 71", "Chapter 18, Verse 28", "Chapter 48, Verse 29"],
                },
                
                {
                questionText: "What ayat is this: إِنَّا كَفَيْنَاكَ الْمُسْتَهْزِئِينَ",
                correctAnswer: "Chapter 15, Verse 95",
                difficultyLevel: "EXPERT",
                options: ["Chapter 15, Verse 95", "Chapter 11, Verse 47", "Chapter 36, Verse 76", "Chapter 51, Verse 54"],
                },
                
                {
                questionText: "What ayat is this: إِنَّ الْإِنسَانَ خُلِقَ هَلُوعًا",
                correctAnswer: "Chapter 70, Verse 19",
                difficultyLevel: "EXPERT",
                options: ["Chapter 3, Verse 185", "Chapter 70, Verse 19", "Chapter 24, Verse 35", "Chapter 39, Verse 42"],
                },
                
                {
                questionText: "What ayat is this: وَالشَّمْسُ وَالْقَمَرُ وَالنُّجُومُ وَالْجِبَالُ",
                correctAnswer: "Chapter 91, Verse 1",
                difficultyLevel: "EXPERT",
                options: ["Chapter 91, Verse 1", "Chapter 2, Verse 29", "Chapter 6, Verse 99", "Chapter 18, Verse 109"],
                },
                
                {
                questionText: "What ayat is this: وَلِلَّهِ يَسْجُدُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ",
                correctAnswer: "Chapter 22, Verse 18",
                difficultyLevel: "EXPERT",
                options: ["Chapter 22, Verse 18", "Chapter 41, Verse 37", "Chapter 53, Verse 62", "Chapter 13, Verse 15"],
                },
                
                {
                questionText: "What ayat is this: إِنَّ الْحَمْدَ لِلَّهِ رَبِّ الْعَالَمِينَ",
                correctAnswer: "Chapter 1, Verse 2",
                difficultyLevel: "EXPERT",
                options: ["Chapter 1, Verse 2", "Chapter 6, Verse 102", "Chapter 39, Verse 29", "Chapter 57, Verse 1"],
                },
                
                {
                questionText: "What ayat is this: اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ",
                correctAnswer: "Chapter 2, Verse 255",
                difficultyLevel: "EXPERT",
                options: ["Chapter 2, Verse 255", "Chapter 3, Verse 173", "Chapter 5, Verse 76", "Chapter 9, Verse 31"],
                },
                
                {
                questionText: "What ayat is this: يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمُ",
                correctAnswer: "Chapter 2, Verse 21",
                difficultyLevel: "EXPERT",
                options: ["Chapter 2, Verse 21", "Chapter 3, Verse 64", "Chapter 7, Verse 56", "Chapter 9, Verse 129"],
                },
                
                {
                questionText: "What ayat is this: لَيْسَ الْبِرَّ أَنْ تُوَلُّوا وُجُوهَكُمْ قِبَلَ الْمَشْرِقِ وَالْمَغْرِبِ",
                correctAnswer: "Chapter 2, Verse 177",
                difficultyLevel: "EXPERT",
                options: ["Chapter 89, Verse 27", "Chapter 2, Verse 177", "Chapter 49, Verse 13", "Chapter 7, Verse 56"],
                },
                
                {
                questionText: "What ayat is this: فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
                correctAnswer: "Chapter 94, Verse 5",
                difficultyLevel: "EXPERT",
                options: ["Chapter 94, Verse 5", "Chapter 20, Verse 131", "Chapter 9, Verse 129", "Chapter 23, Verse 118"],
                },
                
                {
                questionText: "What ayat is this: فَإِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ",
                correctAnswer: "Chapter 16, Verse 90",
                difficultyLevel: "EXPERT",
                options: ["Chapter 16, Verse 90", "Chapter 57, Verse 25", "Chapter 70, Verse 40", "Chapter 4, Verse 135"],
                },
                
                {
                questionText: "What ayat is this: وَاللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ",
                correctAnswer: "Chapter 3, Verse 98",
                difficultyLevel: "EXPERT",
                options: ["Chapter 3, Verse 98", "Chapter 12, Verse 76", "Chapter 19, Verse 65", "Chapter 24, Verse 35"],
                },
                
                {
                questionText: "What ayat is this: فَإِنَّكَ بِأَعْيُنِنَا",
                correctAnswer: "Chapter 52, Verse 48",
                difficultyLevel: "EXPERT",
                options: ["Chapter 52, Verse 48", "Chapter 7, Verse 128", "Chapter 13, Verse 2", "Chapter 41, Verse 53"],
                },

                {
                    questionText: "Which Islamic scholar is known for his extensive commentary on the Quran called 'Tafsir al-Qurtubi'?",
                    correctAnswer: "Imam Al-Qurtubi",
                    difficultyLevel: "EXPERT",
                    options: ["Imam Al-Ghazali", "Imam Al-Qurtubi", "Imam Ibn Taymiyyah", "Imam Ibn Kathir"],
                    },
                    
                    {
                    questionText: "Which famous Islamic philosopher is known for his work 'The Incoherence of the Philosophers'?",
                    correctAnswer: "Imam Al-Ghazali",
                    difficultyLevel: "EXPERT",
                    options: ["Ibn Sina (Avicenna)", "Imam Al-Ghazali", "Al-Farabi", "Ibn Rushd (Averroes)"],
                    },
                    
                    {
                    questionText: "In Islamic history, the 'Battle of Yarmouk' was fought between the Muslim forces and which empire?",
                    correctAnswer: "Byzantine Empire",
                    difficultyLevel: "EXPERT",
                    options: ["Sasanian Empire", "Byzantine Empire", "Umayyad Empire", "Abbasid Empire"],
                    },
                    
                    {
                    questionText: "Which Islamic scholar is known for his compilation of hadith collection called 'Sahih Muslim'?",
                    correctAnswer: "Imam Muslim ibn al-Hajjaj",
                    difficultyLevel: "EXPERT",
                    options: ["Imam Abu Hanifa", "Imam Malik", "Imam Muslim ibn al-Hajjaj", "Imam Ahmad ibn Hanbal"],
                    },
                    
                    {
                    questionText: "Which Muslim mathematician is famous for his work on algebra and introduced the concept of algorithms?",
                    correctAnswer: "Al-Khwarizmi",
                    difficultyLevel: "EXPERT",
                    options: ["Al-Farabi", "Ibn al-Haytham", "Al-Khwarizmi", "Nasir al-Din al-Tusi"],
                    },

                    {
                        questionText: "Which Islamic scholar is known for his work 'Ihya Ulum al-Din' (The Revival of the Religious Sciences)?",
                        correctAnswer: "Imam Al-Ghazali",
                        difficultyLevel: "EXPERT",
                        options: ["Imam Malik", "Imam Al-Ghazali", "Imam Ibn Hanbal", "Imam Ibn Hazm"],
                        },

                        {
                            questionText: "Which Islamic dynasty ruled the Indian subcontinent from the 16th to the 19th century?",
                            correctAnswer: "Mughal Empire",
                            difficultyLevel: "EXPERT",
                            options: ["Safavid Empire", "Mughal Empire", "Ottoman Empire", "Gupta Empire"],
                            },

                            {
                                questionText: "Who was the first female judge appointed by the Prophet Muhammad (PBUH) in Islamic history?",
                                correctAnswer: "Umm Waraqah",
                                difficultyLevel: "EXPERT",
                                options: ["Aisha bint Abu Bakr", "Fatimah bint Muhammad", "Umm Waraqah", "Hafsah bint Umar"],
                                },

                                {
                                    questionText: "Who was the first Muslim woman to lead the Friday congregational prayers?",
                                    correctAnswer: "Rabia al-Adawiyya",
                                    difficultyLevel: "EXPERT",
                                    options: ["Aisha bint Abu Bakr", "Fatimah bint Muhammad", "Rabia al-Adawiyya", "Khadijah bint Khuwaylid"],
                                    },
                                    
                                    {
                                    questionText: "Which Islamic scholar is known for his comprehensive work on Islamic legal methodology called 'Al-Mabsut'?",
                                    correctAnswer: "Imam Sarakhsi",
                                    difficultyLevel: "EXPERT",
                                    options: ["Imam Abu Hanifa", "Imam Shafi'i", "Imam Malik", "Imam Sarakhsi"],
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
