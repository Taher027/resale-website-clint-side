import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const AdminCheck = ({ children }) => {
    const { role } = useContext(AuthContext);
    return (
        <div>
            {
                role === 'admin' ? children : undefined
            }
        </div>
    );
};

export default AdminCheck;