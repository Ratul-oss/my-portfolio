import React from 'react'
import Footer from './Footer'
import AboutPageImg from './img/AboutPage.png'
import AboutWevDev from './img/AboutWebDev.png'
import WebDes from './img/AboutWebDes.png'
import ResDes from './img/AboutResDes.png'
import BugFix from './img/AboutBugFix.png'
// import Swal from 'sweetalert2'
// import SwalImg from './img/WebDesign.png'

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
  document.title = ' DevR - About '
  // Swal.fire({
  //   title: 'Welcome to About',
  //   text: 'Reload This Page to have a better experience.',
  //   imageUrl: SwalImg,
  //   imageWidth: 400,
  //   imageHeight: 200,
  //   imageAlt: 'Custom image',
  // })

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
                  Hi there, Whatt is up! I am Ratul. I am a MERN stack Web
                  developer. I will Design and Develop your websites and web
                  applications. Which will be super fast compatible and
                  responsive in every type of devices. Bugs will never seen your
                  website. I really love that work so I never feel bored when
                  doing my projects.
                </p>
                <p>
                  I have more than 1 years experinece as a Front-End Engineer. I
                  have Designed and Developed many websites, applications and
                  some super simple games. I have also a nice experience in web
                  development. I use ReactJs to build the UI of websites. Which
                  is very light and fast. I use sass, Css, Bootstrap and some
                  other designing techs like Figma to design your website. Which
                  will make your website resposnsive and compatible in every
                  type of devices.
                </p>
                <p>
                  My Coding is w3validated, seo optimised and also hand coded.
                  My Designs are simple fresh and Clean. My Coding is also bug
                  free. I also work flexibly with the clients to fulfil their
                  designing and development needs. Morever, I am aware of the
                  projects deadline. I always try with my best to complete the
                  projects in time. I am fluent in english which is very
                  important for our communication. So if you are interested,
                  please contact me to discuss further.
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
