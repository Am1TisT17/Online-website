import React, { useState, useRef } from "react";
import Button from "../components/Button";
import "./Categories.scss";
import categorypic1 from '../../assets/img/CategoryPic1.png';
import categorypic2 from '../../assets/img/CategoryPic2.png';
import categorypic3 from '../../assets/img/CategoryPic3.png';
import categorypic4 from '../../assets/img/CategoryPic4.png';
import categorypic5 from '../../assets/img/CategoryPic5.png';
import categorypic6 from '../../assets/img/CategoryPic6.png';
import categorypic7 from '../../assets/img/CategoryPic7.png';
import lines from '../../assets/img/lineS.png';
import icon1 from '../../assets/img/icon(1).png';
import icon2 from '../../assets/img/icon(2).png';
import icon3 from '../../assets/img/icon(3).png';
import icon4 from '../../assets/img/icon(4).png';
import cinema from '../../assets/img/cinema.jpg';
import que from '../../assets/img/Que.png';

export default function Categories() {
    return(
        <main className="main">
            <div className="categories-container">
                <div className="categories-header">
                    <h6>Courses Categories</h6>
                    <h3><p>Explore Top Categories</p></h3>
                    <div className="lines-img">
                        <img src= {lines} alt="lines" />
                    </div>
                    <div className="categories-grid">
                        <div className="category-card">
                            <div className="card-icon">
                                <img src= {icon1} alt="Icon1" />
                            </div>
                            <div className="card-content">
                                <h3>Web Development</h3>
                                <p>56+ Courses</p>
                            </div>
                            <div className="card-button">
                                <Button>LEARN MORE</Button>
                            </div>
                        </div>
                        <div className="category-card">
                            <div className="card-icon">
                                <img src= {icon2} alt="Icon2" />
                            </div>
                            <div className="card-content">
                                <h3>Digital Marketing</h3>
                                <p>56+ Courses</p>
                            </div>
                            <div className="card-button">
                                <Button>LEARN MORE</Button>
                            </div>
                        </div>
                        <div className="category-card">
                            <div className="card-icon">
                                <img src= {icon3} alt="Icon3" />
                            </div>
                            <div className="card-content">
                                <h3>UI/UX Design</h3>
                                <p>56+ Courses</p>
                            </div>
                            <div className="card-button">
                                <Button>LEARN MORE</Button>
                            </div>
                        </div>
                        <div className="category-card">
                            <div className="card-icon">
                                <img src= {icon4} alt="Icon4" />
                            </div>
                            <div className="card-content">
                                <h3>Graphic Design</h3>
                                <p>56+ Courses</p>
                            </div>
                            <div className="card-button">
                                <Button>LEARN MORE</Button>
                            </div>
                        </div>
                        <div className="nav-buttons">
                            <div className="prev-button"><Button></Button></div>
                            <div className="next-button"><Button></Button></div>
                        </div>
                    </div>
                </div>
                <div className="gallery-section">
                    <div className="gallery-item">
                        <img src = {categorypic1} alt="pic1" />
                    </div>
                    <div className="gallery-item">
                        <img src = {categorypic2} alt="pic2" />
                    </div>
                    <div className="gallery-item">
                        <img src = {categorypic3} alt="pic3" />
                    </div> 
                    <div className="gallery-item">
                        <img src = {categorypic4} alt="pic4" />
                    </div>  
                    <div className="gallery-item">
                        <img src = {categorypic5} alt="pic5" />
                    </div>   
                    <div className="gallery-item">
                        <img src = {categorypic6} alt="pic6" />
                    </div>
                    <div className="gallery-item">
                        <img src = {categorypic7} alt="pic7" />
                    </div>
                    <div className="stats-counter">
                        <h2>10k +</h2>
                        <p>Students Active Our Courses</p>
                    </div>
                </div>
                <div className="about-section">
                    <div className="about-content">
                        <h6>About Our University</h6>
                        <h1><p>Welcome to Edura University.</p></h1>
                        <p>Collaboratively simplify user friendly networks after principle centered coordinate effective methods of empowerment distributed niche markets pursue market positioning web-readiness after resource sucking applications. </p>
                        <br></br>
                        <p>Online education, also known as e-learning, is a method of learning that takes place over the internet. It offers individuals the opportunity to acquire knowledge, skills.</p>
                    </div>
                    <div className="about-features">
                        <div className="cinema-img">
                            <img src= {cinema} alt="Cinema" />
                        </div>
                        <div className="features-list">
                            <ul>
                                <li><img src= {que} alt="Question Icon" /> Get access to 4,000+ of our top courses</li>
                                <li><img src= {que} alt="Question Icon" />Popular topics to learn now</li>
                                <li><img src= {que} alt="Question Icon" />Find the right instructor for you</li>
                            </ul>
                        </div>
                        <div className="about-b{que}utton">
                            <Button>ABOUT MORE</Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}