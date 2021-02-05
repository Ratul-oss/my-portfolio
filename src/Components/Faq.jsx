import React from 'react'
import FaqImg from './img/Faq.png'
import Title from './Title'

const Faq = () => {
  const currentYear = new Date().getFullYear()
  const myExperience = currentYear - 2020
  return (
    <>
      <section id="Faq">
        <div id="Container">
          <Title title="FAQ" desc="Frequently asked questions" />
          <div id="FaqContentWrapper">
            <div id="FaqImg" data-aos="fade-right">
              <img src={FaqImg} alt="Error" />
            </div>
            <div id="FaqContent">
              <div id="SingleFaq" data-aos="fade-right">
                <details>
                  <p>
                    I have more than {myExperience} years experience as a web
                    developer
                  </p>
                  <summary>How much experience do I have?</summary>
                </details>
              </div>

              <div id="SingleFaq" data-aos="fade-left">
                <details>
                  <p>
                    Yes. Your website will be reponsive in every type of devices
                    as well as monitors.
                  </p>
                  <summary>Can I make your website responsive?</summary>
                </details>
              </div>

              <div id="SingleFaq" data-aos="fade-right">
                <details>
                  <p>Yes. I can</p>
                  <summary>Can you fix some bugs in my site?</summary>
                </details>
              </div>

              <div id="SingleFaq" data-aos="fade-left">
                <details>
                  <p>Per page will take a day.</p>
                  <summary>
                    How long will it take for my website to be created?
                  </summary>
                </details>
              </div>

              <div id="SingleFaq" data-aos="fade-right">
                <details>
                  <p>
                    You will have a chance to customise anything of the the
                    website without cost under 30day after the project is
                    completed.
                  </p>
                  <summary>
                    What will you offer me after my website is created?
                  </summary>
                </details>
              </div>

              {/* end */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Faq
