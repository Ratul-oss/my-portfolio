import React from 'react'
import { Link } from 'react-router-dom'
import AboutSrc from './img/About.png'

const ShortAbout = () => {
  return (
    <>
      <section id="About">
        <div id="Container">
          <div id="AboutCOntentWrapper">
            <div id="AboutDesc" data-aos="fade-up">
              <h2>Few Words About Me</h2>
              <p>
                Hi there, Whatt is up! I am Ratul. I am a MERN stack Web
                developer. I will Design and Develop your websites and web
                applications. Which will be super fast compatible and responsive
                in every type of devices.
              </p>
              <p>
                I have more than 1 years experinece as a Front-End Engineer. I
                have Designed and Developed many websites, applications and some
                super simple games.
              </p>
              <p>
                My Coding is w3validated, seo optimised and also hand coded. My
                Designs are simple fresh and Clean. My Coding is also bug free.
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
