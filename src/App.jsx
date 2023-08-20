import { GameProvider } from "./context/GameProvider";
import AllRoutes from "./routes/AllRoutes";


function App() {


  return (
    <>
    <GameProvider>
      <AllRoutes>
        
      </AllRoutes>
    </GameProvider>
    </>
  )
}

export default App
