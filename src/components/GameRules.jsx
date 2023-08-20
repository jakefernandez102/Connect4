import { useEffect } from "react";
import useGame from "../hooks/useGame";
import { Link } from "react-router-dom";

const GameRules = () => {
  const {modalGameRules,handleModalGameRules} = useGame()

  useEffect(()=>{
        let timeOutId;
        timeOutId= setTimeout(() => {
            handleModalGameRules()
        }, 200 );

        return ()=>{
            clearTimeout(timeOutId)
        }
  },[])

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className={modalGameRules ? 'w-1/4 h-[430px] translate-y-[0%] transition-all duration-300 bg-white  border border-b-8 border-l-2 border-t-2 border-r-2 border-black rounded-xl' : 'w-1/4 h-[430px] translate-y-[100%] transition-all duration-300 bg-white  border border-b-8 border-l-2 border-t-2 border-r-2 border-black rounded-xl'}>
        <div className='p-3'>
          <h2 className='text-[#5C2DD5] uppercase font-black'>
            OBJECTIVE
          </h2>
          <p>
            Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).
          </p>
        </div>

        <div className='p-3'>
          <h2 className='text-[#5C2DD5] uppercase font-black'>
            HOW TO PLAY
          </h2>
          <ol>
            <li>Red goes first in the first game.</li>
            <li>Players must alternate turns, and only one disc can be dropped in each turn. </li>
            <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
            <li>The starter of the previous game goes second on the next game.</li>
          </ol>
        </div>
        <Link 
          to='/'
          onClick={()=>{
            handleModalGameRules()
          }}
        >
          Back
        </Link>
      </div>
    </div>
  )
}

export default GameRules