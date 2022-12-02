import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import AddProduct from './AddProduct';
import AllSellers from './AllSellers';
import MyOrder from './MyOrder';

const Dashboard = () => {
    const { role } = useContext(AuthContext);
    return (
        <div>
        {
            role === 'seller' ? <AddProduct></AddProduct> : undefined    
            }
            {
                role === 'buyer' ? <MyOrder></MyOrder> : undefined
            }
            {
                role === 'admin' ? <AllSellers></AllSellers> : undefined
            }
        </div>
    );
};

export default Dashboard;