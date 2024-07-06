import React,{useState} from 'react'
import './PerticularCompany.css'
import { Link } from 'react-router-dom'

export default function Deloitte() {

    const[currentState,setCurrentState]=useState('DeloitteOverview');
    const hanndelSectionClick=(sectionID)=>{
        setCurrentState(sectionID);
    }

    return (
        <>
            <div className="container mt-5">.</div>

            <div className="container mt-5">
                <h3 style={{ color: '#89d1a5' }}><Link to="/Companies" style={{ textDecoration: 'none', color: '#89d1a5' }}>All
                    Companies - </Link>Deloitte Preparation</h3>
                <div className="container mt-4" style={{ background: 'rgb(242, 249, 249)' }}>
                    <div className="container">
                        <img src="https://files.prepinsta.com/2023/09/Group-40451.webp" alt="" />
                    </div>

                    <h5 style={{ paddingTop: '10px', color: '#6c757d' }}>Deloitte Placement Papers and Questions Paper 2024</h5>
                    <p style={{ paddingTop: '10px', color: '#343a40' }}>The latest Deloitte Placement Papers 2024 show us that the
                        Quantitative Section for freshers is the most difficult. PrepInsta provided Deloitte Previous Papers and
                        Pattern on this page. If you are looking for Deloitte Previous Year Question with Solution 2024 then you
                        are in the correct place. Please go through the page in detail to know more about Deloitte Placement
                        Paper 2024.</p>

                    <table>
                        <tbody>
                        <tr>
                            <th>Sections</th>
                            <th>Number of questions</th>
                        </tr>
                        <tr>
                            <td>Quants and Logical</td>
                            <td>22 Ques</td>
                        </tr>
                        <tr>
                            <td>English</td>
                            <td>13 Ques</td>
                        </tr>
                        <tr>
                            <td>Computer Fundamentals</td>
                            <td>30 Ques</td>
                        </tr>
                        <tr>
                            <td>Coding Section</td>
                            <td>2 Ques</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* ----------------------------------------------------------------------------------- */}
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
                                <p className="card-text">90min</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-12 mb-4">
                        <div className="card custom-card">
                            <div className="card-body">
                                <h6 className="card-title">Type of test</h6>
                                <p className="card-text">Adaptive</p>
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
                    <div className=" col-md-2 col-12">
                        <div className='  buttontext' onClick={() => hanndelSectionClick('DeloitteOverview')}>Overview</div>
                    </div>
                    <div className=" col-md-2 col-12">
                        <div className='  buttontext' onClick={() => hanndelSectionClick('DeloitteQuants')}>Quants</div>
                    </div>
                    <div className="col-md-2 col-12">
                        <div className='  buttontext' onClick={() => hanndelSectionClick('DeloitteVerbal')}>Verbal</div>
                    </div>
                    <div className="col-md-2 col-12">
                        <div className='  buttontext' onClick={() => hanndelSectionClick('DeloitteLogical')}>Logical</div>
                    </div>
                    <div className="col-md-2 col-12">
                        <div className='  buttontext' onClick={() => hanndelSectionClick('DeloitteTechnical')}>Technical</div>
                    </div>
                    <div className="col-md-2 col-12">
                        <div className='  buttontext' onClick={() => hanndelSectionClick('DeloitteCoding')}>Coding</div>
                    </div>
                </div>
            </div>



            {/* <!--------------------------------overview ----------------------------------> */}

            <div className="container mt-5" style={{ background: 'rgb(242, 249, 249)' }} >

                {currentState === 'DeloitteOverview' &&

                    (<div className="container" id="DeloitteOverview">
                        <h5>Overview</h5>
                        <p>Very Important: Deloitte has kept its syllabus and pattern different for this year. The basic selection
                            procedure consists of basically five rounds. These five rounds are:</p>
                        <ol>
                            <li>Registration</li>
                            <li>Shortlisting of Resume</li>
                            <li>Online Assessment</li>
                            <li>Online Interview</li>
                            <li>Final Shortlisting/Result</li>
                        </ol>
                        <p>To get selected, you first have to clear its written test which sections are described below in the
                            table. After clearing the assessment test, you have to go through the Online Interview, and this test
                            will be checking you up on your Speaking and Listening Skills along with some coding test. And in the
                            end, you will have to go through the confirmation.</p>
                        <p>Deloitte Placement Papers have the following sections in its Written exam:</p>
                        <ul>
                            <li>Quants and Logical</li>
                            <ul>
                                <li>Number of Questions - 22 Questions</li>
                                <ul>
                                    <li>Quants- 10 Questions</li>
                                    <li>Logical- 12 Questions</li>

                                </ul>
                                <li>MCQ Type - All Questions</li>
                                <li>Time Allotted - ~22 Minutes (Maybe different)</li>
                            </ul>
                            <li>English</li>
                            <ul>
                                <li>Number of Questions - 10 Questions</li>
                                <li>MCQ Type - All Questions</li>
                                <li>Time Allotted - ~10 Minutes (Maybe different)</li>

                            </ul>
                            <li>Computer Fundamentals</li>
                            <ul>
                                <li>Number of Questions - 30 Questions</li>
                                <li>MCQ Type - All Questions</li>
                                <li>Time Allotted - ~25 Minutes (Maybe different)</li>

                            </ul>
                            <li>Coding Questions</li>
                            <ul>
                                <li>Number of Questions - 2 Questions</li>
                                <li>Time Allotted - ~35 Minutes (Maybe different)</li>

                            </ul>
                        </ul>
                        <h5>Deloitte Placement Paper based Analysis and Pattern 2024</h5>
                        <table>
                            <tbody>
                            <tr>
                                <th>Section</th>
                                <th>NO. OF QUESTIONS IN TEST</th>
                                <th>Sectional Timing</th>
                                <th>Cut Off</th>
                            </tr>
                            <tr>
                                <td>Quants and Logical</td>
                                <td>22 Ques</td>
                                <td>90 min (Overall)</td>
                                <td>11 Questions</td>
                            </tr>
                            <tr>
                                <td>English</td>
                                <td>13 Ques</td>
                                <td>90 min (Overall)</td>
                                <td>7 Questions</td>
                            </tr>
                            <tr>
                                <td>Computer Fundamentals</td>
                                <td>30 Ques</td>
                                <td>90 min (Overall)</td>
                                <td>11 Questions</td>
                            </tr>
                            <tr>
                                <td>Coding</td>
                                <td>2 Ques</td>
                                <td>90 min (Overall)</td>
                                <td>1 Question</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>67 Questions</td>
                                <td>90 min (Overall)</td>
                                <td>30 Questions (Approx.)</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    )}

                {/* <!--------------------------------DeloitteQuants ----------------------------------> */}
                {currentState === 'DeloitteQuants' &&

                    (
                        <div className="container mt-5" id="DeloitteQuants" >
                            <h5>Quants</h5>
                            <p>Deloitte Questions from Previous Papers (Aptitude)</p>
                            <ul>
                                <li><p>Total No of Questions: 10 Ques</p>
                                </li>
                                <li><p>Total Time: ~22 Mins (for Quants and Verbal)</p>
                                </li>
                            </ul>
                            <p>Note: The Quants section will be mixed with Logical Questions as well under the section of Quants and
                                Logical Aptitude.</p>
                            <h5>Deloitte Aptitude Section Analysis</h5>
                            <ul>
                                <li>LCM & HCF</li>
                                <li>Divisibility</li>
                                <li>Numbers, decimal fractions, and power</li>
                                <li>Time & Work</li>
                                <li>Pipes and Cisterns</li>
                                <li>Averages</li>
                                <li>Profit and Loss</li>
                                <li>Simple and Compound Interest</li>
                                <li>Time, Speed, and Distance</li>
                                <li>Inverse</li>
                                <li>Problems on Trains</li>
                                <li>Geometry, Coordinate Geometry</li>
                                <li>Clocks & Calendar</li>
                                <li>Logarithms</li>
                                <li>Permutation and Combinations</li>
                                <li>Probability</li>
                                <li>Ratio & Proportion</li>
                                <li>Algebra</li>
                                <li>Surds & Indices</li>
                                <li>Allegation & Mixtures</li>
                                <li>Problem on Ages</li>
                            </ul>
                        </div>
                    )}

                {/* <!--------------------------------DeloitteVerbal ----------------------------------> */}
                {currentState === 'DeloitteVerbal' &&

                    (
                        <div className="container mt-5" id="DeloitteVerbal"  >
                            <h5>Verbal English</h5>
                            <p>Deloitte Previous Papers English Verbal</p>
                            <ol>
                                <li>            <p>Total No of Questions: 13 Ques (10 MCQ and 3 Fill up blanks)</p>
                                </li>
                                <li>            <p>Total Time: ~10 Mins</p>
                                </li>
                            </ol>
                            <h5>Verbal Ability Section Analysis</h5>
                            <ul>
                                <li>Vocabulary</li>
                                <ul>
                                    <li>Synonyms</li>
                                    <li>Antonyms</li>

                                </ul>
                                <li>Grammar</li>
                                <ul>
                                    <li>Error Identification</li>
                                    <li>Sentence Improvement & Construction</li>
                                    <li>Tenses & Articles</li>
                                    <li>Proposition & Conjunctions</li>
                                    <li>Speech & Voices</li>

                                </ul>
                                <li>Reading Comprehension</li>
                                <ul>
                                    <li>Reading Comprehension</li>
                                    <li>Comprehension ordering</li>
                                    <li>Selecting Words</li>
                                    <li>Sentence Selection</li>
                                    <li>Subject-Verb Agreement</li>
                                    <li>Contextual Vocabulary</li>

                                </ul>
                            </ul>
                        </div>
                    )}

                {/* <!--------------------------------DeloitteLogical ----------------------------------> */}
                {currentState === 'DeloitteLogical' &&

                    (
                        <div className="container mt-5" id="DeloitteLogical"  >
                            <h5>Logical Reasoning</h5>
                            <p>Deloitte Questions from Previous Year Papers Logical Reasoning</p>
                            <ol>
                                <li>            <p>Total No of Questions: 12 Ques</p>
                                </li>
                                <li>            <p>Total Time: ~22 Mins (for Quants and Logical)</p>
                                </li>
                            </ol>
                            <p>Note: The Logical section will be mixed with Quants Questions as well under the section of Quants and
                                Logical Aptitude.</p>
                            <h5>Logical Reasoning Section Analysis</h5>
                            <ul>
                                <li>Deductive Reasoning</li>
                                <ul>
                                    <li>Coding deductive logic</li>
                                    <li>Blood Relation</li>
                                    <li>Directional Sense</li>
                                    <li>Objective Reasoning</li>
                                    <li>Selection decision tables</li>

                                </ul>
                                <li>Inductive reasoning</li>
                                <ol>
                                    <li>Analogy and Classification pattern recognition</li>
                                    <li>Coding pattern and Number series pattern recognition</li>
                                    <li>Odd Man Out</li>

                                </ol>
                                <li>Abductive Reasoning</li>
                                <ol>
                                    <li>Seating Arrangements</li>
                                    <li>Data Arrangements</li>
                                    <li>Mathematical Orders</li>
                                    <li>Inferred Meaning</li>
                                    <li>Logical word sequence</li>
                                    <li>Statement and Conclusion</li>
                                    <li>Syllogism</li>
                                    <li>Data Sufficiency</li>

                                </ol>
                            </ul>
                        </div>
                    )}
                {/* <!--------------------------------DeloitteTechnical ----------------------------------> */}
                {currentState === 'DeloitteTechnical' &&

                    (
                        <div className="container mt-5 mb-5" id="DeloitteTechnical"  >
                            <h5>Technical Skills</h5>
                            <p>Technical Skills Exam</p>
                            <p>After clearing Online, the next round is the Technical test. This test is designed only to evaluate the
                                technical skills of the candidate that he/she learned in their whole journey.</p>
                            <ol>
                                <li>            <p>Total Number of Questions - 30 Questions</p>
                                </li>
                                <li>            <p>Negative Marking - No</p>
                                </li>
                            </ol>

                        </div>
                    )}
                {/* <!--------------------------------DeloitteCoding ----------------------------------> */}
                {currentState === 'DeloitteCoding' &&

                    (
                        <div className="container mt-5 mb-5" id="DeloitteCoding"  >
                            <h5>Coding</h5>
                            <p>Technical Coding Exam</p>
                            <p>After clearing the technical skills exam, the next round is the Technical coding. This test is designed
                                only to evaluate the technical skills of the candidate that he/she learnt in their whole journey.</p>
                            <ul>
                                <li><p>Total Number of Questions - 2 Questions</p></li>
                                <li><p>Negative Marking - No</p>
                                </li>
                            </ul>

                        </div>
                    )}
            </div>
        </>
    )
}
