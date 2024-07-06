import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer className="footer-container mt-5" >
                <div className="container">
                    <div className="row">

                        {/* Row 1 Learn */}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-learn-aptitude">

                                <h5 className="footer-learn-title">Learn</h5>

                                <ul className="list-unstyled">
                                    <li><Link to="/" className="text-light">Quantitative Aptitude</Link></li>
                                    <li><Link to="/" className="text-light">Data Interpretation</Link></li>
                                    <li><Link to="/" className="text-light">Logical Reasoning</Link></li>
                                    <li><Link to="/" className="text-light">Verbal Reasoning</Link></li>
                                    <li><Link to="/" className="text-light">Non Verbal Reasoning</Link></li>
                                    <li><Link to="/" className="text-light">Verbal Ability</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* row 2 Companies */}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-companies">

                                <h5 className="footer-learn-title">Companies</h5>

                                <ul className="list-unstyled">
                                    <li><Link to="/Accenture" className="text-light">Accenture</Link></li>
                                    <li><Link to="/capgemini" className="text-light">Capgemini</Link></li>
                                    <li><Link to="/Deloitte" className="text-light">Deloitte</Link></li>
                                    <li><Link to="/Infosys" className="text-light">Infosys</Link></li>
                                    <li><Link to="/TCS" className="text-light">TCS</Link></li>
                                    <li><Link to="/Wipro" className="text-light">Wipro</Link></li>
                                    <li><Link to="/Zoho" className="text-light">Zoho</Link></li>
                                    <li><Link to="/IBM" className="text-light">IBM</Link></li>

                                </ul>
                            </div>
                        </div>

                        {/* Row 3 Resources */}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-resources">
                                <h5 className="footer-learn-title">Resources</h5>
                                <ul className="list-unstyled">
                                    <li><Link to="/Blog" className="text-light">Blog</Link></li>
                                    <li><Link to="/Web" className="text-light">Web Stories</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Row 4 title */}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-intro">
                                <h3 className="" style={{ color: '#89d1a5' }}>Placement Yatra</h3>
                                <p className="" style={{ color: 'white' }}>One Stop Solution for Placement Preparation</p>

                                <div className="container social mt-4 mb-5">
                                    <img src="/image/facebook-icon.png" className="social-icon" alt="Facebook" />
                                    <img src="/image/instagram-icon.png" className="social-icon" alt="Instagram" />
                                    <img src="/image/linkedin-icon.png" className="social-icon" alt="LinkedIn" />
                                    <img src="/image/twitter-icon.png" className="social-icon" alt="Twitter" />
                                    <img src="/image/whatsapp-icon.png" className="social-icon" alt="Wp" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </footer>
        </>
    )
}
