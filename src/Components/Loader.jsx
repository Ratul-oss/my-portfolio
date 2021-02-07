import React from 'react'
import LoaderImg from './img/Loader.gif'
import disableScroll from 'disable-scroll'

const Loader = () => {
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelector('#Loader').style.transform = 'translateX(120%)'
      disableScroll.off()
    })
  })
  disableScroll.on()
  return (
    <>
      <section id="Loader">
        <div id="LoaderImg">
          <img src={LoaderImg} alt="Loading..." />
          <div id="LoaderDesc">
            <h2>Loading...</h2>
          </div>
        </div>
      </section>
    </>
  )
}
export default Loader
