import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const Modal = ({ product }) => {
    const { user } = useContext(AuthContext)
    const notify = () => toast('Booked')
    const handleSubmit = (event) => {
        event.preventDefault();
      
        const location = event.target.location.value;
        const phone = event.target.phone.value;

        const bookingInfo = {
            ProductPreviousId: product._id,
            BuyerName: user.displayName,
            BuyerEmail: user.email,
            ProductName: product.product_name,
            ProductResalePrice: product.resale_price,
            BuyerMobile: phone,
            MeetingLocation: location,
            ProductPhoto: product.ProductPhotoUrl
        }
      

        fetch("https://server-zeta-three.vercel.app/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bookingInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                notify();
                event.target.reset()
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal ">
                    <div className="modal-box relative text-black">
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <div className='mb-2'>
                            <input disabled type="text" placeholder={product.product_name} className="input input-bordered input-primary w-full max-w-xs text-black" />
                        </div>
                        <div className='mb-2'>
                            <input disabled type="email" placeholder={product.SellerEmail} className="input input-bordered input-primary w-full max-w-xs text-black" />
                        </div>
                        <div className='mb-2'>
                            <input disabled type="text" placeholder={product.Category} className="input input-bordered input-primary w-full max-w-xs text-black" />
                        </div>
                        <div className='mb-2'>
                            <input disabled type="number" placeholder={product.resale_price} className="input input-bordered input-primary w-full max-w-xs text-black" />
                        </div>
                        <div className='mb-2'>
                            <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-xs text-black" />
                        </div>
                        <div className='mb-2'>
                            <input name='location' type="text" placeholder="meeting location" className="input input-bordered input-primary w-full max-w-xs text-black" />
                        </div>
                        <button type='submit' className='btn bg-[#533483]'>Submit</button>

                    </div>
                </div> 
          </form>
        </>
    );
};

export default Modal;