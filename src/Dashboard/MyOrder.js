import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Context/AuthProvider';

const MyOrder = () => {
    const [data, setData] = useState([])
    const { user } = useContext(AuthContext)
    const notify = (value) => toast(value);
    useEffect(() => {
        fetch(`https://server-zeta-three.vercel.app/myOrders/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }, [user]);
    const handlepay = () => {
        console.log('pay')
    }
    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 mt-7 mb-7 p-5 gap-4'>
                {
                    data?.map(product => {
                        return <>
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img className='mt-3 rounded' src={product.ProductPhoto} alt="Phone" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-black">Model = {product.ProductName}</h2>

                                    <h2 className="card-title text-black">Resale Price = {product.ProductResalePrice}</h2>

                                    <h2 className="card-title text-black">Phone = {product.BuyerMobile}</h2>

                                    <h2 className="card-title text-black">Buyerller Email = {product.BuyerEmail}</h2>


                                    <div className="card-actions justify-start">
                                       <button onClick={() => handlepay(product)} className="btn btn-primary">Payment</button>
                                    </div>
                                </div>
                            </div>

                        </>
                    })
                }
            </div>
        </div>
    );
};

export default MyOrder;