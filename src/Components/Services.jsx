import React from 'react'
import ServiceData from './ServiceData'
import Title from './Title'
import Footer from './Footer'
// import Swal from 'sweetalert2'
// import SwalImg from './img/WebDesign.png'

const Services = () => {
  document.title = ' DevR - Services '
  // Swal.fire({
  //   title: 'Welcome to Services',
  //   text: 'Reload This Page to have a better experience.',
  //   imageUrl: SwalImg,
  //   imageWidth: 400,
  //   imageHeight: 200,
  //   imageAlt: 'Custom image',
  // })
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
      <Footer />
    </>
  )
}
export default Services
