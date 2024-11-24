import React, { useContext, useState } from 'react';
import { DataContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError]=useState('')
    // const [emailError, setEmailError]=useState('')
    const {registerUser,setUser,googleLogin, facebookLogin }=useContext(DataContext)
    const handleGoogleLogin =() => {
        googleLogin()
        .then(result =>  setUser(result.user))
    }

    const handleFacebookLogin=() => {
        facebookLogin()
        .then(result => setUser(result.user))
    }
    const handleRegister=e =>{
        e.preventDefault()
        const name=e.target.name.value
        const photo=e.target.photo.value
        const email=e.target.email.value
        const password=e.target.password.value
        const confirmPassword=e.target.confirmPassword.value
       
        if(password.length<6){
setError('would you please write at least 6 digit password')
return 
        }
         if(password !== confirmPassword){
            setError('these did not match ')
            return 
        }
        if(!/\d{2,}$/.test(password)){
        
            setError('Would you please ends the password  at least 2 number')
            return 
        }
        setError('')
     
        registerUser(email,password)
        .then(result => {
            setUser(result.user)
        })
        .catch((error) => setError(error.message.split("(")[1].split(")")[0].split("/")[1]))

    }
    return (
        <div className='min-w-[500px] md:max-w-2xl mx-auto border p-2'>
            <h1 className='text-xl'> Register pages</h1>
            <form onSubmit={handleRegister}>
<div>
    <p>Name</p>
    <input name='name' type="text" placeholder="Type here" className="input input-bordered w-full " />
</div>
<div>
    <p>Photo</p>
    <input name='photo' type="text" placeholder="Type here" className="input input-bordered w-full " />
</div>

<div>
    <p>Email</p>
    <input name='email' type="text" placeholder="Type here" className="input input-bordered w-full " />
</div>

<div>
    <p>Password</p>
    <input name='password' type="password" placeholder="Type here" className="input input-bordered w-full " />
</div>
<div>
    <p>Confirm Password</p>
    <input name='confirmPassword' type="password" placeholder="Type here" className="input input-bordered w-full " />
</div>

<div>

</div>
{ error && <span>{error}</span>}
  <button type='submit' className="btn btn-primary w-full">Submit</button>

            </form>
            <div  className='text-center'>
            <button onClick={handleGoogleLogin} className='btn btn-primary mt-2'>Google logIn </button>
            <button onClick={handleFacebookLogin} className='btn btn-primary mt-2'>Facebook logIn </button>
            </div>
        </div>
    );
};

export default Register;