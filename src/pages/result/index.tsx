import React from 'react'
import { SCORE } from '../helper'
import { useNavigate } from 'react-router-dom';

const ResultPage = () => {
    const stageComplete = Number(localStorage.getItem("stageComplete"));
    const nav = useNavigate();
    function setScore(str) {
        localStorage.setItem("score", str);
    }    
    let totalScore = Number(localStorage.getItem("totalScore"));
    function setStageComplete(str) {
        localStorage.setItem("stageComplete", str);
    }
    const score = Number(localStorage.getItem("score"));

    function setTotalScore(str) {
        localStorage.setItem("totalScore", str);
    }

    const handleDone = () => {
        if(score > 70){
            setScore(0);
            setTotalScore(totalScore + (score * 0.25));
            setStageComplete(stageComplete + 1);
            nav('/')
        } else {
            setScore(0);
            nav(`/stage/${stageComplete}/questions/0`);
        }
    
    }

  return (
    <div className='w-screen h-min flex flex-col bg-[#8AAAE5] py-4 px-2 gap-4' >
        <div className="h-[100px] bg-orange-200 border bb-1 border-gray-200 shadow-lg lodsfmdd flex rounded-lg flex-col align-center justify-center gap-4 px-2 py-4">
            <div className="text-lg font-bold tracking-tight text-gray-900 dark:text-white uppercase">
                Score : {" "}
            </div>
            <div className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{score} {` %`}</div>
        </div> 
        <div className="h-[100px] bg-white border bb-1 shadow-lg border-gray-200 lodsfmdd flex rounded-lg flex-col align-center gap-4 px-2 py-4  justify-start">
            <div className="block w-100 h-min bg-white rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white uppercase">{stageComplete + 1} digit of lock </h5>
                <p className="text-4xl w-100 font-bold m-auto text-gray-700 dark:text-gray-400">{( score > 70 && stageComplete >= 0) ? SCORE[stageComplete] : "-" }</p>
            </div>
        </div>
        <div className="absolute w-screen p-4 flex justify-end right-0 bottom-0">
            <button className="bg-blue-500 text-white p-2 rounded-md w-100" onClick={() => handleDone()}> { score > 70 ? "DONE" : "RETRY" }</button>
        </div>
    </div>
  )
}

export default ResultPage