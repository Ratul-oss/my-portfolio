import React from 'react'
import EjectTwoToneIcon from '@material-ui/icons/EjectTwoTone'

const Top = () => {
  return (
    <>
      <div id="Top">
        <a
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <EjectTwoToneIcon style={{ fontSize: '2rem' }} />
        </a>
      </div>
    </>
  )
}
export default Top
