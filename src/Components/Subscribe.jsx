import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Subscribe = () => {
  const [data, setData] = useState()
  const GetData = (val) => {
    setData(val.target.value)
  }
  const Submit = (e) => {
    e.preventDefault()
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: ` Subscription added now you will recieve all notifications via ${data} `,
      showConfirmButton: false,
      timer: 10000,
    })
    document.querySelector('#SubscribeForm').style.display = 'none'
    document.querySelector('#SubscribeTitle').style.display = 'none'
    document.querySelector('#AfterText').style.display = 'block'
    setData('')
  }
  const Unsubscribe = () => {
    Swal.fire('Unsubscribed.')
    document.querySelector('#SubscribeForm').style.display = 'block'
    document.querySelector('#SubscribeTitle').style.display = 'block'
    document.querySelector('#AfterText').style.display = 'none'
  }
  return (
    <>
      <section id="Subscribe">
        <div id="Container">
          <div data-aos="fade-right" id="SubscribeContentWrapper">
            <h2 id="SubscribeTitle">Subscribe Me</h2>
            <h2 id="AfterText">
              Subscription Added
              <p>Thank You so Much</p>
              <button onClick={Unsubscribe}>Unsubscribe</button>
            </h2>

            <form onSubmit={Submit} id="SubscribeForm">
              <div id="InputField">
                <input
                  type="email"
                  name="_replyto"
                  onChange={GetData}
                  value={data}
                  required
                  placeholder="Enter Your Email"
                />
              </div>
              <div id="SubsButton">
                <button name="submit" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
export default Subscribe
