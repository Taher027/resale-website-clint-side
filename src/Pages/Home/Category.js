import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://server-zeta-three.vercel.app/advertiseItems')
            .then(res => res.json())
            .then(data => setData(data))
    })
    return (
        <div className='text-center pt-4'>
            {
                console.log(data)

                
            }
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