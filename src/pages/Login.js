import React from 'react'
import './Log-Reg.css'

import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <Navbar/>


      <div class="container mt-5">.</div>
    <form class="mt-5" id="registrationForm" action="#" method="post">
        <h1 class="mb-4 text-center" style={{color: '#89d1a5'}}>User Login</h1>

        <div class="form-group">

            {/* for = htmlfor */}
            <label htmlFor="mail">Email Address</label>
            <input type="email" class="form-control" id="mail" name="mail" placeholder="Email Address" required/>
            <div id="emailFeedback" class="form-control-feedback">Invalid email address</div>
        </div>

        <div class="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Password" required/>
            <div id="passwordFeedback" class="form-control-feedback">Incorrect Password</div>
            
        </div>

        <button style={{borderRadius:'25px'}} type="submit" class="login mt-3">Login</button>

        <div class="form-group">
            <Link to="/Registration">Create an account</Link>
        </div>

        

    </form>





    </>
  )
}
