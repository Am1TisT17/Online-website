import React from "react";
import "./Count.scss";

const statsData = [
  { value: "3.9k+", label: "Successfully Trained" },
  { value: "15.8k+", label: "Classes Completed" },
  { value: "97.5k+", label: "Satisfaction Rate" },
  { value: "100.2k+", label: "Students Community" },
];

export default function Count() {
  return (
    <section className="count-section">
      <div className="count-wrapper">
        {statsData.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="count-item">
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
            {index < statsData.length - 1 && <div className="divider" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}