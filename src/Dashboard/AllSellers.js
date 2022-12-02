import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const [data, setData] = useState([]);
    const notify = (value) => toast(value);
    useEffect(() => {
        fetch(`https://server-zeta-three.vercel.app/dashboard/users`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }, []);
  
    return (
        <div className='bg-[]'>
            <div className="overflow-x-auto w-3/4">
                <table className="table w-full text-black">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllSellers;