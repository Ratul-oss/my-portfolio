import React from 'react'
import LocaderImg from './img/favicon.ico'
import disableScroll from 'disable-scroll'

const Loader = () => {
  setTimeout(() => {
    document.querySelector('#Loader').style.transform = 'translateX(-100%)'
  }, 5000)
  return (
    <>
      <section id="Loader">
        <div id="Container">
          <div id="LoaderContentWarpper">
            <div id="LoaderContent">
              <h2>Welcome To my website</h2>
              <h2>
                Try to use the shortcut's
                <br />
                <kbd>ctrl + m - Dark Mode</kbd>
                <kbd>shift + e - Exit</kbd>
              </h2>

              <div id="LoaderImg">
                <img src={LocaderImg} alt="Error" />
              </div>
              <h2 id="LoaderName">DevR</h2>
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Loader
