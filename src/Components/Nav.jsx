import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Mode from './Mode'
import Button from '@material-ui/core/Button'
import disableScroll from 'disable-scroll'

const Nav = () => {
  const [icon, setIcon] = useState(false)
  const [open, setClose] = useState(false)
  function Nav() {
    document.querySelector('#NavLinks').style.transform = 'translateX(0)'
    disableScroll.on()
    setClose(!open)
    setIcon(!icon)
  }
  function NavClose() {
    document.querySelector('#NavLinks').style.transform = 'translateX(100%)'
    disableScroll.off()
    setClose(!open)
    setIcon(!icon)
  }
  return (
    <>
      <nav data-aos="fade-in">
        {/* <div id="Container"> */}
        <div id="NavContentWrapper">
          <h2 id="NavTitle">
            <Link to="/">DevR</Link>
          </h2>
          <ul id="NavLinks">
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
          <div id="Bar">
            <Button
              id="NavButton"
              variant="outlined"
              color="primary"
              onClick={open ? NavClose : Nav}
            >
              {icon ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </Button>
          </div>
        </div>
        {/* </div> */}
      </nav>
    </>
  )
}
export default Nav
