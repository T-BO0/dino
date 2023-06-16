import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../layout/appComponent/App";
import Login from "../../features/account/Login";
import SignUp from "../../features/account/SignUp";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import Dino from "../../gameComps/Dino";
import Tbot from "../../features/T_BOT/Tbot";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {path: '/dino', element: <Dino/> },
            {path: '/tbot', element: <Tbot/> },
            {path: '/login', element: <Login/> },
            {path: '/server-error', element: <ServerError/> },
            {path: '/register', element: <SignUp/> },
            {path: '/not-found', element: <NotFound/> },
            {path: '*', element: <Navigate replace to='not-found'/>}
        ]
    }
])