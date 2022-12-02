import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const BuyerCheck = ({ children }) => {
    const { role } = useContext(AuthContext);
    return (
        <div>
            {
                role === 'seller' ? children : undefined
            }
        </div>
    );
};

export default BuyerCheck;