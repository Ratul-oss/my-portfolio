import React from 'react'
import { Link } from 'react-router-dom'
import AboutSrc from './img/About.png'

const ShortAbout = () => {
  const year = new Date().getFullYear()
  const myExperience = year - 2020
  return (
    <>
      <section id="About">
        <div id="Container">
          <div id="AboutCOntentWrapper">
            <div id="AboutDesc" data-aos="fade-up">
              <h2>Few Words About Me</h2>
              <p>
                Hi there, Hope you are doing well. I am Ratul. I am a MERN stack
                web developer. I love developing web and mobile applications. I
                have more than {myExperience} years of experinece as a web
                developer. I have Designed and Developed many websites,
                applications and some super simple games.
              </p>
              <p>
                I love coding soo much and I take it as a passion. And I really
                love my passion. I have never felt frustrated or boring when I
                am coding. Coding makes me happy. I love to learn new things and
                I always try to keep my skills updated. My favourite language is
                Javascript.
              </p>
              <Link to="/about">Read More</Link>
            </div>
            <div id="AboutImage" data-aos="fade-down">
              <img src={AboutSrc} alt="Error" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ShortAbout
