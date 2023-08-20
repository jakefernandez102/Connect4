import { createContext, useState } from "react";

const GameContext = createContext();

// eslint-disable-next-line react/prop-types
const GameProvider = ({children}) => {
  
    const [gameIn,setGameIn] = useState(false);
    const [modalGameRules,setModalGameRules] = useState(false);
    const [board,setsetBoard] = useState([]);

    const handleGameIn =()=>{
        setGameIn(!gameIn)
    }
    
    const handleModalGameRules =()=>{
        setModalGameRules(!modalGameRules)
    }

    const generateBoard =()=>{
        const columns = new Array(7).fill('x',0)
        setsetBoard(columns)
    }

    return (
    <GameContext.Provider
        value={{
            gameIn,
            handleGameIn,
            modalGameRules,
            handleModalGameRules,
            board,
            generateBoard
        }}
    >
        {children}
    </GameContext.Provider>    
  )
}
export{
GameProvider
}
export default GameContext