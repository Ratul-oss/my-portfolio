import React, { useState } from 'react'
import Swal from 'sweetalert2'
import Title from './Title'
import Footer from './Footer'

const Contact = () => {
  const [data, setData] = useState({
    yourName: '',
    email: '',
    subject: '',
    message: '',
  })
  window.scrollTo(0, 0)
  const TakeData = (val) => {
    const { name, value } = val.target
    setData((preValue) => {
      return { ...preValue, [name]: value }
    })
  }
  const ShowData = () => {
    Swal.fire('Sent', `Thanks ${data.yourName} for the feedback.`, 'success')
  }
  document.title = 'DevR - Contact'

  return (
    <>
      <section id="Contact">
        <div id="Container">
          <Title
            title="Contact Me"
            desc="Write anything here. Please don't spam. I will reply you as soon as possible"
          />
          <div data-aos="fade-left" id="ContactContentWrapper">
            <form
              name="contact"
              data-netlify="true"
              action="POST"
              // onSubmit={ShowData}
              // action="https://formspree.io/f/xpzonqpb"
              // method="POST"
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
                  name="email"
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
                <button type="submit">Send</button>
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
