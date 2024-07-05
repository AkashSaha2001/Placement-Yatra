import React from 'react'
import './Footer.css'

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
                                    <li><a href="/quantitative-aptitude/" className="text-light">Quantitative Aptitude</a></li>
                                    <li><a href="/data-interpretation/" className="text-light">Data Interpretation</a></li>
                                    <li><a href="/logical-reasoning/" className="text-light">Logical Reasoning</a></li>
                                    <li><a href="/verbal-reasoning/" className="text-light">Verbal Reasoning</a></li>
                                    <li><a href="/non-verbal-reasoning/" className="text-light">Non Verbal Reasoning</a></li>
                                    <li><a href="/verbal-ability/" className="text-light">Verbal Ability</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* row 2 Companies */}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-companies">

                                <h5 className="footer-learn-title">Companies</h5>

                                <ul className="list-unstyled">
                                    <li><a href="/" className="text-light">Accenture</a></li>
                                    <li><a href="/" className="text-light">Capgemini</a></li>
                                    <li><a href="/" className="text-light">Deloitte</a></li>
                                    <li><a href="/" className="text-light">Infosys</a></li>
                                    <li><a href="/" className="text-light">TCS</a></li>
                                    <li><a href="/" className="text-light">Wipro</a></li>
                                    <li><a href="/" className="text-light">Zoho</a></li>
                                    <li><a href="/" className="text-light">IBM</a></li>

                                </ul>
                            </div>
                        </div>

                        {/* Row 3 Resources */}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-resources">
                                <h5 className="footer-learn-title">Resources</h5>
                                <ul className="list-unstyled">
                                    <li><a href="/" className="text-light">Blog</a></li>
                                    <li><a href="/" className="text-light">Web Stories</a></li>
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
