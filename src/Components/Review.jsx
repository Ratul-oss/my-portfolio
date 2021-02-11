import React from 'react'
import RData from './RData'
import Title from './Title'
import { Link } from 'react-router-dom'
import Stars from './img/stars.png'

const Review = () => {
  const SingleReview = (prop) => {
    return (
      <>
        <div id="SingleReview" data-aos={prop.animation}>
          <div id="ReviewImage">
            <img src={prop.src} alt="Error" />
          </div>
          <div id="ReviewRank">
            <img src={Stars} alt="5 Stars" />
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
            desc="Here are some great people's review with whom I have worked before."
          />
          <div id="ReviewContentWrapper">
            {RData.map((data, index) => {
              return (
                <SingleReview
                  animation={data.animation}
                  key={index}
                  src={data.src}
                  title={data.title}
                  desc={data.desc}
                />
              )
            })}
          </div>
          <div id="LinkToMainPage">
            <Link id="LinkToMainPage" to="/contact">
              Contact Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
export default Review
