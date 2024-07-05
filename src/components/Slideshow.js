import React, { useEffect } from 'react'
import './Slideshow.css'

export default function Slideshow() {

    useEffect(() => {
        document.addEventListener("DOMContentLoaded", function () {
            const marquee = document.querySelector('.marquee');
            const companies = marquee.innerHTML;

            // Clone the companies to create a seamless loop
            marquee.innerHTML += companies;
        });
    }, []);

    return (
        <>

            <div className="marquee-container" id="company-carousel">
                <div className="companies-block">
                    <span className="marquee">
                        <div className="stack bg-image-full"
                            style={{backgroundImage : "url('https://i1.faceprep.in/PIP+Demo/company_logos/company-accenture.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/feed/images/logo-apple.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/PIP+Demo/company_logos/company-amazon.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/PIP+Demo/company_logos/company-byjus.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/PIP+Demo/company_logos/company-centurylink.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/PIP+Demo/company_logos/company-cgi.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/PIP+Demo/company_logos/company-cognizant.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/feed/images/logo-dell-company.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/PIP+Demo/company_logos/company-deloitte.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/feed/images/logo-ernst-young.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/feed/images/logo-flipkart.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/PIP+Demo/company_logos/company-thoughtworks.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/feed/images/logo-uber.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/PIP+Demo/company_logos/company-unilever.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/feed/images/logo-wells-fargo.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/feed/images/intel-logo.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/feed/images/logo-meta.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/feed/images/logo-microsoft.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/PIP+Demo/company_logos/company-mphasis.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/PIP+Demo/company_logos/company-musigma.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/PIP+Demo/company_logos/company-nineleaps.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/PIP+Demo/company_logos/company-nttdata.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/feed/images/logo-nvidia.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/feed/images/logo-paypal.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/PIP+Demo/company_logos/company-rapido.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/feed/images/logo-salesforce.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/feed/images/logo-samsung.png')"}}>
                        </div>
                        <div className="stack bg-image-full"
                            style={{backgroundImage: "url('https://i1.faceprep.in/PIP+Demo/company_logos/company-sprinklr.png')"}}>
                        </div>
                    </span>
                </div>
            </div>
        </>
    )
}
