import React from 'react'
import EjectTwoToneIcon from '@material-ui/icons/EjectTwoTone'
import Button from '@material-ui/core/Button'

const Top = () => {
  return (
    <>
      <div id="Top">
        <Button
          variant="outlined"
          color="secondary"
          style={{ padding: '10px 1px', borderWidth: '2px' }}
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <EjectTwoToneIcon style={{ fontSize: '1.7rem' }} />
        </Button>
      </div>
    </>
  )
}
export default Top
