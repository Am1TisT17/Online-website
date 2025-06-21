import React, { useState, useRef } from "react";
import "./WhatWeDo.scss";


const cards = [
    {
      title: "Learn From Anywhere",
      icon: "/src/assets/img/About/WhatWeDo/Vector(4).svg",
      iconHover: "/src/assets/img/About/WhatWeDo/Vector(5).svg",
      text: "Competently unleash competitive initiatives for alternative interfaces. Enthusiastically supply resource eveling platforms"
    },
    {
      title: "Expert Instructor",
      icon: "/src/assets/img/About/WhatWeDo/Vector(1).svg",
      iconHover: "/src/assets/img/About/WhatWeDo/Vector.svg",
      text: "Competently unleash competitive initiatives for alternative interfaces. Enthusiastically supply resource eveling platforms"
    },
    {
      title: "24/7 Live Support",
      icon: "/src/assets/img/About/WhatWeDo/Vector(2).svg",
      iconHover: "/src/assets/img/About/WhatWeDo/Vector(3).svg",
      text: "Competently unleash competitive initiatives for alternative interfaces. Enthusiastically supply resource eveling platforms"
    }
  ];


  export default function WhatWeDo() {
    return (
      <main>
        <div className="whatwedo-section">
          <div className="whatwedo-header">
            <img src="/src/assets/img/alo.svg" alt="alo1" className="alo-img"/>
            <h6>WHAT WE DO</h6>
            <h2>Online Education Tailored to You</h2>
          </div>
          <div className="whatwedo-cards">
            {cards.map((card, idx) => (
              <div className="whatwedo-card" key={idx}>
                <div className="icon-wrap">
                  <img src={card.icon} alt="icon" className="icon-default" />
                  <img src={card.iconHover} alt="icon-hover" className="icon-hover" />
                </div>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }