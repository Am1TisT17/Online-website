import alo from '../../assets/img/alo.svg';
import './AreYouReady.scss'

const AreYouReady = () => {
  const stats = [
    { number: '3.9k+', label: ['Successfully', 'Trained'] },
    { number: '15.8k+', label: ['Classes', 'Completed'] },
    { number: '97.5k+', label: ['Satisfaction', 'Rate'] },
    { number: '100.2k+', label: ['Students', 'Community'] },
  ];

  return (
    <section className="are-ready-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h2>{stat.number}</h2>
            <p>
              {stat.label[0]} <span>{stat.label[1]}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="offer-container">
        <img src={alo} alt="alo1" className="alo-img"/>
        <h6 className="offer-label">ARE YOU READY FOR THIS OFFER</h6>
        <h1 className="offer-title">
          40% Offer First <span>100 Student's</span> For Featured
        </h1>
        <h2 className="offer-subtitle">Topics by Education Category</h2>
        <p className="offer-description">
          Get unlimited access to 6,000+ of Udemy's top courses for your team. Learn and improve skills across
          business, tec, design, and more.
        </p>
        <div className="buttons-wrapper">
          <button className="join-button">JOIN WITH US →</button>
          <button className="teacher-button">BECOME A TEACHER →</button>
        </div>
      </div>
    </section>
  );
};

export default AreYouReady;