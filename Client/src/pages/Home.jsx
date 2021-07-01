/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Nav from "./components/Navigation";
import Cart from "./components/Cart";
import { getData_GET } from "./call";
import PopularCard from "./components/PopularCard";
import FeatureProducts from "./components/FeatureProducts";
import { readOnlyData } from "./call";
// import { useState } from "react";

function Home(props) {
  const [cart, setCart] = useState(0);
  const [watches, setWatches] = useState([]);
  let [size, setSize] = useState(0);

  const getWatchesData = async () => {
    let data = await getData_GET("http://localhost:8000/v1/watch");
    data = data.data.watch;
    data = data.slice(0, 4);
    setWatches(data);
  };
  const fetchcartData = async () => {
    const url = "http://localhost:8000/v1/cart/1";

    const data = await readOnlyData(url);
    setSize(data.size);
  };

  useEffect(() => {
    getWatchesData();
    fetchcartData();
  }, []);
  return (
    <div>
      {cart === 1 ? <Cart /> : null}
      <Nav showCart={setCart} size={size} cart={cart} />
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
                  <h3 class="heading mb-3 text-uppercase">
                    {watches.length === 0 ? "" : watches[0].name}
                  </h3>
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
                  <h3 class="heading mb-3 text-uppercase">
                    {watches.length === 0 ? "" : watches[1].name}
                  </h3>
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
                  <h3 class="heading mb-3 text-uppercase">
                    {watches.length === 0 ? "" : watches[2].name}
                  </h3>
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
                  <h3 class="heading mb-3 text-uppercase">
                    {watches.length === 0 ? "" : watches[3].name}
                  </h3>
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
      {/* COLLECTION START */}

      {/* <!--COllection Modal 1 --> */}
      <div
        class="modal fade modalbox"
        id="modalboxCollection1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalboxTitle"
        aria-hidden="true"
      >
        {watches.length === 0 ? (
          ""
        ) : (
          <PopularCard index={0} data={watches[0]} />
        )}
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
        {watches.length === 0 ? (
          ""
        ) : (
          <PopularCard index={1} data={watches[1]} />
        )}
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
        {watches.length === 0 ? (
          ""
        ) : (
          <PopularCard index={2} data={watches[2]} />
        )}
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
        {watches.length === 0 ? (
          ""
        ) : (
          <PopularCard index={3} data={watches[3]} />
        )}
      </div>

      {/* COLLECTION END */}

      {/* <!-- FEATURED PRODUCTS  --> */}
      {/* <section
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
              {watches.length === 0 ? (
                ""
              ) : (
                <div>
                  <FeatureProducts data={watches[0]} />
                  <FeatureProducts data={watches[1]} />
                  <FeatureProducts data={watches[2]} />
                </div>
              )}

            </div>

            <div class="col-md-6">
              {watches.length === 0 ? (
                ""
              ) : (
                <div>
                  <FeatureProducts data={watches[0]} />
                  <FeatureProducts data={watches[1]} />
                  <FeatureProducts data={watches[2]} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section> */}
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

      {/* <!-- END TESTIMONIAL -->

	<!-- INSTAGRAM IMAGES  --> */}

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
