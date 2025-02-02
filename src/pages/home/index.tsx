import React from 'react'
import { SCORE } from '../helper';

const data = [
    {
        stageNumber: 0,
        completed: false,
        stageName: 'Stage 1',
        description: 'This is the first stage of the process',
    },
    {
        stageNumber: 1,
        completed: false,
        stageName: 'Stage 1',
        description: 'This is the first stage of the process',
    },
    {
        stageNumber: 2,
        completed: false,
        stageName: 'Stage 1',
        description: 'This is the first stage of the process',
    },
    {
        stageNumber: 3,
        completed: false,
        stageName: 'Stage 1',
        description: 'This is the first stage of the process',
    }
]

const Card = ({stageNumber, disabled = false}) => {

    return (

        <div onClick={() => { window.location.href = `/stage/${stageNumber}/questions/0`; }} className={`${disabled ? "cursor-not-allowed opacity-50" : ""} block w-min h-min p-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">acquisitions</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise</p>
        </div>
    )
}

const Home = () => {

    const stageComplete = Number(window.localStorage.getItem("stageComplete"));
    const score = window.localStorage.getItem("score");

    return (
        <div className='w-100 h-min flex flex-col gap-8 bg-cyan-300 py-4 px-1 gap-4' >
            <div className="h-auto flex flex-col gap-4">
                <div className='text-2xl font-bold' >
                    OPEN CODE
                </div>
                <div className="w-100 flex justify-center align-center gap-2">
                    {
                        SCORE.map((item, index) => (
                            <div key={index} className={`w-10 h-10 pt-[0.25rem] rounded-full bg-white ${stageComplete > index ? "bg-green-500" : "bg-gray-200"} flex justify-center align-center`}>
                                <p className="text-lg">{stageComplete > index ? item : "-"}</p> 
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-wrap justify-between gap-4">
            {
                data.map((item, index) => (
                    <Card key={index} stageNumber={index} disabled={ !(stageComplete == index)} />
                ))
            }
            </div>
        </div>
    )
}

export default Home