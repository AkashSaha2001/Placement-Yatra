import React, { useEffect } from 'react';
import './Home.css';
import Card from '../components/Card.js';
import ImageCard from '../components/ImageCard.js';
import ContactUs from '../components/ContactUs.js';
import Footer from '../components/Footer.js';
import { Link } from 'react-router-dom';

// import Companies from './Companies.js';
// import Slideshow from '../components/Slideshow.js';

export default function Home() {

  useEffect(() => {
    const textchangearray = ['Programming', 'Upskill', 'Engineering', 'Placement'];
    let index = 0;

    const interval = setInterval(() => {
      let textchange = document.getElementById("textchange");
      if (textchange) {
        textchange.style.opacity = 0; // Start fade out

        setTimeout(() => {
          textchange.innerHTML = textchangearray[index];
          textchange.style.opacity = 1; // Start fade in
          index = (index + 1) % textchangearray.length; // Loop through the array
        }, 500); // Match this timeout with the CSS transition duration
      }
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="body container mt-3">
        {/* to add some space */}
        <div className="content"></div>

        <div className="row">
          {/* col 1 */}
          <div className="col-md-6 col-12">
            <div className="container mt-5">
              {/* to add some space */}
              <div className="content"></div>

              <h1>
                <b style={{ color: '#89d1a5' }}>
                  Placement Yatra, <span style={{ color: 'black' }} id="textchange">UpSkill</span>
                </b>
              </h1>
              <h1><b>Simplified !!</b></h1>

              {/* a = Link */}
              {/* href = to */}
              <Link to="/Registration"><b>Sign Up for Free</b></Link>
            </div>
            <div className="container home-skills mt-3 text-center">
              <label><i className="icon-ok" style={{ color: '#18a963' }}></i> Aptitude</label>
              <label className="ms-3"><i className="icon-ok" style={{ color: '#18a963' }}></i> Coding</label>
              <label className="ms-3"><i className="icon-ok" style={{ color: '#18a963' }}></i> Interview Prep</label>
              <label className="ms-3"><i className="icon-ok" style={{ color: '#18a963' }}></i> New Age Skills</label>
            </div>
            {/* social icon */}
            <div className="container social mt-4 mb-5">
              <img src="/image/facebook-icon.png" className="social-icon" alt="Facebook icon" />
              <img src="/image/instagram-icon.png" className="social-icon" alt="Instagram icon" />
              <img src="/image/linkedin-icon.png" className="social-icon" alt="LinkedIn icon" />
              <img src="/image/twitter-icon.png" className="social-icon" alt="Twitter icon" />
              <img src="/image/whatsapp-icon.png" className="social-icon" alt="WhatsApp icon" />
            </div>
          </div>
          {/* col 2 */}
          <div className="col-md-6 col-12 text-center mt-5">
            <img
              src="https://www.o1codingclub.in/static/media/laptop_for_webpage.d10de3456c57725d9b10.png"
              style={{ maxWidth: '500px', maxHeight: '300px', marginTop: '50px' }}
              alt="Laptop illustration"
            />
          </div>
        </div>
        {/* to add some space */}
        <div className="content"></div>
      </div>


      {/* <!--------------------------------  Choose Learning Path --------------------------------> */}
      <div className="container mt-5">
        <div className="content text-center">
          <h1 style={{ color: '#89d1a5' }}>Choose Learning Path</h1>
        </div>

        {/* <!-- row1 --> */}
        <div className="row mt-5">

          {/* <!-- col 1 --> */}
          <div className="col-md-8 col-12 mb-4">

            {/* card  Companies */}
            <Card
              title="Companies"
              description="Prepare for companies like TCS, Accenture, Salesforce, Deloitte with Placement Yatra"
              link="/Companies"
              linktitle="View All Companies"
            />

          </div>

          {/* <!-- col 2 --> */}
          <div className="col-md-4 col-12 mb-4">

            {/* card  Apptitude*/}
            <Card

              title="Aptitude"
              description="Learn Aptitude from basic to pro with Placement Yatra"
              link="/"
              linktitle="Prepare Now"

            />

          </div>
        </div>

        {/* <!-- row2 --> */}
        <div className="row mt-1">

          {/* <!-- col 1 --> */}
          <div className="col-md-4 col-12 mb-4">

            {/* card  CS Subjects*/}
            <Card

              title="CS Subjects"
              description="Prepare for CS Subjects with Placement Yatra and excel in your chosen field."
              link="/"
              linktitle="Prepare Now"

            />

          </div>

          {/* <!-- col 2 --> */}
          <div className="col-md-4 col-12 mb-4">

            {/* card  Programming */}
            <Card

              title="Programming"
              description="Learn and become a pro in programming with Placement Yatra"
              link="/"
              linktitle="Prepare Now"

            />

          </div>

          {/* <!-- col 3 --> */}
          <div className="col-md-4 col-12 mb-4">

            {/* card Interview */}
            <Card

              title="Interview"
              description="HR, Puzzles, Group Discussion, Interview Experiences and more ..."
              link="/"
              linktitle="Prepare Now"

            />
          </div>

        </div>
      </div>


      {/* <!------------------------------------ Skill Up with our free content--------------------------------> */}
      <div className="container">
        <div className="container mt-5 mb-5 text-center">
          <h1 style={{ color: '#89d1a5' }}>Skill Up with our Free Content</h1>
          <h3 style={{ color: '#6d736f' }}>Make a free ride to experience the richness!</h3>
        </div>

        <div className="row mt-1">
          {/* <!-- col 1  Articles --> */}
          <div className="col-md-4 col-12 mb-4">

            <ImageCard

              imagelink="https://i1.faceprep.in/feed/images/skill-up-card-article.webp"
              link="/"
              buttontext="Articles"

            />

          </div>

          {/* <!-- col 2 Test --> */}
          <div className="col-md-4 col-12 mb-4">

            <ImageCard

              imagelink="https://i1.faceprep.in/feed/images/skill-up-card-tests.webp"
              link="/"
              buttontext="Test"

            />

          </div>

          {/* <!-- col 3  Video --> */}
          <div className="col-md-4 col-12 mb-4">

            <ImageCard

              imagelink="https://i1.faceprep.in/feed/images/skill-up-card-videos.webp"
              link="/"
              buttontext="Video"

            />

          </div>
        </div>
      </div>



      <ContactUs/>
      {/* <Slideshow/> */}
      {/* <Companies/> */}
      <Footer/>




    </>
  );
}
