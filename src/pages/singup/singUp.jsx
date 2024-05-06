import React, { useContext } from 'react'
import logImg from "../../assets/images/login/login.svg"
import { Link } from 'react-router-dom'
import { Authcoxtext } from '../../context/authProvider'

const SingUp = () => {
    const {createUser,setUser}=useContext(Authcoxtext)
    const handelRegisterFrom=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        // console.log(name, email, password);
        // create user by email and password
        createUser(email,password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            setUser(user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
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
      <h1 className="text-3xl text-center font-bold">Register</h1>
        <form className="card-body" onSubmit={handelRegisterFrom}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">name</span>
            </label>
            <input type="name" placeholder="name" name='name' className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sing up</button>
          </div>
        </form>
        <p>Have an account?<Link to="/login" className='font-semibold text-orange-400'> Log In</Link></p>
      </div>
    </div>
  </div>
  )
}

export default SingUp
