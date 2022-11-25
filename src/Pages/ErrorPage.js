import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/404.jpg'

const ErrorPage = () => {
    return (
        <div className='mx-auto w-1/2 my-5'>
            <div >
                <img  src={img} alt="" />
                <p className='text-4xl text-white font-semibold mt-2'>Page not Found!</p>
                <Link to={'/'} ><button className='text-white font-semibold mt-2 bg-[#533483] px-4 py-2 rounded-md'>Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;