import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Dashboard/AddProduct";
import AllBuyers from "../Dashboard/AllBuyers";
import AllSellers from "../Dashboard/AllSellers";
import Dashboard from "../Dashboard/Dashboard";
import MyProduct from "../Dashboard/MyProduct";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SingnUp from "../Pages/SingUp/SingnUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SingnUp></SingnUp>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/allsellers',
                element:<AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allbuyers',
                element:<AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/my_products',
                element: <MyProduct></MyProduct>
            }
        ]
    }




])


export default router;