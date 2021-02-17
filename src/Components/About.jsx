import React, { useEffect } from 'react'
import Footer from './Footer'
import AboutPageImg from './img/AboutPage.png'
import AboutWevDev from './img/AboutWebDev.png'
import WebDes from './img/AboutWebDes.png'
import ResDes from './img/AboutResDes.png'
import BugFix from './img/AboutBugFix.png'

const AboutImg = () => {
  return (
    <>
      <div id="AboutPageImage" data-aos="fade-in">
        <img src={AboutPageImg} alt="Error" />
      </div>
    </>
  )
}
const About = () => {
  useEffect(() => {
    document.title = ' DevR - About '
    window.scrollTo(0, 0)
  }, [])
  const year = new Date().getFullYear()
  const myExperience = year - 2020
  const myAge = year - 2005
  return (
    <>
      <section id="AboutPage">
        <div id="Container">
          <div id="AboutPageContentWrapper">
            <AboutImg />
            <div id="AboutPageDesc">
              <div id="Desc" data-aos="fade-right">
                <h2>About Me</h2>
                <p>
                  Hi there, Hope you are doing well. I am Ratul. I am a MERN
                  stack web developer. I love developing web and mobile
                  applications. I have more than {myExperience} years of
                  experinece as a web developer. I have Designed and Developed
                  many websites, applications and some super simple games. I am
                  pretty much comfortable doing these things. My coding is
                  w3validated, bug free and SEO optimised.
                </p>
                <p>
                  I am a young guy. I am {myAge} years old. I have been coding
                  since the end of 2019. I have a nice experience in Javascript.
                  I really love Javascript. I have a pretty much nice skill on
                  React Js. Most of my projects are done with React Js. I am
                  also good in NodeJs, MongoDB, express, Sass, Redux and More.
                </p>
                <p>
                  I can make nice designs. Which will be responsive and pixel
                  perfect. I can make useful functionalities which will be bug
                  free and user friendly. I use all the modern, trending and
                  powerful technologies for building projects. Which makes the
                  application more faster and user friendly. And My designs are
                  compatible in every type of browsers. Cause I use sass instead
                  of writing only css. So hire me to create something which you
                  are gonna be proud of!
                </p>
              </div>
              <div data-aos="fade-left" id="AboutTable">
                <table border="0">
                  <tbody>
                    <tr>
                      <th>
                        <img draggable="false" src={AboutWevDev} alt="Error" />
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <img draggable="false" src={WebDes} alt="Error" />
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <img draggable="false" src={ResDes} alt="Error" />
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <img draggable="false" src={BugFix} alt="Error" />
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default About
// export { AboutImg }
