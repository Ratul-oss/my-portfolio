import React from 'react'
import RData from './RData'
import Title from './Title'
import Fb from './img/Fb.png'
import Fiverr from './img/Fiverr.png'

const Review = () => {
  const SingleReview = (prop) => {
    return (
      <>
        <div id="SingleReview">
          <div id="ReviewImage">
            <img src={prop.src} alt="Error" />
          </div>
          <div id="ReviewDesc">
            <h2> {prop.title} </h2>
            <p> {prop.desc} </p>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <section id="Review">
        <div id="Container">
          <Title
            title="Custom reviews"
            desc="Here are some great people's review with whom I have worked before. Hold Shift and then scroll to explore reviews."
          />
          <div id="ReviewContentWrapper">
            {RData.map((data, index) => {
              return (
                <SingleReview
                  key={index}
                  src={data.src}
                  title={data.title}
                  desc={data.desc}
                />
              )
            })}
          </div>
          <div id="ReviewContact">
            <div id="SingleContact">
              <a
                href="https://www.facebook.com/minhazurrahaman.ratul/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Fb} alt="Error" />
              </a>
            </div>
            <div id="SingleContact">
              <a
                href="https://www.fiverr.com/developer_azam?up_rollout=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Fiverr} alt="Error" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Review
