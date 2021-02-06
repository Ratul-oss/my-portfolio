import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Mode from './Mode'
import Logo from './img/favicon.ico'

const Nav = () => {
  const Navfunc = () => {
    document.querySelector('#NavLink').classList.toggle('nav-active')
    document.querySelector('#Burger').classList.toggle('toogle')
  }
  // nav()
  return (
    <>
      <nav data-aos="fade-in">
        {/* <div id="Container"> */}
        <div id="NavContentWrapper">
          <h2 id="NavTitle">
            <Link to="/">DevR</Link>
          </h2>
          <ul id="NavLink">
            <li>
              <img src={Logo} alt="Logo" />
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/service">
                Service
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/project">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/skill">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <Mode />
            </li>
          </ul>
          <div onClick={Navfunc} id="Burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
        </div>
        {/* </div> */}
      </nav>
    </>
  )
}
export default Nav
