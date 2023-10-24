import React from "react";
import PopUp from "./PopUp";
import { useState } from "react";
import { Button } from "react-bootstrap";

function BannerTop() {
  const [showPopUpSize, setShowPopUpSize] = useState(true);

  const handleButtonClick = () => {
    console.log("Button clicked");
    setShowPopUpSize((prevState) => !prevState);
    console.log(showPopUpSize);
  };

  return (
    <>
      <section class="banner_top" role="banner">
        <div class="text">
          <h1>
            Elevate your <span>sports </span>
            experience
          </h1>
          <Button variant="primary" onClick={() => handleButtonClick()}>Shop Now</Button>
          {/* <a
            class="btn"
            onClick={() => {
              handleButtonClick();
            }}
          >
            Shop now
          </a> */}
          {showPopUpSize && <PopUp />}
        </div>
      </section>
      
    </>
  );
}

export default BannerTop;
