import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
    <section className="info_section  layout_padding2-top">
      <div className="social_container">
        <div className="social_box">
          <Link href>
            <i className="fa fa-facebook" aria-hidden="true" />
          </Link>
          <Link href>
            <i className="fa fa-twitter" aria-hidden="true" />
          </Link>
          <Link href>
            <i className="fa fa-instagram" aria-hidden="true" />
          </Link>
          <Link href>
            <i className="fa fa-youtube" aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="info_container ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <h6>
                ABOUT US
              </h6>
              <p>
              Curating quality products, prioritizing customer satisfaction, and fostering community – join us for a seamless, secure shopping experience at webnewtech.
              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="info_form ">
                <h5>
                  Newsletter
                </h5>
                <form action="#">
                  <input type="email" placeholder="Enter your email" />
                  <button>
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6>
              <Link style={{color:"white"}} to="testimonial">
               Testimonial
              </Link>
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6>
                CONTACT US
              </h6>
              <div className="info_link-box">
                <Link href>
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  <span> Noida </span>
                </Link>
                <Link href>
                  <i className="fa fa-phone" aria-hidden="true" />
                  <span>+91 8287752265</span>
                </Link>
                <Link href>
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <span> contact@jawil.online</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer section */}
      <footer className=" footer_section">
        <div className="container">
          <p>
            © <span id="displayYear" /> All Rights Reserved By
            <Link href="https://webnewtech.com/">Free Html Templates</Link>
          </p>
        </div>
      </footer>
      {/* footer section */}
    </section>
    </div>
  )
}

export default Footer