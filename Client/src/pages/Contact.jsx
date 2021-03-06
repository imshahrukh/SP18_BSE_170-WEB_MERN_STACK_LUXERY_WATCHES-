/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */

import React from "react";
import Nav from "./components/Navigation";

function Contact(props) {
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
                  <span>Contact</span>
                </p>
                <h1 class="mb-4 bread">Contact us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="ftco-section contact-section bg-light">
        <div class="container">
          <div class="row d-flex mb-5 contact-info">
            <div class="col-md-12 mb-4">
              <h2 class="h3">Contact Information</h2>
            </div>
            <div class="w-100"></div>
            <div class="col-md-4 d-flex">
              <div class="info bg-white p-4">
                <p>
                  <span>Address:</span>
                  <br />
                  Baku, Azerbaijan
                </p>
              </div>
            </div>
            <div class="col-md-4 d-flex">
              <div class="info bg-white p-4">
                <p>
                  <span>Phone:</span>
                  <a href="tel://+99451 302 00 66">
                    <br />
                    +99451 728 55 15
                  </a>
                </p>
              </div>
            </div>
            <div class="col-md-4 d-flex">
              <div class="info bg-white p-4">
                <p>
                  <span>Email:</span>
                  <a href="mailto:tshzade@gmail.com">
                    <br /> tshzade@gmail.com
                  </a>
                </p>
              </div>
            </div>
            {/* <!-- <div class="col-md-3 d-flex">
          <div class="info bg-white p-4">
            <p><span>Website:</span> <a href="http://webworld.az/"><br>webworld.az</a></p>
          </div>
        </div> --> */}
          </div>
          <div class="row block-9">
            <div class="col-md-6 order-md-last d-flex">
              <form action="#" class="bg-white p-5 contact-form">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    class="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    class="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>

            <div class="col-md-6 d-flex">
              <div id="map" class="bg-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.271588995667!2d49.86849091524855!3d40.40283386440864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d4ee9253a65%3A0x29160f1a81905e71!2sNariman%20Narimanov!5e0!3m2!1sen!2s!4v1574691645795!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  frameborder="0"
                  style={{ border: "0" }}
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default Contact;
