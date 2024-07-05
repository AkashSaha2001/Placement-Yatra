import React from 'react'
import CardText from '../components/CardText'
// import './Apptitude.css'

export default function Subjects() {
    return (
        <>
            <div className="con mt-2">.</div>

            <div className="container mt-5">
                <h3 style={{ textAlign: 'center', color: '#89d1a5' }}>CS Subjects</h3>

                <div className="content mt-3" style={{ background: '#89d1a5', color: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <div className="row">
                        {/* <!-- col 1 --> */}
                        <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                            <img src="https://files.prepinsta.com/wp-content/uploads/2024/05/learn-cs-subjects.webp" alt=""
                                style={{ maxWidth: '250px' }} />
                        </div>
                        {/* <!-- col 2 --> */}
                        <div className="col-md-8 col-12">
                            <h3 style={{ color: '#2c3e50' }}>Most Important CS Topics For Placements</h3>

                            <p>Get started with CS subjects. Nowadays, learning to code will not be enough, having additional knowledge of Computer Science subjects is also important. On this page,
                                you will find all the resources to start learning CS Subjects.
                            </p>
                            <h6 style={{ color: '#2c3e50' }}>On this page, you will find:-</h6>
                            <ul>
                                <li>Important Aptitude Topics for Campus Placements – <strong><a href="/" style={{ textDecoration: 'none', color: 'rgb(216, 213, 216)' }}>Computer Networks</a></strong></li>
                                <li>Important Aptitude Topics for Campus Placements – <strong><a href="/" style={{ textDecoration: 'none', color: 'rgb(139, 132, 117)' }}>Software Engineering</a></strong></li>
                                <li>Important Aptitude Topics for Campus Placements – <strong><a href="/" style={{ textDecoration: 'none', color: 'rgb(96, 93, 88)' }}>DBMS</a></strong></li>
                                <li>Important Aptitude Topics for Campus Placements – <strong><a href="/" style={{ textDecoration: 'none', color: 'rgb(96, 93, 88)' }}>Operating Systems</a></strong></li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            {/* --------------------------------------------------------------- */}
            <div className="container mt-5 text-center">
                <div className="container">
                    <h2 style={{ color: '#89d1a5'}}>Topics</h2>
                    <h5>Importance of CS Subjects For Placements</h5>
                </div>

                <div className="container mt-5">
                    <div className="row">

                        <div className="col-md-3 col-12 mb-4">
                            <CardText
                                imagelink="https://cdn-icons-png.flaticon.com/512/9873/9873449.png"
                                title="Computer Networks"
                                description="Computer Networking Is one of the most important core subject CS Subject,and it is also a commonly asked question during interviews"
                                buttonlink="/"


                            />


                        </div>

                        <div className="col-md-3 col-12 mb-4">
                        <CardText
                                imagelink="https://files.prepinsta.com/2022/12/Introduction-to-Software-Engineering.webp"
                                title="Software Engineering"
                                description="Having a basic idea of the concepts of Software Engineering is required for IT placements. Interviewers usually ask questions"
                                buttonlink="/"


                            />
                        </div>

                        <div className="col-md-3 col-12 mb-4">
                        <CardText
                                imagelink="https://files.prepinsta.com/2023/07/Operating-System.webp"
                                title="Operating Systems"
                                description="Operating System knowledge is imperative in order to get a job in the IT industry. Companies usually ask MCQs based on OS, "
                                buttonlink="/"


                            />
                        </div>

                        <div className="col-md-3 col-12 mb-4">
                        <CardText
                                imagelink="https://files.prepinsta.com/2022/12/Software-Re-Engineering.webp"
                                // imagestyle={{maxWidth:'500px'}}
                                title="Database Management Systems"
                                description="DBMS or Database Management System is one of the most important core CS subject. "
                                buttonlink="/"


                            />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
