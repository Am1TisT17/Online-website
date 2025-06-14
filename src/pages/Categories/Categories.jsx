import React, { useState, useRef } from "react";
import Button from "../components/Button";
import "./Categories.scss";
import categorypic1 from '../../assets/img/CategoryPic1.png';
import categorypic2 from '../../assets/img/CategoryPic2.png';
import categorypic3 from '../../assets/img/CategoryPic3.png';
import categorypic7 from '../../assets/img/CategoryPic7.png';
import lines from '../../assets/img/lineS.png';
import icon1 from '../../assets/img/icon(1).svg';
import icon2 from '../../assets/img/icon(2).svg';
import icon3 from '../../assets/img/icon(3).svg';
import icon4 from '../../assets/img/icon(4).svg';
import cinema from '../../assets/img/cinema.jpg';
import que from '../../assets/img/Que.png';

export default function Categories() {
    return(
        <main className="main">
            <div className="categories-container">
                <div className="categories-header">
                    <div className="header-content">
                        <h6>Courses Categories</h6>
                        <h3><p>Explore Top Categories</p></h3>
                    </div>
                    <div className="lines-img">
                        <img src= {lines} alt="lines" />
                    </div>
                    <div className="categories-grid">
                        <div className="category-card">
                            <div className="circle-background"></div>
                            <img src={icon1} alt="Icon1" />
                            <div className="card-content">
                                <h3>Web Development</h3>
                                <p>56+ Courses</p>
                            </div>
                            <button className="my-button">LERAN MORE</button>
                        </div>
                        <div className="category-card">
                            <div className="circle-background"></div>
                            <img src={icon2} alt="Icon2" />
                            <div className="card-content">
                                <h3>Digital Marketing</h3>
                                <p>56+ Courses</p>
                            </div>
                            <button className="my-button">LERAN MORE</button>
                        </div>
                        <div className="category-card">
                            <div className="circle-background"></div>
                            <img src={icon3} alt="Icon3" />
                            <div className="card-content">
                                <h3>UI/UX Design</h3>
                                <p>56+ Courses</p>
                            </div>
                            <button className="my-button">LERAN MORE</button>
                        </div>
                        <div className="category-card">
                            <div className="circle-background"></div>
                            <img src={icon4} alt="Icon4" />
                            <div className="card-content">
                                <h3>Graphic Design</h3>
                                <p>56+ Courses</p>
                            </div>
                            <button className="my-button">LERAN MORE</button>
                        </div>
                    </div>
                    <button className="category-button">VIEW ALL CATEGORIES</button>
                </div>
                <div className="gallery-section">
                    <div className="gallery-item1">
                        <img src = {categorypic1} alt="pic1" />
                    </div>
                    <div className="gallery-item2">
                        <img src = {categorypic2} alt="pic2" />
                    </div>
                    <div className="gallery-item3">
                        <img src = {categorypic3} alt="pic3" />
                    </div> 
                    <div className="gallery-circles">
                        <div className="circle-blue"></div>
                        <div className="circle-red"></div>
                    </div>
                    <div className="gallery-item7">
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
                        <button className="my-button">ABOUT MORE</button>
                    </div>
                </div>
            </div>
        </main>
    )
}