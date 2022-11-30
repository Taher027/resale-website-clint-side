import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const notify = () => toast("One product add successfuly!");
    const navigate = useNavigate();

    // const [photoURL,setPhotoUrl] =  useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const price1 = event.target.original.value;
        const condition = event.target.condition.value;
        const mobile = event.target.mobile.value;
        const location = event.target.location.value;
        const description = event.target.description.value;
        const year = event.target.year.value;
        const category = event.target.category.value;
        const d = new Date();

        const img = event.target.image.files[0];
        const formData = new FormData();
        formData.append('image', img)
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_API_KEY}`

            fetch(url,{
                method: 'POST',
                body: formData,
            }).then(res => res.json())
                .then(data => {
                    // setPhotoUrl(data.data.display_url)
                    // console.log(data.data.display_url)
                    // console.log(photoURL)
                    const productInfo = {
                        ProductName: name,
                        ProductResalePrice: price,
                        ProductOriginalPrice: price1,
                        ProductCondition: condition,
                        SellerMobile: mobile,
                        SellerLocation: location,
                        ProductDescription: description,
                        YearOfPurchase: year,
                        SellerName: user.displayName,
                        SellerEmail: user.email,
                        SellerPhoto: user.photoURL,
                        ProductCategory: category,
                        ProductPhotoUrl: data.data.display_url,
                        PostTime: d.toUTCString(),
                        SellerVerify: false
                    };

                    // console.log(productInfo)

                    fetch("http://localhost:5000/addAProduct", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(productInfo),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            notify();
                            navigate("/dashboard/myProducts");
                        })
                        .catch((error) => {
                            const errorMessage = error.message;
                            alert(errorMessage);
                        });


                })


    };
    return (
        <form onSubmit={handleSubmit}>
            <div className='w-1/2 mx-auto my-8'>
                <h2 className='text-4xl text-white'>Add your Products</h2>
                <div className='my-2 mx-auto'>
                    <input type="text" name='name' placeholder="Product name" className=" input text-black input-bordered w-full max-w-xs" />
                </div>
                <div className='my-2'>
                    <input type="number" name='price' placeholder="Resale Price" className="input text-black input-bordered w-full max-w-xs" />
                </div>
                <div className='my-2'>
                    <input type="number" name='original' placeholder="Original Price" className="input text-black input-bordered w-full max-w-xs" />
                </div>
                <div className='my-2'>
                    <select name='category' className="select select-bordered w-full max-w-xs text-black">
                        <option selected disabled>Model</option>
                        <option value="iphone" >IPhone</option>
                        <option value="samsung">Samsung</option>
                        <option value="vivo"> Vivo</option>
                    </select>
                </div>
                <div className='my-2'>
                    <select name='condition' className="select select-bordered w-full max-w-xs text-black">
                        <option selected disabled>conditions...</option>
                        <option value="excellent" >Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair"> Fair</option>
                    </select>
                </div>

                <div className='my-2'>
                    <input type="text" name='mobile' placeholder="Phone Number" className="input text-black input-bordered w-full max-w-xs" />
                </div>
                <div className='my-2'>
                    <input type="text" name='location' placeholder="Location" className="input text-black input-bordered w-full max-w-xs" />
                </div>
                <div className='my-2'>
                    <input type="text" name='description' placeholder="about phone" className="input text-black input-bordered w-full max-w-xs" />
                </div>
                <div className='my-2'>
                    <input type="text" name='year' placeholder="Year of Purchase:" className="input text-black input-bordered w-full max-w-xs" />
                </div>
                <div className='my-2'>
                    <input type="file" name='image' accept='jpg' className="w-full max-w-xs" />
                </div>
                <button className='w-full btn btn-outline bg-[#533483]'>Add Product</button>
            </div>
        </form>
    );
};

export default AddProduct;