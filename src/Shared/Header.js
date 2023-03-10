import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => { })
    }
    return (
        <div className="navbar bg-[#16213E]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#16213E] rounded-box w-52">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl text-white">BD-BUY & SELL</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-white">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>
                </ul>
            </div>
            <label htmlFor="my-drawer-2" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <div className="navbar-end text-white">
                {
                    user?.uid ?
                        <>
                            <Link to={'/dashboard'} className="btn bg-[#533483]">Dashboard</Link>
                            <Link onClick={handleLogOut} className="btn bg-[#533483]">LogOut</Link>
                        </>

                        :

                        <>
                            <Link to={'/login'} className="btn bg-[#533483]">LogIn</Link>
                            <Link to={'/signup'} className="btn bg-[#533483]">SignUP</Link>
                        </>

                }


            </div>
        </div>
    );
};

export default Header;