import React from 'react';
import './Apptitude.css'; // Import your CSS file for styling
import CardText from '../components/CardText';

export default function Apptitude() {


    return (
        <>
            <div className="container mt-5">.</div>
            <div className="container mt-5">
                <h3 className="text-center" style={{ color: '#89d1a5' }}>Important Aptitude Topics For Campus Placements</h3>

                <div className="content mt-3" style={{ background: '#89d1a5', color: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                            <img src="https://files.prepinsta.com/2023/06/most-asked-aptitude-topics.webp" alt="Aptitude Topics" style={{ maxWidth: '250px' }} />
                        </div>

                        {/* Column 2 */}
                        <div className="col-md-8 col-12">
                            <h3 style={{ color: '#2c3e50' }}>Most Important Aptitude Topics For Placements</h3>

                            <p>Important Aptitude Topics for Placements are listed on this page. You can start your aptitude preparation for various Service Based and Product Based companies by going through this page.</p>

                            <h6 style={{ color: '#2c3e50' }}>On this page, you will find:</h6>

                            <ul>
                                <li>Important Aptitude Topics for Campus Placements – <strong><a href="Quants.html" style={{ textDecoration: 'none', color: '#d8d5d8' }}>Quants</a></strong></li>
                                <li>Important Aptitude Topics for Campus Placements – <strong><a href="Logical.html" style={{ textDecoration: 'none', color: '#8b8475' }}>Logical</a></strong></li>
                                <li>Important Aptitude Topics for Campus Placements – <strong><a href="Verbal.html" style={{ textDecoration: 'none', color: '#605d58' }}>Verbal Ability</a></strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* --------------------------------------------------------------- */}

            <div className="container mt-5 text-center">
                <div className="container">
                    <h2 style={{ color: '#89d1a5' }}>Topics</h2>
                    <h5>Importance of Aptitude Development For Placements</h5>
                </div>

                <div className="container mt-5">
                    <div className="row">

                        {/* Quants */}
                        <div className="col-md-4 col-12 mb-4">

                            <CardText

                                imagelink="https://files.prepinsta.com/2023/07/important-aptitude-formulas.webp"
                                title="Quants"
                                description="Quantitative Aptitude deals with mathematical ability of a candidate"
                                buttonlink="/Quants"


                            />

                        </div>

                        <div className="col-md-4 col-12 mb-4">
                            <CardText

                                imagelink="https://files.prepinsta.com/2023/07/start-placement-preparations.webp"
                                title="Logical"
                                description="Logical Reasoning, is another very important subject for Aptitude preparation."
                                buttonlink="/Logical"


                            />
                        </div>

                        <div className="col-md-4 col-12 mb-4">
                            <CardText

                                imagelink="https://files.prepinsta.com/2023/07/english-questions-for-placements.webp"
                                title="Verbal Ability"
                                description="Verbal ability is crucial as it tests the candidate’s command over the English language"
                                buttonlink="/Verbal"


                            />
                        </div>
                    </div>

                </div>

            </div>


            </>
    );
}
