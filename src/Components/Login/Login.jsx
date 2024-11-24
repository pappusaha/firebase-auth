import React, { useContext, useState } from 'react';
import { DataContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const [error , setError]=useState('')
    const {logInUser,setUser,googleLogin}=useContext(DataContext)

    const handleLogin=e =>{
        e.preventDefault()
       
        const email=e.target.email.value
        const password=e.target.password.value
       
        console.log( email,password,)
        logInUser(email, password)
        .then(result => console.log(result))
        .catch((error) => setError(error.message.split('(')[1].split(')')[0].split('/')[1]))


    }
    return (
        <div className='min-w-[500px] md:max-w-2xl mx-auto border p-2'>
            <h1 className='text-xl'> Log-In pages</h1>
            <form onSubmit={handleLogin}>


<div>
    <p>Email</p>
    <input name='email' type="text" placeholder="Type here" className="input input-bordered w-full " />
</div>

<div>
    <p>Password</p>
    <input name='password' type="password" placeholder="Type here" className="input input-bordered w-full " />
</div>


<div>

</div>
  <button type='submit' className="btn btn-primary w-full">Submit</button>
  <div className='text-center'>
  {
error && <span >{error}</span>
  }
  </div>

            </form>
        </div>
    );
};

export default Login;