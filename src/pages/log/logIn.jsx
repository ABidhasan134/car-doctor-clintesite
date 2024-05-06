import React, { useContext } from 'react'
import logImg from "../../assets/images/login/login.svg"
import { Link } from 'react-router-dom'
import { Authcoxtext } from '../../context/authProvider'
const LogIn = () => {
    const {LogInMethord}=useContext(Authcoxtext);

    const handelLogInFrom=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        LogInMethord(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
           console.log(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <figure>
        <img src={logImg} alt="" />
      </figure>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-3xl text-center font-bold">Login now!</h1>
      <form className="card-body" onSubmit={handelLogInFrom}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p>Have an account?<Link to="/singup" className='font-semibold text-orange-400'> Sign In</Link></p>
    </div>
  </div>
</div>
  )
}

export default LogIn
