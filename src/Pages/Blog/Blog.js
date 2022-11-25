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
                    <p className='text-black'>Once you attempt to manage state across multiple components, things get a bit trickier.

                        You will reach a point in your application where patterns like “lifting state up” and passing callbacks down to update your state from components lead to lots and lots of props.

                        What do you do if you want to update a component’s state from basically anywhere in your app? You turn it into global state.

                        To manage it, however, you should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.

                        To be clear: the Context API is not a state management solution. It is a way to avoid problems like props drilling (creating a bunch of props in components that don’t need it), but it is only helpful for reading state, not updating it.
                        The reason to not use Context for global state management lies in the way it works. The default behavior for Context is to re-render all children components if the value provided to it as a prop changes.</p>
                    <p className='text-black font-semibold'>Manage Server State in React </p>
                    <p className='text-black'> At first, it seems you just need to fetch data and display it in the page. But then you need to display a loading spinner while you are waiting for the data. Then you need to handle errors and display them to the user as they arise.

                        What happens when there is a network error? Do I really need to hit my server every time my user visits the home page if the data hasn’t changed? Do I need to add useState and useEffect in every component I want to fetch my data?

                        To fix this, there are a couple of great libraries that make data fetching in React a breeze: SWR and React Query.</p>
                    <p className='text-black font-semibold'>Manage URL State in React </p>
                    <p className='text-black'>To end a difficult topic on a positive note, URL state is largely already managed for you if you are using a framework like Next.js or the current version of React Router.

                        URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname.

                        If you are using React Router, you can get all the information you need using useHistory or useLocation.</p>

                </div>
            </div>
            <div className="card  bg-base-100 shadow-lg mb-5">
                <div className="card-body">
                    <h2 className="card-title text-black">How does prototypical inheritance work?</h2>
                    <p className='text-black'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-lg mb-5 ">
                <div className="card-body">
                    <h2 className="card-title text-black">What is a unit test? Why should we write unit test?</h2>
                    <p className='text-black'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-lg mb-5">
                <div className="card-body ">
                    <h2 className="card-title text-black">React vs. Angular vs Vue?</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-2 p-2'>
                        <div>
                            <p className='text-black font-semibold'>Angular Js</p>
                            <p className='text-black'>AngularJS was developed in 2009 by Google. The first version was Angular.JS. Angular is currently known as a JavaScript framework. Obviously, all significant Google projects have been developed with Angular.

                                Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications</p>
                        </div>
                        <div>
                            <p className='text-black font-semibold'>Vue Js</p>
                            <p className='text-black'>Vue.js is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and incrementality in mind, as well as ease of integration with other view layer frameworks.

                                Vue is built from the bottom up to be progressively adaptable, unlike other monolithic frameworks. The core library focuses solely on the view layer, and it’s simple to use and connect with other libraries or applications. This framework’s fast learning angle is almost a trademark. It’s a flexible framework that may be used as a library or a full-fledged framework for developing large web applications.

                                Vue.js combines the useful principles of the Angular and React frameworks and presents them in a minimalistic modern style. Web developers use Vue.js to create frontend user interfaces for web-based and hybrid mobile applications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;