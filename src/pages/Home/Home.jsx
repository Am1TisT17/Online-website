import React from "react";
import Button from "../components/Button";
import CirclePhotoSlider from "../Home/CirclePhotoSlider";
import "./home.scss";
import "./CirclePhotoSlider.scss";
export default function Home() {
  return (
    <main>
      <div className="home-container">
        <div className="home-35">
          <div className="home-35__content">
            <h6 className="hero__tag">35% OFF</h6>
            <h6 className="hero__subtitle">LEARN FROM TODAY</h6>
          </div>
          <div className="home-edu-text">
            <h3>Education Is Create Better Future</h3>
            <p>
              Education can be thought of as the transmission of the values and
              accumulated knowledge of a society. In this sense, it is equivalent.
            </p>
          </div>
        </div>

        <div className="home-button">
          <Button>GET STARTED</Button>
        </div>
        <CirclePhotoSlider />
      </div>
    </main>
  );
}