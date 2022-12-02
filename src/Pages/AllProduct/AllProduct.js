import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import Modal from './Modal';

const AllProduct = () => {
    const notify = () => toast("Report success!");
    const location = useLocation();
    const [product, setProduct] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://server-zeta-three.vercel.app/category/${location.pathname.split("/")[2]}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, []);
//    console.log(data)
   
    const handlereport = (productInfo) => {
        fetch("https://server-zeta-three.vercel.app/report", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(productInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                notify();
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }

    const handlebook = () => {

    }
   

    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2  mt-7 mb-7 p-5 gap-4'>
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
                                        <button onClick={() => handlereport(product)} className="btn btn-primary">Report</button>
                                        <label htmlFor="booking-modal" onClick={() => setProduct(product)} className="btn btn btn-primary">Book now</label>
                                    </div>
                                </div>
                               
                            </div>

                        </>
                    })
                }
                <Modal product={product}></Modal>
            </div>
        </div>
    );
};

export default AllProduct;