import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className='text-center'>
            <div>
                <ul className="menu  items-center menu-horizontal bg-[#533483] ">
                    <li><Link>Item 1</Link></li>
                    <li><Link>Item 2</Link></li>
                    <li><Link>Item 3</Link></li>
                </ul>
            </div>
       </div>
    );
};

export default Category;