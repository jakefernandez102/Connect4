
import useGame from '../hooks/useGame';
import logo from '/img/logo.svg'
import WhiteLayer from '/img/board-layer-white-small.svg'
import BlackLayer from '/img/board-layer-black-small.svg'
import PlayerOne from '/img/player-one.svg'
import PlayerTwo from '/img/player-two.svg'
import TurnRed from '/img/turn-background-red.svg'
import MarkerRed from '/img/marker-red.svg'
import { useEffect, useState } from 'react';
import MenuModal from '../components/MenuModal';
const GameRoom = () => {
    const [showModal,setShowModal]=useState(false)
    const {gameIn,handleGameIn,board,generateBoard}=useGame()

    const handleShowModal = ()=>{
        setShowModal(!showModal)
    }

    useEffect(()=>{
        let timeOutId;
        // timeOutId= setTimeout(() => {
        //     handleGameIn()
        // }, 200 );
        generateBoard()
        return ()=>{
            clearTimeout(timeOutId)
        }
    },[])
    
        console.log(board)
    return (
            <div className='relative'>
            <main className={ ( true) ? 'translate-y-[0%] transition-all duration-700 bg-[#7945FF] w-screen h-screen' : 'translate-y-[100%] transition-all duration-700 bg-[#7945FF] w-screen h-screen'}
            >

                    <div className=''>
                        <div className='w-full flex justify-center'>
                            <div className='w-2/3 pt-5 flex justify-evenly items-center'>
                                <div>
                                    <button 
                                        className='bg-[#5C2DD5] rounded-lg block px-2 text-white uppercase hover:bg-[#FD6687] '
                                        type='button'
                                        onClick={handleShowModal}
                                    >
                                        Menu
                                    </button> 
                                </div>
                                <img src={logo} alt="Logo image" />

                                <div>
                                    <button className='bg-[#5C2DD5] rounded-lg block px-2 text-white uppercase hover:bg-[#FD6687] '>
                                        Restart
                                    </button>
                                </div>
                            </div>
                        </div>
        
                        <section className=' h-full mt-10 '>
                            <div className='grid grid-cols-3 place-content-center place-items-center relative '>
                            <div className='relative flex flex-col items-center justify-center bg-white border border-b-8 border-l-2 border-r-2 border-t-1 border-black rounded-xl w-2/4 h-2/4'>
                                <img className='absolute top-[-30px]' src={ PlayerOne} alt="player one image" />
                                <h2 className='items-center '>Player 1</h2>
                                <p className='text-4xl font-black'>0</p>
                            </div>
                            <div className={`relative grid grid-cols-${board.length} grid-rows-${(board.length -1)}`} >
                                {/* <img className=' col-start-2 row-start-1 z-10' src={WhiteLayer} alt="white layer image" />
                                <img className=' col-start-2 row-start-1 z-0' src={BlackLayer} alt="Black layer image" /> */}
                                {
                                    board.map((col,i)=>{
                                        return (
                                                <p key={i} className={`col-start-${i+1} col-end-${i+1} row-start-1`}> {col}</p>
                                                )
                                            })
                                }
                                <div className='absolute z-20 -bottom-24 left-[25%]'>
                                    <img src={TurnRed} width={150} alt="" />
                                </div>
                            </div>
                            <div className='relative flex flex-col items-center justify-center bg-white border border-b-8 border-l-2 border-r-2 border-t-1 border-black rounded-xl w-2/4 h-2/4'>
                                <img className='absolute top-[-30px]' src={PlayerTwo} alt="player two image" />
                                <h2 className='items-center '>Player 2</h2>
                                <p className='text-4xl font-black'>0</p>
                            </div>
                            </div>
                        </section>
        
                        <footer className='absolute bottom-0 bg-[#5C2DD5] w-full h-[130px] rounded-t-3xl '>
                            
                        </footer>
                </div>


            </main>
            <MenuModal show={showModal} handleShowModal={handleShowModal}/>

            </div>
            
        )
}

export default GameRoom