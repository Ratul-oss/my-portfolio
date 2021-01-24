import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <section id="Footer">
        <div id="Container">
          <div className="custom-shape-divider-top-1610786056">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div data-aos="fade-in" id="FooterContentWrapper">
            <div data-aos="fade-right" id="FooterSingleCotent">
              <h2>Contact Me</h2>
              <ol>
                <li>
                  <a
                    href="http://www.github.com/ratul-oss"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackblitz.com/@Ratul-oss"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="far fa-folder"></i> StackBlitz
                  </a>
                </li>
                <li>
                  <a
                    href="https://dev.to/ratuloss"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-dev"></i> Dev
                  </a>
                </li>
                <li>
                  <a
                    href="https://repl.it/@MRRatul"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-replyd"></i> Repl.It
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackoverflow.com/users/14715506/developer-ratul"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-stack-overflow"></i> Stack Overflow
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.fiverr.com/users/developer_azam/seller_dashboard?afp=&cxd_token=168021_9056637&show_join=true&utm_campaign=&utm_medium=cx_affiliate&utm_source=168021"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-hand-holding-usd"></i> Fiverr
                  </a>
                </li>
              </ol>
            </div>
            <div data-aos="fade-up" id="FooterSingleCotent">
              <h2>Copyrights</h2>
              <ol>
                <li>
                  <a
                    href="http://www.pexels.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-fan"></i> Images by - Pexels
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.icons8.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-fan"></i> Illustrations by - Icons8
                  </a>
                </li>
                <li>
                  <a
                    href="http://fonts.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-fan"></i> Fonts by - Google
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.github.com/ratul-oss"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-fan"></i> Developed by - MR Ratul
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.github.com/ratul-oss"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-fan"></i> Designed by - MR Ratul
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.github.com/ratul-oss"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-fan"></i> Content by - MR Ratul
                  </a>
                </li>
              </ol>
            </div>
            <div id="FooterSingleCotent" data-aos="fade-left">
              <h2>Browse Projects</h2>
              <ol>
                <li>
                  <a
                    href="https://github.com/Ratul-oss/Freeelance-Portfolio-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-code-branch"></i> Freelance - Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Ratul-oss/Freelance-Streaming-Website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-code-branch"></i> Freelance - Website
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Ratul-oss/Simple-React-UI"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-code-branch"></i> React - Construction
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Ratul-oss/my-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-code-branch"></i> Visit-My-Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Ratul-oss/Rock-Paper-Scissors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-code-branch"></i> RPS - Game
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Ratul-oss/React-Keep-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-code-branch"></i> Keep App
                  </a>
                </li>
              </ol>
            </div>
            <div id="ShareButtons">
              <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
                <a className="a2a_dd" href="https://www.addtoany.com/share"></a>
                <a className="a2a_button_facebook"></a>
                <a className="a2a_button_twitter"></a>
                <a className="a2a_button_email"></a>
                <a className="a2a_button_pinterest"></a>
                <a className="a2a_button_reddit"></a>
                <a className="a2a_button_telegram"></a>
                <a className="a2a_button_linkedin"></a>
                <a className="a2a_button_whatsapp"></a>
                <a className="a2a_button_google_gmail"></a>
                <a className="a2a_button_facebook_messenger"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>Copyright &copy; @ DevR - {year} - All rights</footer>
    </>
  )
}
export default Footer
