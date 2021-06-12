/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Nav from "./components/Navigation";

function Home(props) {
  return (
    <div>
      <Nav />
      {/* <!-- END nav --> */}
      <div class="hero">
        {/* <!-- <div class="container-wrap d-flex justify-content-end align-items-end">
			<a href="#" class="icon-video popup-vimeo d-flex justify-content-center align-items-center">
				<span class="ion-ios-play play"></span>
			</a>
		</div> --> */}
        <section class="home-slider owl-carousel">
          <div
            class="slider-item"
            style={{ backgroundImage: "url(assests/img/slider-1.jpeg)" }}
          >
            <div class="overlay"></div>
            <div class="container">
              <div class="row no-gutters slider-text align-items-center">
                <div class="col-md-8 ftco-animate">
                  <div class="text mb-5 pb-5">
                    <div class="d-flex h1">
                      <div class="ht">
                        <span class="w">W</span>atch
                      </div>
                      <div class="ht" class="tlt">
                        <span>
                          <span class="w">W</span>orld
                        </span>
                      </div>
                    </div>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="slider-item"
            style={{ backgroundImage: "url(assests/img/slider-2.jpg);" }}
          >
            <div class="overlay"></div>
            <div class="container">
              <div class="row no-gutters slider-text align-items-center">
                <div class="col-md-8 ftco-animate">
                  <div class="text mb-5 pb-5">
                    <div class="d-flex">
                      <div class="h1 ht">
                        <span class="w">W</span>atch
                      </div>
                      <div class="h1 ht" class="tlt">
                        <span>
                          <span class="w">W</span>orld
                        </span>
                      </div>
                    </div>
                    <h2>Lorem ipsum dolor &amp; sit amet consectetur.</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="popular" class="ftco-section">
        <div class="container">
          <div class="row justify-content-center mb-5 pb-3">
            <div class="col-md-7 heading-section text-center ftco-animate">
              <span class="subheading">welcome to Watch World</span>
              <h2 class="mb-4 text-capitalize">popular collection</h2>
            </div>
          </div>
          <div class="row d-flex">
            <div
              class="col-md pr-md-1 d-flex align-self-stretch ftco-animate"
              data-toggle="modal"
              data-target="#modalboxCollection1"
            >
              <div class="media block-6 services py-4 d-block text-center">
                <div class="d-flex justify-content-center">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <img src="assests/img/popular1.png" alt="" />
                  </div>
                </div>
                <div class="media-body">
                  <h3 class="heading mb-3 text-uppercase">citizen</h3>
                  <a
                    href=""
                    data-toggle="modal"
                    data-target="#modalboxCollection1"
                  >
                    <span>See the collection</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-md px-md-1 d-flex align-self-stretch ftco-animate"
              data-toggle="modal"
              data-target="#modalboxCollection2"
            >
              <div class="media block-6 services active py-4 d-block text-center">
                <div class="d-flex justify-content-center">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <img src="assests/img/popular2.png" alt="" />
                  </div>
                </div>
                <div class="media-body">
                  <h3 class="heading mb-3 text-uppercase">hamilton</h3>
                  <a
                    href=""
                    data-toggle="modal"
                    data-target="#modalboxCollection2"
                  >
                    <span>See the collection</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-md px-md-1 d-flex align-sel Searchf-stretch ftco-animate"
              data-toggle="modal"
              data-target="#modalboxCollection3"
            >
              <div class="media block-6 services py-4 d-block text-center">
                <div class="d-flex justify-content-center">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <img src="assests/img/popular3.png" alt="" />
                  </div>
                </div>
                <div class="media-body">
                  <h3 class="heading mb-3 text-uppercase">omega</h3>
                  <a
                    href=""
                    data-toggle="modal"
                    data-target="#modalboxCollection3"
                  >
                    <span>See the collection</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-md px-md-1 d-flex align-self-stretch ftco-animate"
              data-toggle="modal"
              data-target="#modalboxCollection4"
            >
              <div class="media block-6 services active py-4 d-block text-center">
                <div class="d-flex justify-content-center">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <img src="assests/img/popular4.png" alt="" />
                  </div>
                </div>
                <div class="media-body">
                  <h3 class="heading mb-3 text-uppercase">tissot</h3>
                  <a
                    href=""
                    data-toggle="modal"
                    data-target="#modalboxCollection4"
                  >
                    <span>See the collection</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--COllection Modal 1 --> */}
      <div
        class="modal fade modalbox"
        id="modalboxCollection1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalboxTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <img
                class="popup-image"
                src="assests/img/popular1.png"
                alt="popup-image"
              />
              <div class=" modal-title" id="modalboxTitle">
                <div class="popup-image-text">
                  <div class="modal-menu-price">$22</div>
                </div>
              </div>
              <button
                type="button"
                class=" close-button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p class="text-muted">450g</p>
              <hr />
              <p class="modal-category-text font-weight-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                repellat debitis ipsam nostrum, magni et?
              </p>
              <hr />
              <i class="fas fa-pepper-hot d-inline-block text-muted"></i>
              <h1 class="modal-spicy text-uppercase d-inline-block font-weight-bold">
                reviews
              </h1>
              <div class="spicy-level mb-3">
                <div class="level text-center font-weight-bold">4/5</div>
              </div>
              <i class="fas fa-utensils d-inline-block text-muted"></i>
              <h1 class="modal-nutritions text-uppercase d-inline-block font-weight-bold">
                details
              </h1>
              <div class="row">
                <div class="col">
                  <p class="text-muted nutritions-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora, consectetur!
                  </p>
                </div>
                <div class="col">
                  <p class="text-muted nutritions-text">
                    18kt White Gold 100%
                    <br />
                    Diamond 100% <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--COllection Modal 2 --> */}
      <div
        class="modal fade modalbox"
        id="modalboxCollection2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalboxTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <img
                class="popup-image"
                src="assests/img/popular2.png"
                alt="popup-image"
              />
              <div class="modal-title" id="modalboxTitle">
                <div class="popup-image-text">
                  <span class="modal-menu-price">$22</span>
                </div>
              </div>
              <button
                type="button"
                class=" close-button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p class="text-muted">450g</p>
              <hr />
              <p class="modal-category-text font-weight-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                repellat debitis ipsam nostrum, magni et?
              </p>
              <hr />
              <i class="fas fa-pepper-hot d-inline-block text-muted"></i>
              <h1 class="modal-spicy text-uppercase d-inline-block font-weight-bold">
                reviews
              </h1>
              <div class="spicy-level mb-3">
                <div class="level text-center font-weight-bold">4/5</div>
              </div>
              <i class="fas fa-utensils d-inline-block text-muted"></i>
              <h1 class="modal-nutritions text-uppercase d-inline-block font-weight-bold">
                details
              </h1>
              <div class="row">
                <div class="col">
                  <p class="text-muted nutritions-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora, consectetur!
                  </p>
                </div>
                <div class="col">
                  <p class="text-muted nutritions-text">
                    18kt White Gold 100%
                    <br />
                    Diamond 100% <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--COllection Modal 3 --> */}
      <div
        class="modal fade modalbox"
        id="modalboxCollection3"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalboxTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <img
                class="popup-image"
                src="assests/img/popular3.png"
                alt="popup-image"
              />
              <div class="modal-title" id="modalboxTitle">
                <div class="popup-image-text">
                  <span class="modal-menu-price">$22</span>
                </div>
              </div>
              <button
                type="button"
                class=" close-button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p class="text-muted">450g</p>
              <hr />
              <p class="modal-category-text font-weight-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                repellat debitis ipsam nostrum, magni et?
              </p>
              <hr />
              <i class="fas fa-pepper-hot d-inline-block text-muted"></i>
              <h1 class="modal-spicy text-uppercase d-inline-block font-weight-bold">
                reviews
              </h1>
              <div class="spicy-level mb-3">
                <div class="level text-center font-weight-bold">4/5</div>
              </div>
              <i class="fas fa-utensils d-inline-block text-muted"></i>
              <h1 class="modal-nutritions text-uppercase d-inline-block font-weight-bold">
                details
              </h1>
              <div class="row">
                <div class="col">
                  <p class="text-muted nutritions-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora, consectetur!
                  </p>
                </div>
                <div class="col">
                  <p class="text-muted nutritions-text">
                    18kt White Gold 100%
                    <br />
                    Diamond 100% <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--COllection Modal 4 --> */}
      <div
        class="modal fade modalbox"
        id="modalboxCollection4"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalboxTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <img
                class="popup-image"
                src="assests/img/popular4.png"
                alt="popup-image"
              />
              <div class="modal-title" id="modalboxTitle">
                <div class="popup-image-text">
                  <span class="modal-menu-price">$22</span>
                </div>
              </div>
              <button
                type="button"
                class=" close-button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p class="text-muted">450g</p>
              <hr />
              <p class="modal-category-text font-weight-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                repellat debitis ipsam nostrum, magni et?
              </p>
              <hr />
              <i class="fas fa-pepper-hot d-inline-block text-muted"></i>
              <h1 class="modal-spicy text-uppercase d-inline-block font-weight-bold">
                reviews
              </h1>
              <div class="spicy-level mb-3">
                <div class="level text-center font-weight-bold">4/5</div>
              </div>
              <i class="fas fa-utensils d-inline-block text-muted"></i>
              <h1 class="modal-nutritions text-uppercase d-inline-block font-weight-bold">
                details
              </h1>
              <div class="row">
                <div class="col">
                  <p class="text-muted nutritions-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora, consectetur!
                  </p>
                </div>
                <div class="col">
                  <p class="text-muted nutritions-text">
                    18kt White Gold 100%
                    <br />
                    Diamond 100% <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- NEW ARRIVAL  --> */}
      <section id="new-arrival" class="ftco-section bg-light ftco-room">
        <div class="container px-0">
          <div class="row no-gutters justify-content-center align-content-center mb-5 pb-3">
            <div class="col-md-7 heading-section text-center ftco-animate">
              <span class="subheading">Watch World products</span>
              <h2 class="mb-4 text-capitalize">new arrival</h2>
            </div>
          </div>
          <div class="row no-gutters">
            <div class="col-lg-6">
              <div class="room-wrap h-100">
                <div
                  class="img h-100 d-flex align-items-center"
                  style={{
                    backgroundImage: "url(assests/img/slider-2.jpg)",
                    backgroundPosition: "center",
                  }}
                >
                  <div class="text text-center p-4">
                    <h2 class="font-weight-bold">
                      {" "}
                      <a href="index.html">Watch World </a>
                    </h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Asperiores iure nemo, alias quod minus numquam?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="room-wrap d-md-flex">
                <div
                  class="img"
                  style={{ backgroundImage: "url(assests/img/new4.jpeg)" }}
                ></div>
                <div class="half left-arrow top-arrow d-flex align-items-center">
                  <div class="text p-4 p-xl-5 text-center">
                    <p class="mb-0">
                      <span class="price mr-1">$120.00</span>
                    </p>
                    <h3 class="mb-3">Lorem Ipsum</h3>
                    <p class="pt-1">
                      <a
                        href="product-single.html"
                        class="btn-custom px-3 py-2"
                      >
                        View Details
                        <span class="icon-long-arrow-right"></span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="room-wrap d-md-flex">
                <div
                  class="img order-md-last"
                  style={{ backgroundImage: "url(assests/img/new4.jpeg)" }}
                ></div>
                <div class="half right-arrow top-arrow d-flex align-items-center">
                  <div class="text p-4 p-xl-5 text-center">
                    <p class="mb-0">
                      <span class="price mr-1">$120.00</span>
                    </p>
                    <h3 class="mb-3">Lorem Ipsum</h3>
                    <p class="pt-1">
                      <a
                        href="product-single.html"
                        class="btn-custom px-3 py-2"
                      >
                        View Details
                        <span class="icon-long-arrow-right"></span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="room-wrap d-md-flex">
                <div
                  class="img order-md-last"
                  style={{ backgroundImage: "url(assests/img/new4.jpeg)" }}
                ></div>
                <div class="half right-arrow top-arrow d-flex align-items-center">
                  <div class="text p-4 p-xl-5 text-center">
                    <p class="mb-0">
                      <span class="price mr-1">$130.00</span>
                    </p>
                    <h3 class="mb-3">Lorem Ipsum</h3>
                    <p class="pt-1">
                      <a
                        href="product-single.html"
                        class="btn-custom px-3 py-2"
                      >
                        View Details
                        <span class="icon-long-arrow-right"></span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="room-wrap d-md-flex">
                <div
                  class="img"
                  style={{ backgroundImage: "url(assests/img/new4.jpeg)" }}
                ></div>
                <div class="half left-arrow top-arrow d-flex align-items-center">
                  <div class="text p-4 p-xl-5 text-center">
                    <p class="mb-0">
                      <span class="price mr-1">$140.00</span>
                    </p>
                    <h3 class="mb-3">Lorem Ipsum</h3>
                    <p class="pt-1">
                      <a
                        href="product-single.html"
                        class="btn-custom px-3 py-2"
                      >
                        View Details
                        <span class="icon-long-arrow-right"></span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="room-wrap d-md-flex">
                <div
                  class="img"
                  style={{ backgroundImage: "url(assests/img/new4.jpeg)" }}
                ></div>
                <div class="half left-arrow top-arrow d-flex align-items-center">
                  <div class="text p-4 p-xl-5 text-center">
                    <p class="mb-0">
                      <span class="price mr-1">$120.00</span>
                    </p>
                    <h3 class="mb-3">Lorem Ipsum</h3>
                    <p class="pt-1">
                      <a
                        href="product-single.html"
                        class="btn-custom px-3 py-2"
                      >
                        View Details
                        <span class="icon-long-arrow-right"></span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- FEATURED PRODUCTS  --> */}
      <section
        id="product"
        class="ftco-section ftco-menu w-100"
        style={{ backgroundImage: "url(assests/img/gallery1.jpg)" }}
      >
        <div class="container">
          <div class="row justify-content-center mb-5 pb-3">
            <div class="col-md-7 heading-section text-center ftco-animate">
              <span class="subheading">Watch World</span>
              <h2>Featured Products</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="pricing-entry d-flex ftco-animate">
                <div
                  class="img order-md-last"
                  style={{
                    backgroundImage: "url(assests/img/gallery1.jpg)",
                  }}
                ></div>
                <div class="desc pr-3 text-md-right">
                  <div class="d-md-flex text align-items-center">
                    <h3 class="order-md-last heading-left">
                      <span>Pearl Neckles</span>
                    </h3>
                    <span class="price price-left">$20.00</span>
                  </div>
                  <div class="d-block desc__text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ratione, praesentium!
                    </p>
                  </div>
                </div>
              </div>
              <div class="pricing-entry d-flex ftco-animate">
                <div
                  class="img order-md-last"
                  style={{
                    backgroundImage: "url(assests/img/gallery1.jpg)",
                  }}
                ></div>
                <div class="desc pr-3 text-md-right">
                  <div class="d-md-flex text align-items-center">
                    <h3 class="order-md-last heading-left">
                      <span>Pearl Neckles</span>
                    </h3>
                    <span class="price price-left">$29.00</span>
                  </div>
                  <div class="d-block desc__text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ratione, praesentium!
                    </p>
                  </div>
                </div>
              </div>
              <div class="pricing-entry d-flex ftco-animate">
                <div
                  class="img order-md-last"
                  style={{
                    backgroundImage: "url(assests/img/gallery1.jpg)",
                  }}
                ></div>
                <div class="desc pr-3 text-md-right">
                  <div class="d-md-flex text align-items-center">
                    <h3 class="order-md-last heading-left">
                      <span>Pearl Neckles</span>
                    </h3>
                    <span class="price price-left">$20.00</span>
                  </div>
                  <div class="d-block desc__text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ratione, praesentium!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="pricing-entry d-flex ftco-animate">
                <div
                  class="img"
                  style={{
                    backgroundImage: "url(assests/img/gallery1.jpg)",
                  }}
                ></div>
                <div class="desc pl-3">
                  <div class="d-md-flex text align-items-center">
                    <h3>
                      <span>Pearl Neckles</span>
                    </h3>
                    <span class="price">$20.00</span>
                  </div>
                  <div class="d-block desc__text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ratione, praesentium!
                    </p>
                  </div>
                </div>
              </div>
              <div class="pricing-entry d-flex ftco-animate">
                <div
                  class="img"
                  style={{
                    backgroundImage: "url(assests/img/gallery1.jpg)",
                  }}
                ></div>
                <div class="desc pl-3">
                  <div class="d-md-flex text align-items-center">
                    <h3>
                      <span>Pearl Neckles</span>
                    </h3>
                    <span class="price">$20.00</span>
                  </div>
                  <div class="d-block desc__text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ratione, praesentium!
                    </p>
                  </div>
                </div>
              </div>
              <div class="pricing-entry d-flex ftco-animate">
                <div
                  class="img"
                  style={{
                    backgroundImage: "url(assests/img/gallery1.jpg)",
                  }}
                ></div>
                <div class="desc pl-3">
                  <div class="d-md-flex text align-items-center">
                    <h3>
                      <span>Pearl Neckles</span>
                    </h3>
                    <span class="price">$20.00</span>
                  </div>
                  <div class="d-block desc__text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ratione, praesentium!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END FEATURED PRODUCTS -->

	<!-- HAVE A Question?  --> */}
      <div
        class="parallax-window parallax"
        data-parallax="scroll"
        data-z-index="1"
        data-image-src="assests/img/gallery4.jpeg"
      >
        <div class="row w-100 parallax-inner d-block d-sm-flex justify-content-sm-center">
          <div class="col-12 parallax-content d-flex flex-column align-items-center flex-sm-row justify-content-sm-around">
            <h1 class="text-white p-4 m-0">Have a Question?</h1>
            <form
              action="#"
              class="p-4 contact-form d-flex align-items-center flex-column flex-md-row"
            >
              <div class="form-group pb-2 pr-md-2 pb-md-0">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div class="form-group pt-2 pl-md-2 pt-md-0">
                <input
                  type="submit"
                  value="Send Message"
                  class="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- END HAVE A Question? -->

	<!-- TESTIMONIAL  --> */}
      <section id="testimonial" class="ftco-section testimony-section bg-light">
        <div class="container">
          <div class="row justify-content-center mb-5 pb-3">
            <div class="col-md-7 heading-section text-center ftco-animate">
              <span class="subheading">Testimony</span>
              <h2 class="mb-4">What people are saying !</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-8 ftco-animate">
              <div class="row ftco-animate">
                <div class="col-md-12">
                  <div class="carousel-testimony owl-carousel ftco-owl">
                    <div class="item">
                      <div class="testimony-wrap py-4 pb-5">
                        <div
                          class="user-img mb-4"
                          style={{
                            backgroundImage: "url(assests/img/person_1.jpg)",
                          }}
                        ></div>
                        <div class="text text-center">
                          <p class="name">John Ake</p>
                          <span class="position">Custumer</span>
                          <p class="star">
                            <span class="ion-ios-star"></span>
                            <span class="ion-ios-star"></span>
                            <span class="ion-ios-star"></span>
                            <span class="ion-ios-star"></span>
                            <span class="ion-ios-star"></span>
                          </p>
                          <p class="mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Pariatur ad, voluptatum ex praesentium
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="testimony-wrap py-4 pb-5">
                        <div
                          class="user-img mb-4"
                          style={{
                            backgroundImage: "url(assests/img/person_2.jpg)",
                          }}
                        ></div>
                        <div class="text text-center">
                          <p class="name">John Ake</p>
                          <span class="position">Custumer</span>
                          <p class="star">
                            <span class="ion-ios-star"></span>
                            <span class="ion-ios-star"></span>
                            <span class="ion-ios-star"></span>
                            <span class="ion-ios-star"></span>
                            <span class="ion-ios-star"></span>
                          </p>
                          <p class="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptas autem nemo nam, officia maiores culpa
                            odio fugiat explicabo ipsam cupiditate doloribus
                            quaerat, aliquam impedit mollitia.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="testimony-wrap py-4 pb-5">
                        <div
                          class="user-img mb-4"
                          style={{
                            backgroundImage: "url(assests/img/person_3.jpg)",
                          }}
                        ></div>
                        <div class="text text-center">
                          <p class="name">John Ake</p>
                          <span class="position">Custumer</span>
                          <p class="star">
                            <span class="ion-ios-star"></span>
                            <span class="ion-ios-star"></span>
                            <span class="ion-ios-star"></span>
                            <span class="ion-ios-star"></span>
                            <span class="ion-ios-star"></span>
                          </p>
                          <p class="mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellendus ad doloribus quae a.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="testimony-wrap py-4 pb-5">
                        <div
                          class="user-img mb-4"
                          style={{
                            backgroundImage: "url(assests/img/person_4.jpg)",
                          }}
                        ></div>
                        <div class="text text-center">
                          <p class="name">John Ake</p>
                          <span class="position">Custumer</span>
                          <p class="star">
                            <span class="ion-ios-star"></span>
                            <span class="ion-ios-star"></span>
                            <span class="ion-ios-star"></span>
                            <span class="ion-ios-star"></span>
                            <span class="ion-ios-star"></span>
                          </p>
                          <p class="mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aut iste a, quae suscipit nostrum debitis
                            numquam quisquam saepe
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END TESTIMONIAL -->

	<!-- INSTAGRAM IMAGES  --> */}
      <section class="instagram">
        <div class="container-fluid">
          <div class="row no-gutters justify-content-center pb-5">
            <div class="col-md-7 text-center heading-section ftco-animate">
              <span class="subheading">Photos</span>
              <h2>
                <span>Images</span>
              </h2>
            </div>
          </div>
          <div class="row no-gutters">
            <div class="col-sm-12 col-md ftco-animate">
              <a
                href="assests/img/new1.jpeg"
                class="insta-img image-popup"
                style={{ backgroundImage: "url(assests/img/new1.jpeg)" }}
              >
                <div class="icon d-flex justify-content-center">
                  <span class="icon-zoom_in align-self-center"></span>
                </div>
              </a>
            </div>
            <div class="col-sm-12 col-md ftco-animate">
              <a
                href="assests/img/new2.jpeg"
                class="insta-img image-popup"
                style={{ backgroundImage: "url(assests/img/new2.jpeg)" }}
              >
                <div class="icon d-flex justify-content-center">
                  <span class="icon-zoom_in align-self-center"></span>
                </div>
              </a>
            </div>
            <div class="col-sm-12 col-md ftco-animate">
              <a
                href="assests/img/new3.jpeg"
                class="insta-img image-popup"
                style={{ backgroundImage: "url(assests/img/new3.jpeg)" }}
              >
                <div class="icon d-flex justify-content-center">
                  <span class="icon-zoom_in align-self-center"></span>
                </div>
              </a>
            </div>
            <div class="col-sm-12 col-md ftco-animate">
              <a
                href="assests/img/new4.jpeg"
                class="insta-img image-popup"
                style={{ backgroundImage: "url(assests/img/new4.jpeg)" }}
              >
                <div class="icon d-flex justify-content-center">
                  <span class="icon-zoom_in align-self-center"></span>
                </div>
              </a>
            </div>
            <div class="col-sm-12 col-md ftco-animate">
              <a
                href="assests/img/new5.jpeg"
                class="insta-img image-popup"
                style={{ backgroundImage: " url(assests/img/new5.jpeg)" }}
              >
                <div class="icon d-flex justify-content-center">
                  <span class="icon-zoom_in align-self-center"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end INSTAGRAM IMAGES  --> */}

      <footer class="ftco-footer ftco-bg-dark ftco-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">Watch World </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis recusandae natus placeat velit consequatur cumque?
                </p>
              </div>
            </div>
            <div class="col-md">
              <div class="ftco-footer-widget mb-4 ml-md-5">
                <h2 class="ftco-heading-2">Useful Links</h2>
                <ul class="list-unstyled">
                  <li>
                    <a href="#popular" class="py-2 d-block">
                      Popular Collection
                    </a>
                  </li>
                  <li>
                    <a href="#new-arrival" class="py-2 d-block">
                      New Arrival
                    </a>
                  </li>
                  <li>
                    <a href="#product" class="py-2 d-block">
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="#testimonial" class="py-2 d-block">
                      Testimonial
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">Have a Questions?</h2>
                <div class="block-23 mb-3">
                  <ul class="ftco-footer__contact">
                    <li>
                      <span class="icon icon-map-marker"></span>
                      <span class="text">Baku, Azerbaijan</span>
                    </li>
                    <li>
                      <span class="icon icon-phone"></span>
                      <span class="text">+99451 728 55 15</span>
                    </li>
                    <li>
                      <span class="icon icon-envelope"></span>
                      <span class="text">tshzade@gmail.com</span>
                    </li>
                  </ul>
                  <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-0">
                    <li class="ftco-animate">
                      <a href="https://www.facebook.com/webworld.az/">
                        <span class="icon-facebook"></span>
                      </a>
                    </li>
                    <li class="ftco-animate">
                      <a href="https://www.instagram.com/webworld.az/">
                        <span class="icon-instagram"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script>{" "}
                Created with{" "}
                <i class="icon-heart color-danger" aria-hidden="true"></i> by -{" "}
                <a href="contact.html">
                  <u>Tahmasib Shirinzadeh</u>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <a href="#top" id="back-to-top">
        <i class="icon-long-arrow-up"></i>
      </a>

      {/* <!-- loader --> */}
      <div id="ftco-loader" class="show fullscreen">
        <svg class="circular" width="48px" height="48px">
          <circle
            class="path-bg"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke-width="4"
            stroke="#eeeeee"
          />
          <circle
            class="path"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke-width="4"
            stroke-miterlimit="10"
            stroke="#1fb6d1"
          />
        </svg>
      </div>
    </div>
  );
}

export default Home;
