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
                questionText: 'What is the capital of France?',
                options: [
                    { optionText: 'New York', isCorrect: false },
                    { optionText: 'London', isCorrect: false },
                    { optionText: 'Paris', isCorrect: true },
                    { optionText: 'Dublin', isCorrect: false }
                ]
            },
            {
                questionText: 'What is the capital of France?',
                options: [
                    { optionText: 'New York', isCorrect: false },
                    { optionText: 'London', isCorrect: false },
                    { optionText: 'Paris', isCorrect: true },
                    { optionText: 'Dublin', isCorrect: false }
                ]
            },
            {
                questionText: 'What is the capital of France?',
                options: [
                    { optionText: 'New York', isCorrect: false },
                    { optionText: 'London', isCorrect: false },
                    { optionText: 'Paris', isCorrect: true },
                    { optionText: 'Dublin', isCorrect: false }
                ]
            },
            {
                questionText: 'What is the capital of France?',
                options: [
                    { optionText: 'New York', isCorrect: false },
                    { optionText: 'London', isCorrect: false },
                    { optionText: 'Paris', isCorrect: true },
                    { optionText: 'Dublin', isCorrect: false }
                ]
            },
        ],
        [
            {
                questionText: 'What is the capital of France?',
                options: [
                    { optionText: 'New York', isCorrect: false },
                    { optionText: 'London', isCorrect: false },
                    { optionText: 'Paris', isCorrect: true },
                    { optionText: 'Dublin', isCorrect: false }
                ]
            },
            {
                questionText: 'What is the capital of France?',
                options: [
                    { optionText: 'New York', isCorrect: false },
                    { optionText: 'London', isCorrect: false },
                    { optionText: 'Paris', isCorrect: true },
                    { optionText: 'Dublin', isCorrect: false }
                ]
            },
            {
                questionText: 'What is the capital of France?',
                options: [
                    { optionText: 'New York', isCorrect: false },
                    { optionText: 'London', isCorrect: false },
                    { optionText: 'Paris', isCorrect: true },
                    { optionText: 'Dublin', isCorrect: false }
                ]
            },
            {
                questionText: 'What is the capital of France?',
                options: [
                    { optionText: 'New York', isCorrect: false },
                    { optionText: 'London', isCorrect: false },
                    { optionText: 'Paris', isCorrect: true },
                    { optionText: 'Dublin', isCorrect: false }
                ]
            },
        ],
        [
            {
                questionText: 'What is the capital of France?',
                options: [
                    { optionText: 'New York', isCorrect: false },
                    { optionText: 'London', isCorrect: false },
                    { optionText: 'Paris', isCorrect: true },
                    { optionText: 'Dublin', isCorrect: false }
                ]
            },
            {
                questionText: 'What is the capital of France?',
                options: [
                    { optionText: 'New York', isCorrect: false },
                    { optionText: 'London', isCorrect: false },
                    { optionText: 'Paris', isCorrect: true },
                    { optionText: 'Dublin', isCorrect: false }
                ]
            },
            {
                questionText: 'What is the capital of France?',
                options: [
                    { optionText: 'New York', isCorrect: false },
                    { optionText: 'London', isCorrect: false },
                    { optionText: 'Paris', isCorrect: true },
                    { optionText: 'Dublin', isCorrect: false }
                ]
            },
            {
                questionText: 'What is the capital of France?',
                options: [
                    { optionText: 'New York', isCorrect: false },
                    { optionText: 'London', isCorrect: false },
                    { optionText: 'Paris', isCorrect: true },
                    { optionText: 'Dublin', isCorrect: false }
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