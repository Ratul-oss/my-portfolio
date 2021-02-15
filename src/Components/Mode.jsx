import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import FlareIcon from '@material-ui/icons/Flare'

const Mode = () => {
  const [text, settext] = useState(false)
  const [mode, setMode] = useState(false)
  const Dark = () => {
    document.querySelector('html').style.background = '#0D1117'
    document.querySelector('body').style.background = '#0D1117'
    document.querySelector('html').style.color = ' white '
    document.querySelector('body').style.color = ' white '
    setMode(!mode)
    settext(!text)
  }
  const Light = () => {
    document.querySelector('html').style.background = ' #fff '
    document.querySelector('body').style.background = ' #fff '
    document.querySelector('html').style.color = ' #000 '
    document.querySelector('body').style.color = ' #000 '
    setMode(!mode)
    settext(!text)
  }
  return (
    <>
      <section id="Mode">
        <Button
          onClick={mode ? Light : Dark}
          variant="contained"
          color="secondary"
        >
          {text ? <FlareIcon /> : <Brightness4Icon />}
        </Button>
      </section>
    </>
  )
}
export default Mode
