import React, { useState, useEffect } from 'react'
import SkillData from './SkillData'
import Title from './Title'
import Footer from './Footer'
import { CallMerge } from '@material-ui/icons'

const Skills = () => {
  const [data, setData] = useState()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = ' DevR - Skills '
  }, [])
  const Filter = (val) => {
    setData(val.target.value)
  }
  let frontEnd = SkillData.filter((data) => {
    return data.class === 'front-end'
  })
  let backEnd = SkillData.filter((data) => {
    return data.class === 'back-end'
  })
  let dataBase = SkillData.filter((data) => {
    return data.class === 'data-base'
  })
  let essential = SkillData.filter((data) => {
    return data.class === 'essential'
  })
  const SingleSkill = (prop) => {
    return (
      <>
        <div data-aos="fade-left" id="SingleSkillsInPage">
          <div id="SkllImg">
            <img src={prop.src} alt="Error" />
          </div>
          <div id="SkillDesc">
            <h2> {prop.title} </h2>
            <p> {prop.desc} </p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <section id="SkillsPage">
        <div id="Container">
          <Title title="My Skills" desc="My Skills and tools." />
          <div id="Filter">
            <select onChange={Filter}>
              <option disabled selected>
                Filter Skills
              </option>
              <option value="default">Default</option>
              <option value="front-end">Front-End Skills</option>
              <option value="back-end">Back End Skills</option>
              <option value="data-base">Data Base Skills</option>
              <option value="essential">Essential Skills</option>
            </select>
          </div>
          <div id="SkillPageContentWrapper">
            {data === 'front-end'
              ? frontEnd.map((data, index) => {
                  return (
                    <SingleSkill
                      key={index}
                      title={data.title}
                      desc={data.desc}
                      src={data.src}
                    />
                  )
                })
              : data === 'back-end'
              ? backEnd.map((data, index) => {
                  return (
                    <SingleSkill
                      key={index}
                      title={data.title}
                      desc={data.desc}
                      src={data.src}
                    />
                  )
                })
              : data === 'data-base'
              ? dataBase.map((data, index) => {
                  return (
                    <SingleSkill
                      key={index}
                      title={data.title}
                      desc={data.desc}
                      src={data.src}
                    />
                  )
                })
              : data === 'essential'
              ? essential.map((data, index) => {
                  return (
                    <SingleSkill
                      key={index}
                      title={data.title}
                      desc={data.desc}
                      src={data.src}
                    />
                  )
                })
              : SkillData.map((data, index) => {
                  return (
                    <SingleSkill
                      key={index}
                      title={data.title}
                      desc={data.desc}
                      src={data.src}
                    />
                  )
                })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Skills
