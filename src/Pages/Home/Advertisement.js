import React, { useEffect, useState } from 'react';

const Advertisement = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://server-zeta-three.vercel.app/advertiseItems`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, []);
    return (
        <div>
            {
                data.length > 0 ? <>
                    <h2 className='text-center'>
                        Advertisement
                </h2>
                </> : undefined
            }
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 mb-7 p-5 gap-4'>
                {
                    data?.map(product => {
                        return <>
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img className='mt-3 rounded' src={product.ProductPhotoUrl} alt="Phone" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-black">Category = {product.Category}</h2>
                                    <h2 className="card-title text-black">Model = {product.product_name}</h2>
                                    <h2 className="card-title text-black">Resale Price = {product.resale_price}</h2>
                                    <h2 className="card-title text-black"> Price = {product.Original_price}</h2>
                                    <h2 className="card-title text-black">Condition = {product.Condition}</h2>
                                    <h2 className="card-title text-black">Purchase Year = {product.purchase_year}</h2>
                                    <h2 className="card-title text-black">Description = {product.description}</h2>
                                    <h2 className="card-title text-black">Phone = {product.phone}</h2>
                                    <h2 className="card-title text-black">Seller Name = {product.SellerName}</h2>
                                    <h2 className="card-title text-black">Post Time = {product.PostTime}</h2>
                                    <h2 className="card-title text-black">Seller Email = {product.SellerEmail}</h2>
                                </div>
                            </div>

                        </>
                    })
                }
            </div>
            
        </div>
    );
};

export default Advertisement;