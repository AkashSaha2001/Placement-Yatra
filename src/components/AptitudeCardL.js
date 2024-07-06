import React from 'react'

export default function AptitudeCardL({title,image,subtopic1,subtopic2,subtopic3,subtopic4,subtopic5,subtopic6,subtopic7}) {
  return (
    <>
      <div className="container mt-5" style={{ background: '#ebeff2', borderRadius: '20px', padding: '20px' }}>
                <h3 className="">{title}</h3>
                <div className="row">

                    <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                        <img src={image} alt="" style={{ maxWidth: '200px' }} />
                    </div>

                    <div className="col-md-8 col-12">
                        <ul>
                            <li style={{ padding: '10px' }}> {subtopic1} – <a href="/" style={{ backgroundColor: '#89d1a5', borderRadius: '10px', padding: '5px', textDecoration: 'none', color: 'aliceblue' }}>Questions</a> | <a href="/" style={{ backgroundColor: '#d3a781', borderRadius: '10px', padding: '5px', textDecoration: 'none', color: 'aliceblue' }}>Formulas</a></li>
                            <li style={{ padding: '10px' }}> {subtopic2} –  <a href="/" style={{ backgroundColor: '#89d1a5', borderRadius: '10px', padding: '5px', textDecoration: 'none', color: 'aliceblue' }}>Questions</a> | <a href="/" style={{ backgroundColor: '#d3a781', borderRadius: '10px', padding: '5px', textDecoration: 'none', color: 'aliceblue' }}>Formulas</a></li>
                            <li style={{ padding: '10px' }}> {subtopic3} – <a href="/" style={{ backgroundColor: '#89d1a5', borderRadius: '10px', padding: '5px', textDecoration: 'none', color: 'aliceblue' }}>Questions</a> | <a href="/" style={{ backgroundColor: '#d3a781', borderRadius: '10px', padding: '5px', textDecoration: 'none', color: 'aliceblue' }}>Formulas</a></li>
                            <li style={{ padding: '10px' }}> {subtopic4} –  <a href="/" style={{ backgroundColor: '#89d1a5', borderRadius: '10px', padding: '5px', textDecoration: 'none', color: 'aliceblue' }}>Questions</a> | <a href="/" style={{ backgroundColor: '#d3a781', borderRadius: '10px', padding: '5px', textDecoration: 'none', color: 'aliceblue' }}>Formulas</a></li>
                            <li style={{ padding: '10px' }}> {subtopic5} –  <a href="/" style={{ backgroundColor: '#89d1a5', borderRadius: '10px', padding: '5px', textDecoration: 'none', color: 'aliceblue' }}>Questions</a> | <a href="/" style={{ backgroundColor: '#d3a781', borderRadius: '10px', padding: '5px', textDecoration: 'none', color: 'aliceblue' }}>Formulas</a></li>
                            <li style={{ padding: '10px' }}> {subtopic6} –  <a href="/" style={{ backgroundColor: '#89d1a5', borderRadius: '10px', padding: '5px', textDecoration: 'none', color: 'aliceblue' }}>Questions</a> | <a href="/" style={{ backgroundColor: '#d3a781', borderRadius: '10px', padding: '5px', textDecoration: 'none', color: 'aliceblue' }}>Formulas</a></li>
                            <li style={{ padding: '10px' }}> {subtopic7} –  <a href="/" style={{ backgroundColor: '#89d1a5', borderRadius: '10px', padding: '5px', textDecoration: 'none', color: 'aliceblue' }}>Questions</a> | <a href="/" style={{ backgroundColor: '#d3a781', borderRadius: '10px', padding: '5px', textDecoration: 'none', color: 'aliceblue' }}>Formulas</a></li>

                        </ul>
                    </div>
                </div>
            </div>
    </>
  )
}
