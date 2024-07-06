import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// CSS
import './PerticularCompany.css'


export default function Accenture() {

    const [currentState, setCurrentState] = useState('AccentureOverview');

    const hanndelSectionClick = (sectionID) => {
        setCurrentState(sectionID);
    }



    return (
        <>
            <div className="container mt-5">.</div>
            <div className="container mt-5">
                <h3 style={{ color: '#89d1a5' }}><Link to="/Companies" style={{ textDecoration: 'none', color: '#89d1a5' }}>All Companies - </Link>Accenture Preparation</h3>
                <div className="container mt-4" style={{ background: 'rgb(242, 249, 249)', borderRadius: '25px', padding: '10px' }}>
                    <div className="container">
                        <img src="https://files.prepinsta.com/2023/09/Group-40357.webp" alt="" />
                    </div>

                    <h5 style={{ paddingTop: '10px', color: '#6c757d' }}>Accenture Placement Papers and Questions Paper 2024</h5>
                    <p style={{ paddingTop: '10px', color: '#343a40' }}>Accenture Placement Papers and answers for the year 2024 are
                        discussed below on this page. Here you can
                        find
                        all previous year's papers and solutions, sample papers of Accenture. PrepInsta provides Accenture
                        Placement
                        Papers and Question Paper.</p>

                    <h5 style={{ paddingTop: '10px', color: '#6c757d' }}>Here you will get all the Accenture Question Paper
                        Information:-</h5>

                    <table>
                        <tbody>
                            <tr>
                                <th  >Accenture</th>
                                <th  >Basic information</th>
                            </tr>
                            <tr>
                                <td  >Cognitive Ability</td>
                                <td  >50 Ques</td>
                            </tr>
                            <tr>
                                <td  >Technical Ability</td>
                                <td  >40 Ques</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px', backgroundColor: '#dddddd' }}>Coding</td>
                                <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px', backgroundColor: '#dddddd' }}>2 Ques</td>
                            </tr>
                            <tr>
                                <td  >Communication Assessment </td>
                                <td  >20-25 Ques</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            {/* <!--------------------------------card ----------------------------------> */}


            <div className="container mt-5">


                <div className="row mt-1">
                    <div className="col-md-3 col-12 mb-4">
                        <div className="card custom-card">
                            <div className="card-body">
                                <h6 className="card-title">Sections</h6>
                                <p className="card-text">4</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-12 mb-4">
                        <div className="card custom-card">
                            <div className="card-body">
                                <h6 className="card-title">Time Duration</h6>
                                <p className="card-text">150min</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-12 mb-4">
                        <div className="card custom-card">
                            <div className="card-body">
                                <h6 className="card-title">Type of test</h6>
                                <p className="card-text">Non Adaptive</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-12 mb-4">
                        <div className="card custom-card">
                            <div className="card-body">
                                <h6 className="card-title">Negative Marking</h6>
                                <p className="card-text">No</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--------------------------------content ----------------------------------> */}


            <div className="container mt-5 sections">
                <div className="row">
                    <div className=" col-md-3 col-12">
                        <div className='  buttontext' onClick={() => hanndelSectionClick('AccentureOverview')}>Overview</div>
                    </div>
                    <div className=" col-md-2 col-12">
                        <div className='  buttontext' onClick={() => hanndelSectionClick('AccentureCognitive')}>Cognitive Assessment</div>
                    </div>
                    <div className="col-md-2 col-12">
                        <div className='  buttontext' onClick={() => hanndelSectionClick('AccentureTechnical')}>Technical Assessment</div>
                    </div>
                    <div className="col-md-2 col-12">
                        <div className='  buttontext' onClick={() => hanndelSectionClick('AccentureCoding')}>Coding</div>
                    </div>
                    <div className="col-md-3 col-12">
                        <div className='  buttontext' onClick={() => hanndelSectionClick('AccentureCommunication')}>Communication</div>
                    </div>
                </div>
            </div>



            {/* <!--------------------------------overview ----------------------------------> */}

            <div className="container mt-5" style={{ background: 'rgb(242, 249, 249)' }} >

                {currentState === 'AccentureOverview' &&

                    (<div className="container" id="AccentureOverview">
                        <h5>Overview</h5>
                        <h6>Most Recent Accenture Placement Paper Overview</h6>
                        <p>Accenture has updated its pattern recently and now the recruitment is divided into 3 different
                            sections i.e.
                            Online Assessment, Communication Assessment, and Interview(Technical+ HR).

                            Online Assessment Test is also divided into 3 sub category:
                        </p>
                        <h6>A. Online Assessment</h6>

                        <h6>1. Cognitive Ability</h6>
                        <ol>
                            <li>Abstract Reasoning</li>
                            <li>Critical Reasoning</li>
                            <li>Verbal</li>
                        </ol>


                        <h6>2. Technical Assessment</h6>
                        <ol>
                            <li>Common Applications in MS Word</li>
                            <li>Pseudocode</li>
                            <li>Network Security and Cloud</li>
                        </ol>

                        <h6>3.Coding</h6>
                        <p>Note: First you will have to give the Cognitive and Technical Assessment and if you will be able to clear
                            both the sub-section then only you will be allowed to give the Coding Test. After Coding Test you will
                            be
                            allowed to give other rounds:
                        </p>

                        <h6>B. Communication Assessment</h6>
                        <h6>C. Interview (Technical+HR)</h6>

                        <h6>Important Information:</h6>

                        <ul>
                            <li>Cognitive Assessment: 50 min, 50 Ques</li>
                            <li>Technical Assessment: 40 min, 40 Ques</li>
                            <li>Coding: 45 min, 2 Ques</li>
                            <li>Communication Assessment: 30 min, 20-25 Ques</li>
                        </ul>




                        <p>After clearing Accenture Placement Paper 2023 with the required cut-off, you will be eligible for the
                            Interview Round.

                            The Accenture eligibility criteria are that you should have a 65% or 6.5 CGPA in your graduation with no
                            active backlogs and for a few colleges there are no percentage criteria.
                        </p>

                        <h6>Salary</h6>

                        <b>Associates Software Engineer Role</b> - Rs.4.50 LPA (Breakdown below)

                        <ul>
                            <li>Fixed Pay - Rs 3.83 LPA</li>
                            <li>Performance Bonus - Rs 32,500/- per annum</li>
                            <li>One Time Joining Bonus - Rs 25,000/-</li>
                            <li>Additional Benefits of Gratitude and Insurance</li>
                        </ul>

                        <b>Advance Associate Software Engineer Role</b> - Rs. 6.50 LPA

                        <ul>
                            <li>Fixed Pay - Rs 5.41 Lakhs</li>
                            <li>Performance-based Pay - Rs 82,500/- (in a performance cycle)</li>
                            <li>One Time Joining Bonus ~ Rs 26,500/-</li>
                            <li>Additional Benefits of Gratitude and Insurance</li>
                            <li>Free Transport to everyone (Not Available in TCS, CTS, Infosys, Wipro, etc)</li>
                            <li>Other Allowances – House Rent Allowance, Medical Allowance, Health Insurance (4Lakhs Cover)</li>
                        </ul>

                        <h6>Detailed Information on Accenture Test Pattern:</h6>
                        <table>
                            <tbody>
                            <tr>
                                <th>Accenture</th>
                                <th>Basic information</th>
                            </tr>
                            <tr>
                                <td>English Ability</td>
                                <td>17 Ques</td>
                            </tr>
                            <tr>
                                <td>Critical Reasoning and Problem Solving</td>
                                <td>18 Ques</td>
                            </tr>
                            <tr>
                                <td>Abstract Reasoning</td>
                                <td>15 Ques</td>
                            </tr>
                            <tr>
                                <td>Common Application and MS Office</td>
                                <td>12 Ques</td>
                            </tr>
                            <tr>
                                <td>Pseudo Code</td>
                                <td>18 Ques</td>
                            </tr>
                            <tr>
                                <td>Network Security and Cloud</td>
                                <td>10 Ques</td>
                            </tr>
                            <tr>
                                <td>Coading</td>
                                <td>2 Ques</td>
                            </tr>
                            <tr>
                                <td>Communication Assesment</td>
                                <td>20 Ques</td>
                            </tr>
                            </tbody>
                        </table>

                        <h6>Analysis of Written Round</h6>
                        <ul>
                            <li>No. of Question: 112 Question</li>
                            <li>Time Allotted: 150 mins</li>
                            <li>Difficulty: Hard</li>
                            <li>Cutoff: 50%</li>
                        </ul>
                        <h6>Note:</h6>
                        <ul>
                            <li> Duration for Stage 1: 90 minutes</li>
                            <li> Duration for Stage 2: 45 minutes
                            </li>
                            <li> Stage 1 is an elimination round.
                            </li>
                            <li> Stages 2 and 3 are mandatory, also elimination rounds.
                            </li>
                            <li> Those who clear Stage 1 and attempt Stage 2 will be invited to Stage 3.
                            </li>
                            <li> Depending on overall performance at a zonal level, the package would be assigned.
                            </li>
                        </ul>

                    </div>
                    )}

                {/* <!--------------------------------congative ----------------------------------> */}
                {currentState === 'AccentureCognitive' &&

                    (
                        <div className="container mt-5" id="AccentureCognitive" >
                            <h5>Cognitive Assessment</h5>
                            <p>Accenture Test is now divided into several rounds and Cognitive Assessment is the first round of the
                                written
                                test. Cognitive Assessment is also bifurcated into several rounds i.e:
                            </p>
                            <ol>
                                <li>Critical Reasoning and Problem Solving</li>
                                <li>Verbal Ability</li>
                                <li>Abstract Reasoning</li>
                            </ol>

                            <h6>Accenture Cognitive Assessment :</h6>
                            <b>Critical Reasoning and Problem Solving</b>

                            <ul>
                                <li>Arrangements</li>
                                <li>Blood Relations</li>
                                <li>tatement & Conclusions</li>
                                <li>Coding Decoding</li>
                                Click here- <a href="/Logical">Critical Reasoning</a>
                            </ul>


                            <b>Verbal Ability:</b>

                            <ul>
                                <li>Sentence Correction</li>
                                <li>Prepositions</li>
                                <li>Grammar</li>
                                <li>Reading Comprehension</li>
                                <li>Synonyms & Antonym</li>
                                Click here- <a href="/Verbal">Verbal Ability</a>
                            </ul>


                            <b>Abstract Reasoning:</b>
                            <ul>
                                <li>Visual Reasoning</li>
                                <li>Flowcharts-Visual Reasoning-DI</li>
                                <li>Directional Sense</li>
                                <li>Seating Arrangement</li>
                                Click here- <a href="/Logical">Abstract Reasoning</a>
                            </ul>



                            <b>Detailed Analysis:</b>
                            <ul>
                                <li>Total Ques: 50 Ques</li>
                                <li>Total Time: 50 mins</li>
                                <li>Difficulty: High</li>
                                <li>Negative Marking: No</li>
                            </ul>

                        </div>
                    )}

                {/* <!--------------------------------Technical ----------------------------------> */}
                {currentState === 'AccentureTechnical' &&

                    (
                        <div className="container mt-5" id="AccentureTechnical"  >
                            <h5>Technical Assesment</h5>
                            <h6>Accenture Technical Assessment curriculum 2024</h6>
                            <p>Here below you will get detailed information about Accenture Technical Assessment Curriculum. This is a
                                new
                                section being added in the selection process. This section is further divided into 3 sub-sections, below
                                here we have given practice questions related to those sub-sections
                            </p>
                            <ul>
                                <li>Common Applications and MS-Office</li>
                                <li>Pseudo Code</li>
                                <li>Fundamentals of Networking Security and Cloud</li>
                            </ul>
                            <b>Analysis of Technical Assessment Section</b>
                            <ol>
                                <li>Number of Questions:- 40 Ques</li>
                                <li>Total Time:- 40 min</li>
                                <li>Difficulty:- Moderate</li>
                            </ol>


                        </div>
                    )}

                {/* <!--------------------------------Coding ----------------------------------> */}
                {currentState === 'AccentureCoding' &&

                    (
                        <div className="container mt-5" id="AccentureCoding"  >
                            <h5>Coding Assesment</h5>
                            Here below you will get detailed information about Accenture Coding Curriculum.
                            <ul>
                                <li>C</li>
                                <li>C++</li>
                                <li>Java</li>
                                <li>Dot Net</li>
                                <li>Pythonli</li>
                            </ul>

                            The coding platform is divided into two, one for writing the code and the other for output. We should write
                            the whole program.

                            <b>Analysis of Coding Section</b>
                            <ul>
                                <li>Number of Questions:- 2 Ques</li>
                                <li>otal Time:- 45 min</li>
                                <li>Difficulty:- High</li>

                            </ul>
                        </div>
                    )}
                {/* <!--------------------------------Communication ----------------------------------> */}
                {currentState === 'AccentureCommunication' &&

                    (
                        <div className="container mt-5 mb-5" id="AccentureCommunication"  >
                            <h5>Communication Assesment</h5>
                            <p>Here below you will get detailed information about Accenture Communication Curriculum.
                                Topic judged:</p>
                            <ul>
                                <li>Sentence Mastery</li>
                                <li>Vocabulary</li>
                                <li>Fluency</li>
                                <li>Pronunciation</li>
                            </ul>
                            <p>Note:For Fluency, and Pronunciation Round they use online tools from which your fluency of speaking and
                                pronunciation of words are being judged.</p>
                            <ol>
                                <li>Number of Questions:- 20-25 Ques</li>
                                <li>Total Time:- 30 min</li>
                                <li>Difficulty:- High</li>
                            </ol>

                        </div>
                    )}
            </div>





        </>
    )
}
