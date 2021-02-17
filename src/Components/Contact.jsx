import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import Title from './Title'
import Footer from './Footer'
import Button from '@material-ui/core/Button'

const Contact = () => {
  const [data, setData] = useState({
    yourName: '',
    _replyto: '',
    subject: '',
    message: '',
  })
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'DevR - Contact'
  }, [])
  const TakeData = (val) => {
    const { name, value } = val.target
    setData((preValue) => {
      return { ...preValue, [name]: value }
    })
  }
  const ShowData = () => {
    Swal.fire('Sent', `Thanks ${data.yourName} for Sending.`, 'success')
  }

  return (
    <>
      <section id="Contact">
        <div id="Container">
          <Title
            title="Contact Me"
            desc="Write anything here. I will reply you as soon as possible"
          />
          <div data-aos="fade-left" id="ContactContentWrapper">
            <form
              onSubmit={ShowData}
              action="https://formspree.io/f/xpzonqpb"
              method="POST"
            >
              <div id="InputFields">
                <input
                  onChange={TakeData}
                  required
                  type="text"
                  placeholder="Your Name..."
                  name="yourName"
                  value={data.yourName}
                />
              </div>
              <div id="InputFields">
                <input
                  onChange={TakeData}
                  placeholder="Your Email..."
                  type="email"
                  name="_replyto"
                  value={data.email}
                />
              </div>
              <div required id="InputFields">
                <input
                  onChange={TakeData}
                  required
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={data.subject}
                />
              </div>
              <div id="InputFields">
                <textarea
                  onChange={TakeData}
                  type="text"
                  required
                  cols="30"
                  rows="6"
                  placeholder="Your Message.."
                  name="message"
                  value={data.message}
                ></textarea>
              </div>
              <div id="InputFields">
                <Button variant="contained" color="secondary" type="submit">
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default Contact
