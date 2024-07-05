import React,{useEffect} from 'react'
import './Log-Reg.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

export default function Registration() {

    useEffect(()=>{
        const emailInput = document.getElementById('mail');
        const passwordInput = document.getElementById('password');
        const mobileInput = document.getElementById('mobile');

        if (emailInput) {
            emailInput.addEventListener('input', function () {
                var mail = this.value;
                const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                const isValid = regex.test(mail);
                var emailFeedback = document.getElementById('emailFeedback');
                if (isValid) {
                    emailFeedback.style.display = 'none';
                } else {
                    emailFeedback.style.display = 'block';
                }
            });
        }

        if (passwordInput) {
            passwordInput.addEventListener('input', function () {
                var password = this.value;

                var lengthFeedback = document.getElementById('passwordFeedback-length');
                var upperFeedback = document.getElementById('passwordFeedback-upper');
                var lowerFeedback = document.getElementById('passwordFeedback-lower');
                var numberFeedback = document.getElementById('passwordFeedback-number');
                var symbolFeedback = document.getElementById('passwordFeedback-symbol');

                // Regex patterns
                var upperCasePattern = /[A-Z]/;
                var lowerCasePattern = /[a-z]/;
                var numberPattern = /[0-9]/;
                var symbolPattern = /[\W_]/;  // Matches any non-word character (includes special characters)

                // Check length
                if (password.length < 8) {
                    lengthFeedback.style.display = 'block';
                } else {
                    lengthFeedback.style.display = 'none';
                }

                // Check for uppercase letter
                if (!upperCasePattern.test(password)) {
                    upperFeedback.style.display = 'block';
                } else {
                    upperFeedback.style.display = 'none';
                }

                // Check for lowercase letter
                if (!lowerCasePattern.test(password)) {
                    lowerFeedback.style.display = 'block';
                } else {
                    lowerFeedback.style.display = 'none';
                }

                // Check for number
                if (!numberPattern.test(password)) {
                    numberFeedback.style.display = 'block';
                } else {
                    numberFeedback.style.display = 'none';
                }

                // Check for special character
                if (!symbolPattern.test(password)) {
                    symbolFeedback.style.display = 'block';
                } else {
                    symbolFeedback.style.display = 'none';
                }
            });
        }

        if (mobileInput) {
            mobileInput.addEventListener('input', function () {
                var phoneNumber = this.value;
                const pattern = /^\d{10}$/;
                const isValidnumber = pattern.test(phoneNumber);
                var mobileFeedback = document.getElementById('mobileFeedback');
                if (isValidnumber) {
                    mobileFeedback.style.display = 'none';
                } else {
                    mobileFeedback.style.display = 'block';
                }
            });
        }
    },[]);

    return (
        <>
            <Navbar />


            <div className="container mt-5">.</div>

            <form id="registrationForm" className="mt-5" action="#" method="post">
                <h1 className="mb-4 text-center" style={{color: '#89d1a5'}}>User Registration</h1>

                <div className="form-group">
                    {/* for = htmlFor */}
                    <label htmlFor="mail">Email Address</label>
                    <input type="email" className="form-control" id="mail" name="mail" placeholder="Email Address" required/>
                        <div id="emailFeedback" className="form-control-feedback">Invalid email address</div>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" required/>
                        <div id="passwordFeedback-length" className="form-control-feedback">Password must be at least 8 characters long
                        </div>
                        <div id="passwordFeedback-upper" className="form-control-feedback">Password must contain at least one uppercase
                            letter</div>
                        <div id="passwordFeedback-lower" className="form-control-feedback">Password must contain at least one lowercase
                            letter</div>
                        <div id="passwordFeedback-number" className="form-control-feedback">Password must contain at least one number
                        </div>
                        <div id="passwordFeedback-symbol" className="form-control-feedback">Password must contain at least one special
                            character</div>
                </div>

                <div className="form-group">
                    <label htmlFor="user">User Name</label>
                    <input type="text" className="form-control" id="user" name="user" placeholder="User Name" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input type="tel" className="form-control" id="mobile" name="mobile" placeholder="Mobile Number" required/>
                        <div id="mobileFeedback" className="form-control-feedback">Invalid mobile number</div>
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="image">Upload Profile Picture</label>
                    <input type="file" className="form-control" id="image" required/>
                </div>


                <button style={{borderRadius:'25px'}} type="submit" className="text-center">Submit</button>

                <div className="form-group mb-4 text-center">
                    {/* a = Link */}
                    {/* href = to */}
                    <Link to="/Login">Already have an account</Link>
                </div>

            </form>

            <Footer />
        </>
    )
}
