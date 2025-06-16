import Button from "../components/Button";
import alo from '../../assets/img/alo.svg';

export default function AreYouReady(){
    return(
        <main>
            <div className="areyouready-container">
                <div className="areyouready-stats">
                    <div className="stat stat-trained">
                        <h1>3.9k+</h1>
                        <h3>Successfully Trained</h3>
                    </div>
                    <div className="stat stat-classes">
                        <h1>15.8k+</h1>
                        <h3>Classes Completed</h3>
                    </div>
                    <div className="stat stat-satisfaction">
                        <h1>97.5k+</h1>
                        <h3>Satisfaction Rate</h3>
                    </div>
                    <div className="stat stat-community">
                        <h1>100.2k+</h1>
                        <h3>Students Community</h3>
                    </div>
                </div>
                <div className="areyouready-content">
                    <img src={alo} alt="Decoration" className="alo-icon" />
                    <h6>Are You Ready For This Offer</h6>
                    <h2>40% Offer First 100 Student’s For Featured</h2>
                    <h2>Topics by Education Category</h2>
                    <p>Get unlimited access to 6,000+ of Udemy’s top courses for your team. Learn and improve skills across
                    business, tec, design, and more.</p>
                    <button className="why-button">JOIN WITH US</button>
                    <button className="why-button">BECOME A TEACHER</button>
                </div>
            </div>
        </main>
    )
}