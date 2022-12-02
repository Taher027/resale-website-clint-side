import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Header from '../Shared/Header';

const DashboardLayout = () => {
    const { role } = useContext(AuthContext);
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60  ">
                        {/* <!-- Sidebar content here --> */}
                        {    
                            role === 'admin' ? <>
                                <Link to='/dashboard/allsellers'>All sellers</Link>

                                <Link to='/dashboard/allbuyers'>All Buyers</Link>

                                <Link to='/dashboard/report_items'>Report items</Link>
                            </> : undefined
                        }

                        {
                            role === 'seller' ? <>
                                <Link to='/dashboard/addproduct'>Add Product</Link>

                                <Link to='/dashboard/my_products'>My Products</Link>
                            </> : undefined
                        }

                        {
                            role === 'buyer' ? <>
                                <Link to='/dashboard/my_order'>My order</Link>
                            </> : undefined
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;