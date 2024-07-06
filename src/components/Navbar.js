import React, { useEffect } from 'react';
import './Navbar.css';
//Router
import { Link } from 'react-router-dom'


export default function Navbar() {
    useEffect(() => {
        const handleDropdownHover = () => {
            const dropdowns = document.querySelectorAll('.navbar-nav .dropdown');

            dropdowns.forEach(function (dropdown) {
                dropdown.addEventListener('mouseover', function () {
                    var dropdownMenu = this.querySelector('.dropdown-menu');
                    if (dropdownMenu) {
                        dropdownMenu.classList.add('show');
                        dropdownMenu.style.opacity = '1';
                    }
                });

                dropdown.addEventListener('mouseleave', function () {
                    var dropdownMenu = this.querySelector('.dropdown-menu');
                    if (dropdownMenu) {
                        dropdownMenu.classList.remove('show');
                        dropdownMenu.style.opacity = '0';
                    }
                });
            });
        };

        handleDropdownHover();

        // Cleanup function
        return () => {
            const dropdowns = document.querySelectorAll('.navbar-nav .dropdown');
            dropdowns.forEach(function (dropdown) {
                dropdown.removeEventListener('mouseover', handleDropdownHover);
                dropdown.removeEventListener('mouseleave', handleDropdownHover);
            });
        };
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
                <div className="container-fluid">

                    {/* Title */}
                    <Link className="navbar-brand ms-5 me-5" to="/" id="title"><b>Placement Yatra</b></Link>

                    {/* Responsive Side Button */}
                    <div className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">

                        <ul className="navbar-nav">

                            {/* Technical */}
                            <li style={{ padding: '10px' }} className="nav-item dropdown ms-5">
                                <a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Technical
                                </a>
                                <ul className="dropdown-menu">
                                    <li style={{ padding: '10px' }} className="dropdown">
                                        <a className="dropdown-item dropdown-toggle" href="/">Programming Coding</a>
                                        <ul className="dropdown-menu">
                                            <li style={{ padding: '10px' }} ><a className="dropdown-item" href="/">JAVA</a></li>
                                            <li style={{ padding: '10px' }} ><a className="dropdown-item" href="/">C++</a></li>
                                        </ul>
                                    </li>
                                    <li style={{ padding: '10px' }} ><a className="dropdown-item" href="/">Computer Networking</a></li>
                                    <li style={{ padding: '10px' }} ><a className="dropdown-item" href="/">Database Management Systems</a></li>
                                    <li style={{ padding: '10px' }} ><a className="dropdown-item" href="/">Operating Systems</a></li>
                                    <li style={{ padding: '10px' }} ><a className="dropdown-item" href="/">Software Engineering</a></li>

                                </ul>
                            </li>

                            {/* Non Technical */}
                            <li style={{ padding: '10px' }} className="nav-item dropdown ms-5">
                                <a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Non-Technical
                                </a>
                                <ul className="dropdown-menu">
                                    <li style={{ padding: '10px' }} className="dropdown">
                                        <Link className="dropdown-item dropdown-toggle" to="/Quants">Quantitative Aptitude</Link>
                                        <ul className="dropdown-menu">
                                            <li style={{ padding: '10px' }}><a className="dropdown-item" href="/">Numbers</a></li>
                                            <li style={{ padding: '10px' }}><a className="dropdown-item" href="/">Speed and Work</a></li>
                                            <li style={{ padding: '10px' }}><a className="dropdown-item" href="/">Classic Banking</a></li>
                                            <li style={{ padding: '10px' }}><a className="dropdown-item" href="/">Progressions</a></li>
                                            <li style={{ padding: '10px' }}><a className="dropdown-item" href="/">Probability and Combinations</a></li>

                                        </ul>
                                    </li>
                                    <li style={{ padding: '10px' }} className="dropdown">
                                        <Link className="dropdown-item dropdown-toggle" to="/Logical">Logical Reasoning</Link>
                                        <ul className="dropdown-menu">
                                            <li style={{ padding: '10px' }}><a className="dropdown-item" href="/">Series</a></li>
                                            <li style={{ padding: '10px' }}><a className="dropdown-item" href="/">Statements</a></li>
                                            <li style={{ padding: '10px' }}><a className="dropdown-item" href="/">Visual Reasoning</a></li>
                                            <li style={{ padding: '10px' }}><a className="dropdown-item" href="/">Classic Reasoning</a></li>
                                            <li style={{ padding: '10px' }}><a className="dropdown-item" href="/">Arrangements</a></li>

                                        </ul>
                                    </li>
                                    <li style={{ padding: '10px' }} className="dropdown">
                                        <Link className="dropdown-item dropdown-toggle" to="/Verbal">Verbal Ability</Link>
                                        <ul className="dropdown-menu">
                                            <li style={{ padding: '10px' }}><a className="dropdown-item" href="/">Basic Grammar</a></li>
                                            <li style={{ padding: '10px' }}><a className="dropdown-item" href="/">Sentences</a></li>
                                            <li style={{ padding: '10px' }}><a className="dropdown-item" href="/">Paragraphs</a></li>
                                            <li style={{ padding: '10px' }}><a className="dropdown-item" href="/">Synonyms - Antonyms</a></li>
                                            <li style={{ padding: '10px' }}><a className="dropdown-item" href="/">Reading Comprehensions</a></li>

                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            {/* Resources */}
                            <li style={{ padding: '10px' }} className="nav-item dropdown ms-5">
                                <a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Resources
                                </a>
                                <ul className="dropdown-menu">
                                    <li style={{ padding: '10px' }} className="dropdown">
                                        <Link className="dropdown-item dropdown-toggle" to="/Companies">Company Specific</Link>
                                        <ul className="dropdown-menu">
                                            <li style={{ padding: '10px' }}><Link className="dropdown-item" to="/TCS">TCS</Link></li>
                                            <li style={{ padding: '10px' }}><Link className="dropdown-item" to="/Accenture">Accenture</Link></li>
                                            <li style={{ padding: '10px' }}><Link className="dropdown-item" href="/Capgemini">Capgemini</Link></li>
                                            <li style={{ padding: '10px' }}><Link className="dropdown-item" to="/Deloitte">Deloitte</Link></li>
                                            <li style={{ padding: '10px' }}><Link className="dropdown-item" href="/Infosys">Infosys</Link></li>
                                            <li style={{ padding: '10px' }}><Link className="dropdown-item" href="/Wipro">Wipro</Link></li>
                                            <li style={{ padding: '10px' }}><Link className="dropdown-item" href="/Zoho">Zoho</Link></li>
                                            <li style={{ padding: '10px' }}><Link className="dropdown-item" href="/IBM">IBM</Link></li>

                                        </ul>
                                    </li>
                                    <li style={{ padding: '10px' }}><a className="dropdown-item" href="/">Blogs</a></li>
                                    <li style={{ padding: '10px' }}><a className="dropdown-item" href="/">Web Stories</a></li>
                                </ul>
                            </li>

                            {/* Career Transition */}
                            <li style={{ padding: '10px' }} className="nav-item ms-5 me-3">
                                <a className="nav-link active" aria-current="page" href="/">Off-Campus</a>
                            </li>

                            {/* Login */}
                            <li className="nav-item">
                                <Link to="/Login" className="login ms-5">Login</Link>
                            </li>

                            {/* Subscription */}
                            <li className="nav-item">
                                <a href="/" className="subscription ms-5">Subscription</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
