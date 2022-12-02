import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider'
const AddProduct = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const notify = () => toast("product added!");
    const navigate = useNavigate();
    const handleForm = (event) => {
        event.preventDefault();
        const product_name = event.target.product_name.value;
        const Category = event.target.Category.value;
        const Condition = event.target.Condition.value;
        const resale_price = event.target.resale_price.value;
        const Original_price = event.target.Original_price.value;
        const purchase_year = event.target.purchase_year.value;
        const description = event.target.description.value;
        const phone = event.target.phone.value;
        const location = event.target.location.value;
        const d = new Date();

        const img = event.target.image.files[0];
        const formData = new FormData();
        formData.append('image', img)
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_API_KEY}`


        fetch(url, {
            method: 'POST',
            body: formData,
        }).then(res => res.json())
            .then(data => {

                const product_info = {
                    product_name: product_name,
                    Category: Category,
                    Condition: Condition,
                    resale_price: resale_price,
                    Original_price: Original_price,
                    purchase_year: purchase_year,
                    description: description,
                    phone: phone,
                    location: location,
                    PostTime: d.toUTCString(),
                    SellerVerify: false,
                    ProductPhotoUrl: data.data.display_url,
                    SellerName: user.displayName,
                    SellerEmail: user.email,
                    SellerPhoto: user.photoURL,
                }
                console.log(product_info)

                fetch("https://server-zeta-three.vercel.app/addProduct", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(product_info),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        notify();
                        navigate("/dashboard/my_products");
                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                        alert(errorMessage);
                    });



            })


    }
    return (
        <div className='mt-6'>
            <h2 className='text-4xl text-white text-center'>Add Your Product</h2>
            <div>
                <form className='text-center mt-4' onSubmit={handleForm}>
                    <div className='mb-2'>

                        <input type="text" name='product_name' placeholder="Product Name" className="input w-full max-w-xs text-black" />
                    </div>
                    <div className='mb-2'>

                        <select name='Category' className="select select-bordered w-full max-w-xs text-black">
                            <option disabled selected>Select Category</option>
                            <option value="Iphone">Iphone</option>
                            <option value="Samsung">Samsung</option>
                            <option value="Vivo">Vivo</option>
                        </select>
                    </div>
                    <div className='mb-2'>

                        <select name='Condition' className="select select-bordered w-full max-w-xs text-black">
                            <option disabled selected>Phone Condition</option>
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                        </select>
                    </div>
                    <div className='mb-2'>

                        <input type="number" name='resale_price' placeholder="Resale Price" className="input w-full max-w-xs text-black" />
                    </div>
                    <div className='mb-2'>

                        <input type="number" name='Original_price' placeholder="Original Price" className="input w-full max-w-xs text-black" />
                    </div>
                    <div className='mb-2'>

                        <input type="text" name='purchase_year' placeholder="Purchase Year" className="input w-full max-w-xs text-black" />
                    </div>
                    <div className='mb-2'>

                        <input type="text" name='description' placeholder="Description" className="input w-full max-w-xs text-black" />
                    </div>
                    <div className='mb-2'>

                        <input type="number" name='phone' placeholder="Phone Number" className="input w-full max-w-xs text-black" />
                    </div>
                    <div className='mb-2'>

                        <input type="text" name='location' placeholder="Your Location" className="input w-full max-w-xs text-black" />
                    </div>
                    <div className='mb-2'>

                        <input type="file" name="image" className="file-input file-input-bordered file-input-primary w-full max-w-xs text-black" accept=".jpg" />
                    </div>
                    <div className="btn-group btn-group-vertical">
                        <button type='submit' className="btn btn-active ">Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;