import React from 'react'
import Error from './img/Error.png'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
      <section id="Error">
        <div id="Container">
          <div id="ContentWrapper">
            <div id="ErrorImg">
              <img src={Error} alt="Error" />
            </div>
            <h2>404 not found</h2>
            <div id="LinkToMainPage">
              <Link to="/" exact>
                Go To Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ErrorPage
