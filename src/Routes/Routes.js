import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "*",
                element:<ErrorPage></ErrorPage>
        },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            }
        ]
    }


])


export default router;