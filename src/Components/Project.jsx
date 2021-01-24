import React from 'react'
// import LinkRoundedIcon from '@material-ui/icons/LinkRounded'
import ProjectData from './ProjectData'
import Title from './Title'
import Footer from './Footer'
import GitHubIcon from '@material-ui/icons/GitHub'
// import Swal from 'sweetalert2'
// import SwalImg from './img/WebDesign.png'

const Project = () => {
  // Swal.fire({
  //   title: 'Welcome to Projects',
  //   text: 'Reload This Page to have a better experience.',
  //   imageUrl: SwalImg,
  //   imageWidth: 400,
  //   imageHeight: 200,
  //   imageAlt: 'Custom image',
  // })
  const SingleProject = (prop) => {
    return (
      <>
        <div data-aos-duration="600" data-aos={prop.animate} id="SingleProject">
          <img src={prop.src} alt="Error" />
          <div id="ProjectDesc">
            <h2> {prop.title} </h2>
            <p> {prop.desc} </p>
            <a href={prop.link} target="_blank" rel="noopener noreferrer">
              <GitHubIcon style={{ fontSize: ' 3rem ' }} />
            </a>
          </div>
        </div>
      </>
    )
  }
  document.title = ' DevR - Projects '
  return (
    <>
      <section id="Projects">
        <Title
          title="My Projects"
          desc="Here are all the projects which I have completed."
        />
        <div id="ProjectContentWrapper">
          {ProjectData.map((data, index) => {
            return (
              <SingleProject
                key={index}
                title={data.title}
                desc={data.desc}
                link={data.link}
                src={data.src}
                animate={data.animate}
              />
            )
          })}
        </div>
        <div id="LinkToMainPage">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.github.com/ratul-oss"
          >
            Explore More
          </a>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default Project
