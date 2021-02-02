import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import CloseIcon from '@material-ui/icons/Close'

const HomeMenu = () => {
  const [open, setOpen] = useState(false)
  const [icon, setIcon] = useState(false)
  const ShowMenu = () => {
    document.querySelector('#HomeMenu').style.display = 'block'
    setOpen(!open)
    setIcon(!icon)
  }
  const HideMenu = () => {
    document.querySelector('#HomeMenu').style.display = 'none'
    setOpen(!open)
    setIcon(!icon)
  }
  return (
    <>
      <div id="HomeMe">
        <Button
          variant="contained"
          color="secondary"
          onClick={open ? HideMenu : ShowMenu}
        >
          {icon ? (
            <CloseIcon style={{ fontSize: '2rem' }} />
          ) : (
            <MenuOpenIcon style={{ fontSize: '2rem' }} />
          )}
        </Button>
        <ul id="HomeMenu">
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#ShortProjects">Projects</a>
          </li>
          <li>
            <a href="#ShortSkill">Skills</a>
          </li>
          <li>
            <a href="#ShortService">Services</a>
          </li>
          <li>
            <a href="#Review">Reviews</a>
          </li>
          <li>
            <a href="#Subscribe">Subscribe</a>
          </li>
          <li>
            <a href="#Blog">Blog</a>
          </li>
          <li>
            <a href="#Footer">Contact</a>
          </li>
        </ul>
      </div>
    </>
  )
}
export default HomeMenu
