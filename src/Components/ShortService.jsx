import React from 'react'
import SsData from './SsData'
import Title from './Title'
import { Link } from 'react-router-dom'

export const SingleShortService = (prop) => {
  return (
    <div data-aos-duration="500" data-aos="fade-right" id="SingleShortService">
      <div id="ServiceImage">
        <img src={prop.imgSrc} alt="Error" />
      </div>
      <div id="ServiceShortDesc">
        <h2> {prop.mainTitle} </h2>
        <p> {prop.mainDesc} </p>
      </div>
    </div>
  )
}
const ShortService = () => {
  return (
    <>
      <section id="ShortService">
        <div id="Container">
          <Title
            title="My Services"
            desc="Here Are Some of my Services which I provide"
          />
          <div id="ShortServiceContentWrapper">
            {SsData.map((data, index) => {
              return (
                <SingleShortService
                  key={index}
                  mainDesc={data.desc}
                  mainTitle={data.title}
                  imgSrc={data.src}
                />
              )
            })}
          </div>
          <div id="LinkToMainPage">
            <Link to="/service">And More</Link>
          </div>
        </div>
      </section>
    </>
  )
}
export default ShortService
