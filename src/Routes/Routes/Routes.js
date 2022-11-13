import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Catagory from "../../Pages/Catagory/Catagory/Catagory";
import Home from "../../Pages/Home/Home/Home";
import News from "../../Pages/News/News/News";
import Profile from "../../Pages/Others/Profile/Profile";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import Login from "../../Pages/Shared/Login/Login/Login";
import Register from "../../Pages/Shared/Login/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://world-news-3.vercel.app/news')
            },
            {
                path: '/category/:id',
                element: <Catagory></Catagory>,
                loader: ({ params }) => fetch(`https://world-news-3.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoutes>
                    <News></News>
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://world-news-3.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <PrivateRoutes>
                    <Profile></Profile>
                </PrivateRoutes>
            }
        ]
    }
])