/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Nav from "./components/Navigation";

import { useState, useEffect } from "react";
import { readOnlyData } from "./call";
function SingleProduct(props) {
  var [data, setData] = useState("");
  const getData = async () => {
    const t = await readOnlyData(
      `http://localhost:8000/v1/watch/single/${localStorage.getItem("product")}`
    );
    setData(t.data.watch);
    console.log(data);
  };
  useEffect(() => {
    console.log("_id", localStorage.getItem("product"));
    getData();
  }, []);

  return (
    <div>
      <Nav />
      {/* <!-- END nav --> */}
      <section class="ftco-section ftco-animate">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="row">
                <div class="col-md-12">
                  <div class="exzoom" id="exzoom">
                    {/* <!-- Images --> */}
                    <div class="exzoom_img_box">
                      <ul class="exzoom_img_ul">
                        <li>
                          <img
                            src={`assests/img/${
                              data === "" ? "" : data.images[0]
                            }`}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={`assests/img/${
                              data === "" ? "" : data.images[0]
                            }`}
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src={`assests/img/${
                              data === "" ? "" : data.images[0]
                            }`}
                            alt=""
                          />
                        </li>
                      </ul>
                    </div>
                    <div class="exzoom_nav"></div>
                    {/* <!-- Nav Buttons --> */}
                  </div>
                </div>
                <div class="col-md-12 product-single mt-4 mb-5">
                  <h2 class="mb-4">
                    {data.name} <span>- Model : {data.model}</span>
                  </h2>
                  <p>{data.discription}</p>
                  <div class="d-sm-flex mt-5 mb-5">
                    <ul class="list">
                      INFORMATION
                      <li>
                        <span>BRAND:</span> {data.brand}
                      </li>
                      <li>
                        <span>SERIES:</span> {data.brand}Pz45
                      </li>
                      <li>
                        <span>MODEL:</span> {data.model}
                      </li>
                      <li>
                        <span>GENDER:</span>Men's
                      </li>
                    </ul>
                    <ul class="list ml-md-5">
                      CASE
                      <li>
                        <span>CASE SIZE:</span> {data.case_material}mm
                      </li>
                      <li>
                        <span>CASE MATERIAL:</span> {data.case_material}
                      </li>
                      <li>
                        <span>CASE SHAPE:</span> Round
                      </li>
                      <li>
                        <span>CASE THICKNESS:</span> {data.casee_thickness}mm
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- .col-md-8 --> */}
            <div class="col-lg-4 sidebar">
              <div class="sidebar-box ">
                <h3>Tags</h3>
                <div class="tagcloud">
                  {data === ""
                    ? ""
                    : data.tags.map((el, key) => (
                        <a key={key} href="#" class="tag-cloud-link">
                          {el}
                        </a>
                      ))}
                </div>
              </div>
              <div class="sidebar-box">
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "600",
                  }}
                >
                  Price: {data.price}$
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3 suggestion">
              <a href="">
                <img
                  class="d-block w-100"
                  src="assests/img/popular1.png"
                  alt=""
                />
                <h6>
                  Speedmaster Moonwatch Professional Chronograph 42 mm Men's
                  Watch
                </h6>
                <p>$4,249.00</p>
              </a>
            </div>
            <div class="col-sm-3 suggestion">
              <a href="">
                <img
                  class="d-block w-100"
                  src="assests/img/popular2.png"
                  alt=""
                />
                <h6>
                  Speedmaster Moonwatch Professional Chronograph 42 mm Men's
                  Watch
                </h6>
                <p>$4,249.00</p>
              </a>
            </div>
            <div class="col-sm-3 suggestion">
              <a href="">
                <img
                  class="d-block w-100"
                  src="assests/img/popular3.png"
                  alt=""
                />
                <h6>
                  Speedmaster Moonwatch Professional Chronograph 42 mm Men's
                  Watch
                </h6>
                <p>$4,249.00</p>
              </a>
            </div>
            <div class="col-sm-3 suggestion">
              <a href="">
                <img
                  class="d-block w-100"
                  src="assests/img/popular3.png"
                  alt=""
                />
                <h6>
                  Speedmaster Moonwatch Professional Chronograph 42 mm Men's
                  Watch
                </h6>
                <p>$4,249.00</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- .section --> */}

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
                Created with
                <i class="icon-heart color-danger" aria-hidden="true"></i> by -
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

export default SingleProduct;
