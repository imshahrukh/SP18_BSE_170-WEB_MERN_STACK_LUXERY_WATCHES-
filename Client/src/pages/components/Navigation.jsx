/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { readOnlyData } from "./../call";
function Navigation({ showCart, cart, size }) {
  const navigate = useNavigate();

  return (
    <nav
      class="navbar navbar-expand-lg ftco_navbar ftco-navbar-light"
      id="ftco-navbar top"
    >
      <div class="container">
        <a href="index.html" class="navbar-brand">
          <span>W</span>atch<span>W</span>orld
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="oi oi-menu"></span> Menu
        </button>
        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item cta">
              <a
                onClick={() => {
                  navigate("/home");
                }}
                class="nav-link"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                onClick={() => {
                  navigate("/gallery");
                }}
                class="nav-link"
              >
                Gallery
              </a>
            </li>
            <li class="nav-item">
              <a
                onClick={() => {
                  navigate("/search");
                }}
                class="nav-link"
              >
                Search
              </a>
            </li>
            <li class="nav-item">
              <a
                onClick={() => {
                  navigate("/aboutme");
                }}
                class="nav-link"
              >
                About
              </a>
            </li>
            <li class="nav-item">
              <a
                onClick={() => {
                  navigate("/contact");
                }}
                class="nav-link"
              >
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a
                onClick={() => {
                  if (cart === 0) {
                    showCart(1);
                  } else {
                    showCart(0);
                  }
                }}
                class="nav-link par"
              >
                <div class="cartNumber">{size}</div> Cart
              </a>
            </li>
            <li class="nav-item">
              <a
                onClick={() => {
                  navigate("/login");
                }}
                class="nav-link"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
