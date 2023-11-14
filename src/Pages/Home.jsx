import React from 'react'
import { Link } from 'react-router-dom'
import Shop from '../Pages/Shop'
import Why from '../Pages/Why'
import Contact from '../Pages/Contact'

const Home = () => {
  return (
<>
    <section className="slider_section">
      <div className="slider_container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-7">
                    <div className="detail-box">
                      <h1>
                        To Our <br />
                        Gift Shop
                      </h1>
                      <p>
                        Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                      </p>
                      <Link href>
                        Contact Us
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-5 ">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="nice" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-7">
                    <div className="detail-box">
                      <h1>
                        Welcome To Our <br />
                        Gift Shop
                      </h1>
                      <p>
                        Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                      </p>
                      <Link href>
                        Contact Us
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-5 ">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="nice" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-7">
                    <div className="detail-box">
                      <h1>
                        Welcome To Our <br />
                        Gift Shop
                      </h1>
                      <p>
                        Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                      </p>
                      <Link href>
                        Contact Us
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-5 ">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="nice" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel_btn-box">
            <Link className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <i className="fa fa-arrow-left" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </Link>
            <img src="images/line.png" alt="nice" />
            <Link className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <i className="fa fa-arrow-right" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <Shop/>
  <section className="saving_section ">
    <div className="box">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="img-box">
              <img src="images/saving-img.png" alt="nice" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>
                  Best Savings on <br />
                  new arrivals
                </h2>
              </div>
              <p>
                Qui ex dolore at repellat, quia neque doloribus omnis adipisci, ipsum eos odio fugit ut eveniet blanditiis praesentium totam non nostrum dignissimos nihil eius facere et eaque. Qui, animi obcaecati.
              </p>
              <div className="btn-box">
                <Link href="#" className="btn1">
                  Buy Now
                </Link>
                <Link href="#" className="btn2">
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end saving section */}
  {/* why section */}
  <Why/>
  {/* end why section */}
  {/* gift section */}
  <section className="gift_section layout_padding-bottom">
    <div className="box ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="img_container">
              <div className="img-box">
                <img src="images/gifts.png" alt="nice" />
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="detail-box">
              <div className="heading_container">
                <h2>
                  Gifts for your <br />
                  loved ones
                </h2>
              </div>
              <p>
                Omnis ex nam laudantium odit illum harum, excepturi accusamus at corrupti, velit blanditiis unde perspiciatis, vitae minus culpa? Beatae at aut consequuntur porro adipisci aliquam eaque iste ducimus expedita accusantium?
              </p>
              <div className="btn-box">
                <Link href="#" className="btn1">
                  Buy Now
                </Link>
                <Link href="#" className="btn2">
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end gift section */}
  {/* contact section */}
  <Contact/>
  {/* end contact section */}
  {/* client section */}
  {/* end client section */}
</>
  )
}

export default Home