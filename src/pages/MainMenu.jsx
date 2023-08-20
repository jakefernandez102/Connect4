import {  useNavigate } from 'react-router-dom';
import logo from '/img/logo.svg'
import PlayerVSPlayer from '/img/player-vs-player.svg'
import useGame from '../hooks/useGame';
import { useState } from 'react';

const MainMenu = () => {

    const [menuOut,setMenuOut]=useState(false)
    const [menuOutRules,setMenuOutRules]=useState(false)
    
    const navigate = useNavigate()
  return (
    <section className={menuOut 
                        ? 
                            'translate-y-[100%] transition-all duration-700 w-screen h-screen flex justify-center items-center'
                        :
                        menuOutRules
                        ?
                            'translate-y-[-100%] transition-all duration-700 w-screen h-screen flex justify-center items-center'
                        :
                            'w-screen h-screen flex justify-center items-center'}
    >
        <div className='bg-[#7945FF] border border-r-2 border-t-2 border-l-2 border-b-8 border-black  inline-block  rounded-xl flex flex-col justify-center items-center gap-5 w-1/3 p-5'>
                <div className='p-12'>
                    <img src={logo} alt="Logo Image" />
                </div>
                <div className='w-full flex flex-col gap-4'>
                    <button onClick={()=>{
                        setMenuOut(!menuOut)
                        setTimeout(() => {
                                navigate('/game')
                            }, 720);
                        }} className='px-5 py-1 flex justify-between items-center  bg-[#FFCE67] border border-r-2 border-t-2 border-l-2 border-b-8 border-black hover:border-[#5C2DD5] rounded-xl w-full '>
                        <p className='uppercase font-black '>
                            Play vs Player
                        </p>
                        <img src={PlayerVSPlayer} alt="player vs player image" />
                    </button>
                    <button  
                        className='px-5 py-3 text-left bg-white border border-r-2 border-t-2 border-l-2 border-b-8 border-black hover:border-[#5C2DD5] rounded-xl w-full'
                        onClick={()=>{
                            setMenuOutRules(!menuOutRules)
                            setTimeout(() => {
                                navigate('game-rules')
                            }, 1000);
                        }}
                    >
                        <p className='uppercase font-black '>
                            Game Rules
                        </p>
                    </button>
                </div>
        </div>
    </section>
  )
}

export default MainMenu