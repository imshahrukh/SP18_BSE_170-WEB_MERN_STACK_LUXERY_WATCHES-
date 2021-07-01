import React from "react";

function FeatureProducts({ data }) {
  const { name } = data;
  return (
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
            praesentium!
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureProducts;
