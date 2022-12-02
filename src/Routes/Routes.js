import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Dashboard/AddProduct";
import AllBuyers from "../Dashboard/AllBuyers";
import AllSellers from "../Dashboard/AllSellers";
import Dashboard from "../Dashboard/Dashboard";
import MyOrder from "../Dashboard/MyOrder";
import MyProduct from "../Dashboard/MyProduct";
import Report from "../Dashboard/Report";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AllProduct from "../Pages/AllProduct/AllProduct";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SingnUp from "../Pages/SingUp/SingnUp";
import AdminCheck from "./AdminCheck";
import BuyerCheck from "./BuyerCheck";
import PrivateRoute from "./PrivateRoute";
import SellerCheck from "./SellerCheck";

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
            {
                path: '/category/:id',
                element: <PrivateRoute><AllProduct></AllProduct></PrivateRoute> 
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
                element: <SellerCheck> <AddProduct></AddProduct> </SellerCheck> 
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminCheck> <AllSellers></AllSellers> </AdminCheck> 
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminCheck> <AllBuyers></AllBuyers> </AdminCheck> 
            },
            {
                path: '/dashboard/my_products',
                element: <SellerCheck> <MyProduct></MyProduct> </SellerCheck> 
            },
            {
                path: '/dashboard/report_items',
                element: <AdminCheck><Report></Report></AdminCheck> 
            },
            {
                path: '/dashboard/my_order',
                element: <BuyerCheck> <MyOrder></MyOrder> </BuyerCheck> 
            },
        ]
    }




])


export default router;