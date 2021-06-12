/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Nav from "./components/Navigation";
function SingleProduct(props) {
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
                          <img src="assests/img/single1.jpg" alt="" />
                        </li>
                        <li>
                          <img src="assests/img/single2.jpg" alt="" />
                        </li>
                        <li>
                          <img src="assests/img/single3.jpg" alt="" />
                        </li>
                      </ul>
                    </div>
                    <div class="exzoom_nav"></div>
                    {/* <!-- Nav Buttons --> */}
                  </div>
                </div>
                <div class="col-md-12 product-single mt-4 mb-5">
                  <h2 class="mb-4">
                    DANIEL WELLINGTON <span>- Model : 1101DW</span>
                  </h2>
                  <p>
                    Daniel Wellington Dapper Sheffield White Dial Leather Strap
                    Men's Watch 1101DW. 38 mm stainless steel round case with
                    white dial and mineral crystal. Date window above the 6
                    o'clock position and logo beneath the 12 o'clock position.
                    It comprises Roman numeral markers in addition to the hour
                    and minute clock hands. Stylish chic design watch is sure to
                    turn heads, 7 mm case with push / pull crown and 19 mm wide
                    black strap including a tang clasp. Quartz movement and
                    water resistance up to 30 meters. Style: Casual watches.
                    Dapper Sheffield series.
                  </p>
                  <div class="d-sm-flex mt-5 mb-5">
                    <ul class="list">
                      INFORMATION
                      <li>
                        <span>BRAND:</span> Daniel Wellington
                      </li>
                      <li>
                        <span>SERIES:</span> Dapper Sheffield
                      </li>
                      <li>
                        <span>MODEL:</span> 1101DW
                      </li>
                      <li>
                        <span>GENDER:</span>Men's
                      </li>
                    </ul>
                    <ul class="list ml-md-5">
                      CASE
                      <li>
                        <span>CASE SIZE:</span> 38mm
                      </li>
                      <li>
                        <span>CASE MATERIAL:</span> Stainless Steel
                      </li>
                      <li>
                        <span>CASE SHAPE:</span> Round
                      </li>
                      <li>
                        <span>CASE THICKNESS:</span> 7mm
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
                  <a href="#" class="tag-cloud-link">
                    gold
                  </a>
                  <a href="#" class="tag-cloud-link">
                    fashion
                  </a>
                  <a href="#" class="tag-cloud-link">
                    male
                  </a>
                  <a href="#" class="tag-cloud-link">
                    round
                  </a>
                  <a href="#" class="tag-cloud-link">
                    35-40mm
                  </a>
                </div>
              </div>
              <div class="sidebar-box">
                <form action="#" class="search-form">
                  <div class="form-group">
                    <button class="btn btn-sidebar icon ion-ios-search"></button>
                    <input
                      type="text"
                      class="form-control sidebar-box__search"
                      placeholder="Search..."
                    />
                  </div>
                </form>
              </div>
              <div class="sidebar-box">
                <div class="categories">
                  <h3>Categories</h3>
                  <li>
                    <a href="#">Watches by Gender</a>
                  </li>
                  <li>
                    <a href="#">Watches by Shape</a>
                  </li>
                  <li>
                    <a href="#">Watches by Movement</a>
                  </li>
                  <li>
                    <a href="#">Watches by Color</a>
                  </li>
                  <li>
                    <a href="#">Gold Watches</a>
                  </li>
                </div>
                <div id="categories-none">
                  <div class="categories">
                    <li>
                      <a href="#">Unique</a>
                    </li>
                    <li>
                      <a href="#">Square</a>
                    </li>
                    <li>
                      <a href="#">Smart watches</a>
                    </li>
                    <li>
                      <a href="#">Small</a>
                    </li>
                    <li>
                      <a href="#">Silver</a>
                    </li>
                    <li>
                      <a href="#">Quartz</a>
                    </li>
                    <li>
                      <a href="#">Dive watches</a>
                    </li>
                    <li>
                      <a href="#">Smart watches</a>
                    </li>
                    <li>
                      <a href="#">Pilot</a>
                    </li>
                    <li>
                      <a href="#">Watches for nurses</a>
                    </li>
                    <li>
                      <a href="#">Luxury</a>
                    </li>
                    <li>
                      <a href="#">Dress watches</a>
                    </li>
                    <li>
                      <a href="#">Triatlon watches</a>
                    </li>
                  </div>
                </div>
                <button
                  id="toggle-vm"
                  type="button"
                  class="btn btn-vm btn-small btn-sm d-flex mx-auto mt-4"
                >
                  View More
                </button>
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
