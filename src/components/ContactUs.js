import React from 'react'
import './ContactUs.css'

export default function ContactUs() {
    return (
        <>
            <div className="container mt-5">
                <div className="content text-center">
                    <h1 style={{color: '#89d1a5'}}>Contact Us</h1>
                </div>
                <div className="row mt-5">

                    {/* <!-- col 1 --> */}
                    <div className="col-md-6 col-12">
                        <div className="contact-info text-center">
                            <h3>Talk to Our Experts</h3>
                            <p>Still confused about how Placement Yatra can help you achieve your dreams? Talk to our experts.
                            </p>
                            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/call_back.svg"
                                className="img-fluid mt-5" alt="Talk to Our Experts"/>
                        </div>
                    </div>

                    {/* <!-- col 2 --> */}
                    <div className="col-md-6 col-12">
                        <div id="contactForm" className="contact-form">
                            <div className="form-group mt-5">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Name"/>
                            </div>
                            <div className="form-group mt-5">
                                <label htmlFor="email">Email-ID</label>
                                <input type="email" className="form-control" id="email" placeholder="Email"/>
                            </div>
                            <div className="form-group mt-5">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="number" className="form-control" id="phone" placeholder="Phone Number"/>
                            </div>
                            <div className="form-group mt-5">
                                <textarea className="form-control" id="query" rows="5" placeholder="Your Query"/>
                            </div>
                            <a href="/">Submit</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
