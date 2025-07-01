import React from "react";
import instructors from "../InstructorPage/InstructorPage.js";
import "./InstructorBio.scss";

function QuickContactForm() {
  return (
    <div className="quick-contact-block">
      <h3 className="quick-contact-title">Quick Contact</h3>
      <div className="quick-contact-sub">Feel free to contact us through Twitter or Facebook if you prefer!</div>
      <form className="quick-contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="text" placeholder="Subjects" />
        <input type="text" placeholder="Phone Number" />
        <textarea placeholder="Write Message..."></textarea>
        <button type="submit">SEND MESSAGE →</button>
      </form>
    </div>
  );
}

export function InstructorBio({ id }) {
  const bio = instructors.find((b) => String(b.id) === String(id));
  if (!bio) return <div>Biography not found</div>;

  return (
    <div className="bio-outer">
      <div className="bio-main">
        <div className="bio-left">
          <div className="bio-section">
            <h3>Biography</h3>
            <div className="bio-text">
              {bio.biography.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="bio-stats">
              {bio.stats.map((stat, idx) => (
                <div className="bio-stat-card" key={idx}>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="edu-section">
            <h3>Education Qualification</h3>
            <div className="edu-text">{bio.educationText}</div>
            <ul className="edu-list">
              {bio.education.map((edu, idx) => (
                <li key={idx}><span role="img" aria-label="cap">🎓</span> {edu}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bio-right">
          <QuickContactForm />
        </div>
      </div>
    </div>
  );
}

export default InstructorBio;
