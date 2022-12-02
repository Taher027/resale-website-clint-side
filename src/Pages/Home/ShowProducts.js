import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShowProducts = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://server-zeta-three.vercel.app/category')
            .then(res => res.json())
        .then(data => setData(data))
    })
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 mb-7 p-5 gap-4'>
            {
                
                data.map(item => {
                    return <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img className='mt-3 rounded' src={item.ProductPhotoUrl} alt="phone" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-black">Model = {item.product_name}</h2>
                            <h2 className="card-title text-black">Location = {item.location}</h2>
                            <h2 className="card-title text-black">Resale Price = {item.resale_price}</h2>
                            <h2 className="card-title text-black"> Price = {item.Original_price}</h2>
                            <h2 className="card-title text-black">Condition = {item.Condition}</h2>
                            <h2 className="card-title text-black">Purchase Year = {item.purchase_year}</h2>
                            <h2 className="card-title text-black">Phone = {item.phone}</h2>
                            <h2 className="card-title text-black">Seller Name = {item.SellerName}</h2>
                            <h2 className="card-title text-black">Post Time = {item.PostTime}</h2>
                            <div className="card-actions justify-start">
                                <Link to={`/category/${item.Category}`}><button className="btn btn-primary">See All</button></Link>
                            </div>
                        </div>
                    </div> 
                })
            }
            
        </div>
    );
};

export default ShowProducts;