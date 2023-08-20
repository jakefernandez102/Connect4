import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Index from "../pages/Index";
import GameRoom from "../pages/GameRoom";
import GameRules from '../components/GameRules';

const AllRoutes = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Layout/>,
            children:[
                {
                    index:true,
                    element:<Index/>
                },
                {
                    path:'/game',
                    element:<GameRoom/>
                },
                {
                    path:'/game-rules',
                    element:<GameRules/>
                },
            ]
        }
    ])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default AllRoutes