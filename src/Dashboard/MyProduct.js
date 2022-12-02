import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Context/AuthProvider';

const MyProduct = () => {
    const [data, setData] = useState([]);
    const [refresh,setRefresh] = useState(false)
    const { user } = useContext(AuthContext)
       console.log(data)
    const notify = (value) => toast(value);
    useEffect(() => {
        fetch(`http://localhost:5000/dashboard/my_products/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, [user, refresh]);

    const handleAdvertise = (product) => {
        fetch('http://localhost:5000/advertise_product/', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                notify("Advertisement success!");
            });
    }

    const handleDelete = (product) => {
        // console.log(item);
        fetch(`http://localhost:5000/delete/${product._id}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setRefresh(!refresh)
                notify("Deleted!");
            });
    }
    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 mt-7 mb-7 p-5 gap-4'>
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
                                  
                                   
                                   
                                    <div className="card-actions justify-start">
                                        <button onClick={() => handleDelete(product)} className="btn btn-primary">Delete</button>
                                        <button onClick={() => handleAdvertise(product)} className="btn btn-primary">Add</button>
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

export default MyProduct;