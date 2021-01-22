import React from 'react'
import { Link } from 'react-router-dom'
import SskData from './SskData'
import Title from './Title'

const ShortSkill = () => {
  const SingleShortSkill = (prop) => {
    return (
      <>
        <div data-aos-duration="400" data-aos="flip-left" id="SingleSkill">
          <div id="SingleSkillContentWrapper">
            <img src={prop.src} alt="Error" />
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <section id="ShortSkill">
        <div id="Container">
          <Title title="My Tools" desc="These are my skills and tools" />
          <div id="SkillContentWrappper">
            {SskData.map((data, index) => {
              return <SingleShortSkill key={index} src={data.src} />
            })}
          </div>
          <div id="LinkToMainPage">
            <Link to="/skill" rel="noopener noreferrer">
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
export default ShortSkill
