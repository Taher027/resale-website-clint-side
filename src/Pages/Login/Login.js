import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, loginWithGoogle } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(res => {
                const user = res.user;
                const userdb = {
                    email: user.email,
                    name: user.displayName,
                    photoUrl: user.photoURL,
                    role: `buyer`,
                    verify:false
                }
                fetch('https://bd-buy-and-sell-754c8.web.app/user', {
                    method: 'POST',
                    headers: {
                        "content-type":"application/json",
                    },
                    body:JSON.stringify(userdb),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                         navigate('/')
                })
               
            })
            .catch(error => console.error(error))
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => {
                setLoginError(error.message);
            });
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center font-semibold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs text-black" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-white">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs text-black" />
                        <label className="label"> <span className="label-text text-white">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Doctors Portal <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline bg-[#533483] w-full text-white'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;