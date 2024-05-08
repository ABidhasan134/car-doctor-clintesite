import React, { useContext } from 'react'
import logo from "../../../assets/icons/Wrench.svg"
import { Link, NavLink } from 'react-router-dom'
import { Authcoxtext } from '../../../context/authProvider'
const Navbar = () => {
  const {user,LogOut}=useContext(Authcoxtext);
  const handelLogout=()=>{
    LogOut()
    
  }
    const links=<>
     <li><a> <NavLink to="/">Home</NavLink></a></li>
        <li><a><NavLink to={`/login`}>About</NavLink></a></li>
        <li><a><NavLink>Service</NavLink></a></li>
        <li><a><NavLink>Blog</NavLink></a></li>
        <li><a><NavLink>Contact</NavLink></a></li></>


          const logElement=<>
          {
            user?<div>
            <NavLink  onClick={handelLogout}>Log Out</NavLink>
            <NavLink  to={`/bookings`}>Bookings</NavLink>
            </div>: <div>
               <li><NavLink to="/login">Log In</NavLink></li>
            <li><NavLink to="/singup">Register</NavLink></li>
            </div>
          }
        
          </>
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {links}
        </ul>
      </div>
      <figure>
        <img src={logo} alt="" />
      </figure>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {links}
      </ul>
    </div>
    <div className="navbar-end">
     {logElement}
    </div>
  </div>
  )
}

export default Navbar
