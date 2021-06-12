/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Nav from "./components/Navigation";
function AboutMe(props) {
  return (
    <div>
      <Nav />
      {/* <!-- END nav --> */}
      <div
        class="hero-wrap"
        style={{ backgroundImage: "url('assests/img/bg.jpg')" }}
      >
        <div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text d-flex align-items-end justify-content-center">
            <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
              <div class="text">
                <p class="breadcrumbs mb-2">
                  <span class="mr-2">
                    <a href="index.html">Home</a>
                  </span>
                  <span>About</span>
                </p>
                <h1 class="mb-4 bread">About us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="ftco-section ftc-no-pb ftc-no-pt">
        <div class="container">
          <div class="row">
            <div
              class="col-md-5 p-md-5 img img-2 img-3 d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(assests/img/gallery7.jpeg)" }}
            >
              <a
                href=""
                class="icon popup-vimeo d-flex justify-content-center align-items-center"
              >
                <span class="icon-play"></span>
              </a>
            </div>
            <div class="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
              <div class="heading-section heading-section-wo-line pt-md-5 mb-5">
                <div class="ml-md-0">
                  <span class="subheading">Welcome to Watchworld</span>
                  <h2 class="mb-4 text-capitalize">who we are</h2>
                </div>
              </div>
              <div class="pb-md-5">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                  fuga quidem dolore molestiae! Quos enim, illo maxime commodi
                  expedita sunt tenetur asperiores ipsum nemo id!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  accusantium, facere quas ipsa fugiat blanditiis! Sit
                  perspiciatis quod corporis suscipit, delectus facilis magni
                  alias dolor, possimus unde autem doloremque commodi.
                </p>
                <ul class="ftco-social d-flex">
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
      </section>

      <section class="ftco-section ftco-no-pt ftco-no-pb px-0">
        <div class="container-fluid px-0">
          <div class="row no-gutters justify-content-end">
            <div class="col-md-12">
              {/* <!-- background video  --> */}
              <div
                id="home"
                class="video-hero"
                style={{
                  height: "800px",
                  backgroundImage: "url(assests/img/slider-2.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <a
                  class="player"
                  data-property="{videoURL:'https://www.youtube.com/watch?v=yXyu7rqlpvs',containment:'#home', showControls:true,useOnMobile: true, autoPlay:true, loop:true, mute:true, realfullscreen: true, startAt:27,stopAt:53,  opacity:1, quality:'default'}"
                ></a>
                <div class="container">
                  <div class="row justify-content-start d-flex align-items-end height-text ">
                    <div class="col-md-8">
                      <div class="text">
                        <h1>Watch World</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- TESTIMONIAL  --> */}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END TESTIMONIAL --> */}

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
                </div>
              </div>
            </div>
            <div class="col-md my-auto">
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
            stroke="#F96D00"
          />
        </svg>
      </div>
    </div>
  );
}

export default AboutMe;
