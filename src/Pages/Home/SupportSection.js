import React from 'react';
import { Link } from 'react-router-dom';

const SupportSection = () => {
    return (
        <div className='p-4 grid sm:grid-cols-1 lg:grid-cols-2 gap-4'>

            <div>
                <div>
                    <h2 className='text-4xl text-white text-left'>For Any kind of support or information fill up the from we will get you soon!</h2>
                </div>
            </div>
            <div>
                <div className='md:ml-3'>
                    <form action="">
                        <div className="form-control">
                            <label className="input-group">
                                <span className='text-black'>Email</span>
                                <input type="text" placeholder="info@site.com" className="input input-bordered text-black" />
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <label className="input-group">
                                <span className='text-black'>Phone</span>
                                <input type="phone" placeholder="Your Phone" className="input input-bordered text-black" />
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <label className="input-group">
                                <span className='text-black'>Message</span>
                                <input type="text" placeholder="Your Message" className="input input-bordered text-black" />
                            </label>
                        </div>
                        <Link ><button className='btn bg-[#533483] mt-2'>Submit</button></Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SupportSection;