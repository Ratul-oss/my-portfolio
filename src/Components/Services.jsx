import React from 'react'
import ServiceData from './ServiceData'
import Title from './Title'
import Footer from './Footer'
import Faq from './Faq'

const Services = () => {
  document.title = ' DevR - Services '
  window.scrollTo(0, 0)
  const SingleService = (prop) => {
    return (
      <div id="SingleService" data-aos="fade-right">
        <div id="ServiceImage">
          <img src={prop.src} alt="Error" />
        </div>
        <div id="ServiceDesc">
          <h2> {prop.title} </h2>
          <p> {prop.desc} </p>
        </div>
      </div>
    )
  }
  return (
    <>
      <section id="Service">
        <div id="Container">
          <Title
            title="My Services"
            desc="Here are all the services which I provide"
          />
          <div id="ServiceContentWrapper">
            {ServiceData.map((data, index) => {
              return (
                <SingleService
                  key={index}
                  src={data.src}
                  title={data.title}
                  desc={data.desc}
                />
              )
            })}
          </div>
        </div>
      </section>
      <Faq />
      <Footer />
    </>
  )
}
export default Services
