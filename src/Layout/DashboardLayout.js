import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Shared/Header';

const DashboardLayout = () => {
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
                    <ul className="menu p-4 w-80  ">
                        {/* <!-- Sidebar content here --> */}
                        <Link>Sidebar Item 1</Link>
                        <Link>Sidebar Item 1</Link>
                    </ul>

                    

                    

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;