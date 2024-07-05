import React from 'react'
import { Link } from 'react-router-dom'

export default function SubjectTopic({imagelink}) {
    return (
        <>
            <div className="con mt-5">.</div>

            <div className="container mt-5">
                <h3 style={{textAlign: 'center', color: '#89d1a5'}}>Importance of Aptitude Development For Placements
                </h3>

                <div className="content mt-3" style={{background: '#89d1a5', color: 'white', padding:'20px', borderRadius:'10px', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                    <div className="row">
                        {/* <!-- col 1 --> */}
                        <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                            <img src={imagelink} alt=""
                                style={{maxWidth: '250px'}} />
                        </div>
                        {/* <!-- col 2 --> */}
                        <div className="col-md-8 col-12">
                            <p>Aptitude is a very important part for campus placements. All Service Based companies and major Product Based companies will ask you questions on Aptitude for placements. It is a common mistake to ignore aptitude or give it less focus in favor of coding. However, this practice is wrong, as performing well in aptitude is an equally important criteria.
                            </p>
                            <h6 style={{color: '#2c3e50'}}>Aptitude is broadly categorized into three sections:-</h6>
                            <ul>
                                <li style={{padding: '10px'}}><Link to="/Quants" style={{backgroundColor: '#d3a781', borderRadius: '10px', padding: '5px',texDecoration: 'none',color: 'aliceblue' ,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>Quantitative Aptitude</Link></li>
                                <li style={{padding: '10px'}}><Link to="/Logical" style={{backgroundColor: '#d3a781', borderRadius: '10px', padding: '5px',texDecoration: 'none',color: 'aliceblue' ,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>Logical Reasoning</Link></li>
                                <li style={{padding: '10px'}}><Link to="/Verbal" style={{backgroundColor: '#d3a781', borderRadius: '10px', padding: '5px',texDecoration: 'none',color: 'aliceblue' ,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>Verbal Ability</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
