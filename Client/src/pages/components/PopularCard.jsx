/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function PopularCard({ data, index }) {
  const { images, name, price, weight, case_material, case_size } = data;
  // console.log(data);
  // console.log(images[parseInt(key)]);
  return (
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <img
            class="popup-image"
            src={`assests/img/${images[parseInt(index)]}`}
            alt="popup-image"
          />
          <div class=" modal-title" id="modalboxTitle">
            <div class="popup-image-text">
              <div class="modal-menu-price">${price}</div>
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
          <p class="text-muted">{weight}g</p>
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
            <div class="text-center font-weight-bold">{index}/5</div>
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
                {case_size}kt
                <br />
                {case_material} 100% <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularCard;
