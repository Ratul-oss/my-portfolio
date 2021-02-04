import React from 'react'
import FolderOpenIcon from '@material-ui/icons/FolderOpen'
import SpData from './SpData'
import Title from './Title'
import { Link } from 'react-router-dom'

const ShortProject = () => {
  const SingleShortProject = (prop) => {
    return (
      <>
        <div
          data-aos-duration="600"
          data-aos={prop.animate}
          id="SingleShortProject"
        >
          <img src={prop.src} alt="Error" />
          <div id="SingleShortProjectDesc">
            <h2> {prop.title} </h2>
            <p> {prop.desc} </p>
            <a href={prop.link} target="_blank" rel="noopener noreferrer">
              <FolderOpenIcon
                style={{ fontSize: ' 2.5rem ', margin: '15px 0px' }}
              />
            </a>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <section id="ShortProjects">
        <Title title="My Projects" desc="Here are some of my projects." />
        <div id="ProjectContentWrapper">
          {SpData.map((data, index) => {
            return (
              <SingleShortProject
                key={index}
                src={data.src}
                title={data.title}
                desc={data.desc}
                link={data.link}
                animate={data.animate}
              />
            )
          })}
        </div>
        <div id="LinkToMainPage">
          <Link rel="noopener noreferrer" to="/project">
            And More
          </Link>
        </div>
      </section>
    </>
  )
}
export default ShortProject
