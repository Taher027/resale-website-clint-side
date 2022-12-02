import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import AllSellers from './AllSellers';
import AddProduct from './AddProduct';
import MyOrder from './MyOrder';

const RoleCheck = () => {
    const { role } = useContext(AuthContext);
    return (
        <div>
            {
                role === 'admin' ? <AllSellers></AllSellers> : undefined
            }
            {
                role === 'seller' ? <AddProduct></AddProduct> : undefined
            }
            {
                role === 'buyer' ? <MyOrder></MyOrder> : undefined
            }
        </div>
    );
};

export default RoleCheck;