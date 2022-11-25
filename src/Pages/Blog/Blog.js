import React from 'react';

const Blog = () => {
    return (
        <div className='mt-10 mb-10 p-5 mx-8'>
            <div className="card  bg-base-100 shadow-lg mb-5">
                <div className="card-body">
                    <h2 className="card-title text-black">What are the different ways to manage a state in a React application?</h2>
                    <p className='text-black'>There are four main types of state you need to properly manage in your React apps:</p>
                    <p className='text-black'>1.Local state</p>
                    <p className='text-black'>2.Global state</p>
                    <p className='text-black'>3.Server state</p>
                    <p className='text-black'>4.URL state</p>
                    <p className='text-black font-semibold'>Manage Local State: </p>
                    <p className='text-black'>Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.

                        useState is the first tool you should reach for to manage state in your components.

                        It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).</p>
                    <p className='text-black font-semibold'>Manage Global State in React: </p>
                    <p className='text-black font-semibold'>Manage Server State in React </p>
                    <p className='text-black font-semibold'>Manage URL State in React </p>
                    <p className='text-black'>To end a difficult topic on a positive note, URL state is largely already managed for you if you are using a framework like Next.js or the current version of React Router.

                        URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname.

                        If you are using React Router, you can get all the information you need using useHistory or useLocation.</p>

                </div>
            </div>
            <div className="card  bg-base-100 shadow-lg mb-5">
                <div className="card-body">
                    <h2 className="card-title text-black">How does prototypical inheritance work?</h2>
                    <p className='text-black'>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-lg mb-5 ">
                <div className="card-body">
                    <h2 className="card-title text-black">What is a unit test? Why should we write unit test?</h2>
                    <p className='text-black'>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-lg mb-5">
                <div className="card-body">
                    <h2 className="card-title text-black">React vs. Angular vs Vue?</h2>
                    <p className='text-black'>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;