import React from 'react'
import './Companies.css'
import Slideshow from '../components/Slideshow'
import CardText from '../components/CardText'

export default function Companies() {
    return (
        <>
            <div className="content mt-5">.</div>
            <div className="container mt-5 mb-5">
                <div className="title text-center">
                    <h1 style={{ color: '#89d1a5' }}>All Companies</h1>
                </div>

                <div className="container dashboard" style={{ backgroundColor: '#89d1a5', maxWidth: '100%' }}>
                    <h3 className="mt-5" style={{ color: 'white', paddingTop: '50px', marginLeft: '50px' }}>Placement Yatra</h3>
                    <h1 className="mt-5" style={{ marginLeft: '50px' }}>All Companies Dashboard</h1>
                    <p style={{ marginLeft: '50px' }}>Placement Yatra, your one-stop for placement preparation and upskilling. Start
                        your journey to placements and upskilling with Placement Yatra's all companies dashboard.</p>
                    <a href="#majorcompanies" className="mb-5" style={{ marginLeft: '50px' }}>Start preparation</a>
                    .
                </div>
            </div>
            <div className="content mt-5">.</div>

            <Slideshow />


            {/* -----------------------------cards----------------------------- */}

            <div class="container" id="majorcompanies">
                <div class="title text-center">
                    <h1 style={{ color: '#89d1a5' }} class="mt-5">Prepare for All Major Companies</h1>
                </div>

                {/* <!-- row 1  --> */}
                <div class="row mt-5">

                    {/* <!-- col 1  Accenture--> */}
                    <div class="col-md-3 col-12 mb-4">

                        <CardText
                            imagelink="https://files.prepinsta.com/2023/09/Group-40357.webp"
                            title="Accenture"
                            description="Start Preparing for Accenture"
                            buttonlink="/"

                        />
                    </div>

                    {/* <!-- col 2 --> */}
                    <div class="col-md-3 col-12 mb-4">

                        <CardText
                            imagelink="https://files.prepinsta.com/2023/09/Group-40451.webp"
                            title="Deloitte"
                            description="Start Preparing for Deloitte"
                            buttonlink="/"


                        />

                    </div>

                    {/* <!-- col 3 --> */}
                    <div class="col-md-3 col-12 mb-4">
                        <CardText

                            imagelink="https://files.prepinsta.com/2023/09/Group-40241.webp"
                            title="Infosys"
                            description="Start Preparing for Infosys"
                            buttonlink="/"

                        />
                    </div>

                    {/* <!-- col 4 --> */}
                    <div class="col-md-3 col-12 mb-4">
                        <CardText
                            imagelink="https://files.prepinsta.com/2023/09/Group-40237.webp"
                            title="TCS"
                            description="Start Preparing for TCS"
                            buttonlink="/"


                        />
                    </div>
                </div>


                {/* <!-- row 2  --> */}
                <div class="row mt-2">
                    {/* <!-- col 1 --> */}
                    <div class="col-md-3 col-12 mb-4">

                        <CardText
                            imagelink="https://files.prepinsta.com/2023/09/Group-40486.webp"
                            title="Zoho"
                            description="Start Preparing for Zoho"
                            buttonlink="/"


                        />
                    </div>

                    {/* <!-- col 2 --> */}
                    <div class="col-md-3 col-12 mb-4">
                        <CardText
                            imagelink="https://files.prepinsta.com/2023/09/Group-40238.webp"
                            title="Wipro"
                            description="Start Preparing for Wipro"
                            buttonlink="/"


                        />
                    </div>

                    {/* <!-- col 3 --> */}
                    <div class="col-md-3 col-12 mb-4">
                        <CardText
                            imagelink="https://files.prepinsta.com/2023/09/Group-40240.webp"
                            title="Capgemini"
                            description="Start Preparing for Capgemini"
                            buttonlink="/"


                        />
                    </div>

                    {/* <!-- col 4 --> */}
                    <div class="col-md-3 col-12 mb-4">
                        <CardText
                            imagelink="https://files.prepinsta.com/2023/09/Group-40487.webp"
                            title="IBM"
                            description="Start Preparing for IBM"
                            buttonlink="/"


                        />
                    </div>
                </div>


            </div>
        </>
    )
}
