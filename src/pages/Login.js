import React from 'react'
import './Log-Reg.css'

import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <Navbar/>


      <div className="container mt-5">.</div>
    <form className="mt-5" id="registrationForm" action="#" method="post">
        <h1 className="mb-4 text-center" style={{color: '#89d1a5'}}>User Login</h1>

        <div className="form-group">

            {/* for = htmlfor */}
            <label htmlFor="mail">Email Address</label>
            <input type="email" className="form-control" id="mail" name="mail" placeholder="Email Address" required/>
            <div id="emailFeedback" className="form-control-feedback">Invalid email address</div>
        </div>

        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="Password" required/>
            <div id="passwordFeedback" className="form-control-feedback">Incorrect Password</div>
            
        </div>

        <button style={{borderRadius:'25px'}} type="submit" className="login mt-3">Login</button>

        <div className="form-group">
            <Link to="/Registration">Create an account</Link>
        </div>

        

    </form>





    </>
  )
}
