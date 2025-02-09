import React from 'react'
import { SCORE } from '../helper';
import { useNavigate } from 'react-router-dom';

const data = [
    {
        stageNumber: 0,
        completed: false,
        stageName: 'Stage 1',
        description: 'How much you know me.',
    },
    {
        stageNumber: 1,
        completed: false,
        stageName: 'Stage 2',
        description: 'How much I know you.',
    },
    {
        stageNumber: 2,
        completed: false,
        stageName: 'Stage 3',
        description: 'Situation you need to answer',
    },
    {
        stageNumber: 3,
        completed: false,
        stageName: 'Stage 4',
        description: 'last message',
    }
]

const Lock = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 6.75C8.75 4.95507 10.2051 3.5 12 3.5C13.7949 3.5 15.25 4.95507 15.25 6.75V8H8.75V6.75ZM7.25 8.0702V6.75C7.25 4.12665 9.37665 2 12 2C14.6234 2 16.75 4.12665 16.75 6.75V8.0702C18.6006 8.42125 20 10.0472 20 12V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V12C4 10.0472 5.39935 8.42125 7.25 8.0702ZM12 13.25C12.4142 13.25 12.75 13.5858 12.75 14V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V14C11.25 13.5858 11.5858 13.25 12 13.25Z" fill="#0B272B"/>
        </svg>
    )
}

const ClearTick = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.7687 21.7775 9.58934 21.3704 8.5M7 10L10.5264 12.8211C11.3537 13.483 12.5536 13.3848 13.2624 12.5973L21 4" stroke="#0B272B" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
    )
}

const Card = ({stageNumber, disabled = false, title, description, stageComplete}) => {
    
    const nav = useNavigate();

    return (

        <div style={{width: "calc(50vw - 1.4rem)"}} onClick={() => { nav(`/stage/${stageNumber}/questions/0`) }} className={`${disabled ? "cursor-not-allowed opacity-50" : ""} relative block h-auto p-2 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}>
            {disabled && <div className="absolute right-2.5 top-2.5">
                 {  stageComplete > stageNumber ?  <ClearTick /> : <Lock />  }
            </div>}
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">{title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
        </div>
    )
}

const Home = () => {

    const stageComplete = Number(window.localStorage.getItem("stageComplete"));
    const score = window.localStorage.getItem("score");

    return (
        <div className='w-screen h-min flex flex-col gap-8 bg-[#8AAAE5] p-2 gap-4' >
            <div className="h-auto flex rounded-lg">
                <video className='w-auto rounded-lg' src='https://firebasestorage.googleapis.com/v0/b/assingment-2621d.firebasestorage.app/o/20240909_204737.mp4?alt=media&token=ba0b9cf4-d3d5-4da7-ade3-344ac828c777' autoPlay muted={false} loop/>
                {/* <img className='w-auto rounded-lg' src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9ua2V5fGVufDB8fDB8fHww" alt="" /> */}
            </div>
            <div className="h-auto flex flex-col gap-4 rounded-lg shadow-lg bg-gray-200 px-2 py-4">
                <div className='text-2xl font-bold' >
                    OPEN CODE
                </div>
                <div className="w-100 flex justify-center align-center gap-2">
                    {
                        SCORE.map((item, index) => (
                            <div key={index} className={`w-10 h-10 pt-[0.25rem] rounded-full bg-white ${stageComplete > index ? "bg-green-500" : "bg-[#8AAAE5] "} flex justify-center align-center`}>
                                <p className="text-lg">{stageComplete > index ? item : "-"}</p> 
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-wrap justify-between gap-4">
            {
                data.map((item, index) => (
                    <Card key={index} stageNumber={index} disabled={ !(stageComplete == index)} title={item.stageName} description={item.description} stageComplete={stageComplete} />
                ))
            }
            </div>
        </div>
    )
}

export default Home;