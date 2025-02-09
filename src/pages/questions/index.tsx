import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Question = () => {
    let stageComplete = Number(localStorage.getItem("stageComplete"));

    const nav = useNavigate();
  
    function setScore(str) {
        localStorage.setItem("score", str);
    }
    let score = Number(localStorage.getItem("score"));
    const { stageNumber, questionNumber } = useParams();
    const [selectedIndex, setselectedIndex] = useState(null);
    const data = [
        [
            {
                questionText: 'What thing I must need in following?',
                options: [
                    { optionText: 'Chasma', isCorrect: false },
                    { optionText: 'earphone', isCorrect: true },
                    { optionText: 'leptop', isCorrect: false },
                    { optionText: 'chew gum', isCorrect: false }
                ]
            },
            {
                questionText: 'If I can go to only one place in following, where I will go?',
                options: [
                    { optionText: 'Brazil', isCorrect: false },
                    { optionText: 'Russia', isCorrect: false },
                    { optionText: 'Japan', isCorrect: true },
                    { optionText: 'Korea', isCorrect: false }
                ]
            },
            {
                questionText: 'What is my favourite color?',
                options: [
                    { optionText: 'Black', isCorrect: false },
                    { optionText: 'Blue', isCorrect: false },
                    { optionText: 'Red', isCorrect: false },
                    { optionText: 'White', isCorrect: true }
                ]
            },
            {
                questionText: 'Pick one movie according to me?',
                options: [
                    { optionText: 'A Wednesday', isCorrect: false },
                    { optionText: 'Gulaal', isCorrect: false },
                    { optionText: 'Tamasha', isCorrect: true },
                    { optionText: 'De dana dan', isCorrect: false }
                ]
            },
        ],
        [
            {
                questionText: 'If you have following option to go with me, where you want to go first?',
                options: [
                    { optionText: 'Mountain', isCorrect: false },
                    { optionText: 'Forest', isCorrect: false },
                    { optionText: 'Beach', isCorrect: false },
                    { optionText: 'Road Trip', isCorrect: true }
                ]
            },
            {
                questionText: 'If you can pick only one makeup item for your whole life what will you choose?',
                options: [
                    { optionText: 'Foundation', isCorrect: false },
                    { optionText: 'Eye liner', isCorrect: false },
                    { optionText: 'Lipstick', isCorrect: true },
                    { optionText: '​Blush', isCorrect: false }
                ]
            },
            {
                questionText: 'Choose one paratha?',
                options: [
                    { optionText: 'Aloo Paratha', isCorrect: false },
                    { optionText: 'Meethi Paratha', isCorrect: false },
                    { optionText: 'Palak Paratha', isCorrect: true },
                    { optionText: 'Onion paratha', isCorrect: false }
                ]
            },
            {
                questionText: 'Most fav song amoung below?',
                options: [
                    { optionText: 'Dooriyan', isCorrect: true },
                    { optionText: 'Cold/mess', isCorrect: false },
                    { optionText: 'Accha lagta hai', isCorrect: false },
                    { optionText: 'Mulaqat', isCorrect: false }
                ]
            },
        ],
        [
            {
                questionText: 'If we had unlimited resources, what philanthropic activities or causes would you want us to support??',
                options: [
                    { optionText: 'Orphan children', isCorrect: false },
                    { optionText: 'Acid victom girls', isCorrect: false },
                    { optionText: 'Disable animal', isCorrect: true },
                    { optionText: 'Hungary people', isCorrect: false }
                ]
            },
            {
                questionText: 'What are best way to reate a romantic atmosphere in our home?',
                options: [
                    { optionText: 'Romantic music', isCorrect: false },
                    { optionText: 'Lighting', isCorrect: true },
                    { optionText: 'Flower', isCorrect: false },
                    { optionText: 'Fragnence', isCorrect: true }
                ]
            },
            {
                questionText: 'If I am animal, what animal I am?',
                options: [
                    { optionText: 'Dog', isCorrect: false },
                    { optionText: 'Elephant', isCorrect: false },
                    { optionText: 'Tortoise', isCorrect: true },
                    { optionText: 'Fox', isCorrect: false }
                ]
            },
            {
                questionText: 'If I disappear tommarow from this world, where I am? ( every answer is corerct )',
                options: [
                    { optionText: 'He will go legendary jurney whitout notify anyone', isCorrect: true },
                    { optionText: 'In my room, just switch off phone and other social media', isCorrect: true },
                    { optionText: 'Someone kidnap me and I join there gang later', isCorrect: true },
                    { optionText: 'Actualy I perform some mystrious ritual', isCorrect: true }
                ]
            },
        ],
        [
            {
                questionText: 'Nikki love you so much ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️?',
                options: [
                    { optionText: 'Me too', isCorrect: true },
                ]
            },
        ]
    ];
    function handleNext() {

        if (stageNumber && questionNumber) {
            
            if (Number(questionNumber) < data[stageNumber].length - 1) {
                selectedIndex && data[stageNumber][questionNumber].options[selectedIndex - 1].isCorrect && setScore(score + 1);
                setselectedIndex(null);
                nav(`/stage/${stageNumber}/questions/${Number(questionNumber) + 1}`);
            } else {
                const isTrue = selectedIndex && data[stageNumber][questionNumber].options[selectedIndex - 1].isCorrect;
                let newScore = score + ( isTrue ? 1 : 0 );
                
                if (stageComplete < 4 && stageComplete >= 0) {
                    setScore(( ( newScore * 100 ) / data[stageNumber].length));

                }
                setselectedIndex(null);
                    nav('/result');
            }
        }
    }
    return (
        <div className='w-100 h-screen flex bg-[#8AAAE5] flex-col py-4 px-1 justify-start gap-4 m-2' >
            <div className="bg-white h-auto bg-white box-shadow py-6 px-2 text-2xl rounded-lg font-bold tracking-tight text-gray-900 shadow-lg">
                {stageNumber && Number(stageNumber) < data.length && data[stageNumber][questionNumber].questionText}
            </div>
            <div className="h-autu p-2 flex flex-col gap-4 px-0">
                {stageNumber && Number(stageNumber) < data.length && data[stageNumber][questionNumber].options.map((option, index) => (
                    <div key={index} className={`p-2 h-auto shadow-lg rounded-lg text-lg font-normal text-gray-900 ${Number(selectedIndex) - 1 == index ? "bg-orange-300" : "bg-white"}`} onClick={() => setselectedIndex(index + 1)}>
                        {option.optionText}
                    </div>
                ))}
            </div>
            <div className="absolute w-100 p-4 flex justify-end right-0 bottom-0">
                <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleNext} disabled={!selectedIndex}>Next {"->"} </button>
            </div>
        </div>
    )
}

export default Question