import React from "react";
import Nav from "./components/Navigation";

function Gallery(props) {
  return (
    <body>
      <Nav />
      <div
        class="hero-wrap"
        style={{ backgroundImage: "url(assests/img/bg.jpg)" }}
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
                  <span>Gallery</span>
                </p>
                <h1 class="mb-4 bread">Gallery</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="gallery-wrapper pt-5">
        <div class="box"></div>
        <div class="box box-large"></div>
        <div class="box box-medium"></div>
        <div class="box box-large"></div>
        <div class="box box-full"></div>
        <div class="box box-medium"></div>
        <div class="box box-large"></div>
        <div class="box"></div>
        <div class="box box-medium"></div>
        <div class="box box-large"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box box-medium"></div>
        <div class="box box-large"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box box-large"></div>
        <div class="box box-medium"></div>
        <div class="box box-large"></div>
        <div class="box box-full"></div>
        <div class="box box-medium"></div>
        <div class="box box-large"></div>
        <div class="box"></div>
        <div class="box box-medium"></div>
        <div class="box box-large"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box box-medium"></div>
        <div class="box box-large"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>

      <section class="instagram">
        <div class="container-fluid">
          <div class="row no-gutters justify-content-center py-5">
            <div class="col-md-7 text-center heading-section ftco-animate">
              <span class="subheading">Photos</span>
              <h2>
                <span>Instagram</span>
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
                style={{ backgroundImage: "url(assests/img/new5.jpeg)" }}
              >
                <div class="icon d-flex justify-content-center">
                  <span class="icon-zoom_in align-self-center"></span>
                </div>
              </a>
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
    </body>
  );
}

export default Gallery;
