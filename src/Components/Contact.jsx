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
  const TakeData = (val) => {
    const { name, value } = val.target
    setData((preValue) => {
      return { ...preValue, [name]: value }
    })
  }
  const ShowData = (e) => {
    e.preventDefault()
    if (
      data.message.includes('I need') ||
      data.message.includes('I am looking') ||
      data.message.includes('Make me') ||
      data.message.includes('pay me') ||
      data.message.includes('Pay me') ||
      data.message.includes('I need a website') ||
      data.message.includes('I want') ||
      data.message.includes('can you') ||
      data.message.includes('Can you')
    ) {
      Swal.fire(
        'Wrong',
        `Don't give me proposal from here. Check out my Fiverr or Facebook. This message will not be sent.`,
        'error',
      )
      document.querySelector('#outputmessage').style.display = 'block'
      document.querySelector('#outputmessage').style.background =
        'rgba(255, 0, 0, 0.808)'
      document.querySelector('#outputmessage').style.color = 'orange'
    } else if (data.message.includes('?')) {
      Swal.fire('Wrong', `Don't Ask me questions here.`, 'error')
      document.querySelector('#outputmessage').style.background =
        'rgba(255, 0, 0, 0.808)'
      document.querySelector('#outputmessage').style.color = 'orange'
    } else {
      Swal.fire('Sent', `Thanks ${data.yourName} for the feedback.`, 'success')
      document.querySelector('#outputmessage').style.display = 'block'
      document.querySelector('#outputmessage').style.background = 'greenyellow'
      document.querySelector('#outputmessage').style.color = 'green'
    }
  }
  document.title = 'DevR - Feedback'

  return (
    <>
      <section id="Contact">
        <div id="Container">
          <Title
            title="Feedback"
            desc="How was your user experience! Don't ask any personal question and don't give me any proposal here."
          />
          <div data-aos="fade-left" id="ContactContentWrapper">
            <form onSubmit={ShowData} autoComplete="off" method="get">
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
                  type="email"
                  placeholder="Your Email..."
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
          <div
            style={{
              background: ' rgba(44, 187, 0, 0.685)',
              color: 'rgba(0, 128, 85, 0.925)',
            }}
            id="outputmessage"
          >
            <h2> Your Name : {`${data.yourName}`} </h2>
            <h2> Your Email : {`${data.email}`} </h2>
            <h2> Your Subject : {`${data.subject}`}</h2>
            <h2> Your Message : {`${data.message}`}</h2>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default Contact