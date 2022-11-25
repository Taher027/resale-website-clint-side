import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className='text-center'>
            <div>
                <ul className="menu  items-center menu-horizontal bg-[#533483] ">
                    <li><Link>IPhone</Link></li>
                    <li><Link>Samsung</Link></li>
                    <li><Link>Vivo</Link></li>
                </ul>
            </div>
       </div>
    );
};

export default Category;