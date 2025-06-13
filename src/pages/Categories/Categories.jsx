import React, { useState, useRef } from "react";
import Vector from '../../assets/img/Vector.png';
import Icon1 from '../../assets/img/icon1.png';
import Icon2 from '../../assets/img/icon2.png';
import Icon3 from '../../assets/img/icon3.png';
import Icon4 from '../../assets/img/icon4.png';
import Que from '../../assets/img/Que.png';
import Cinema from '../../assets/img/Cinema.png';

import Button from "../components/Button";
export default function Categories() {
    return(
        <main>
            <div className="categories-container">
                <div>
                    <h6>Courses Categories</h6>
                    <h3><p>Explore Top Categories</p></h3>
                    <div>
                        <img src={Vector} alt="Vector" />
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src={Icon1} alt="Icon1" />
                            </div>
                            <div>
                                <h3>Web Development</h3>
                                <p>56+ Courses</p>
                            </div>
                            <div>
                                <Button>LEARN MORE</Button>
                            </div>
                        </div>
                        <div>
                            <div>x
                                <img src={Icon2} alt="Icon2" />
                            </div>
                            <div>
                                <h3>Digital Marketing</h3>
                                <p>56+ Courses</p>
                            </div>
                            <div>
                                <Button>LEARN MORE</Button>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Icon3} alt="Icon1" />
                            </div>
                            <div>
                                <h3>UI/UX Design</h3>
                                <p>56+ Courses</p>
                            </div>
                            <div>
                                <Button>LEARN MORE</Button>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={Icon4} alt="Icon1" />
                            </div>
                            <div>
                                <h3>Graphic Design</h3>
                                <p>56+ Courses</p>
                            </div>
                            <div>
                                <Button>LEARN MORE</Button>
                            </div>
                        </div>
                        <div>
                            <div><Button></Button></div>
                            <div><Button></Button></div>
                        </div>
                        
                    </div>
                </div>
                <div>
                    <div>

                    </div>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div> 
                    <div>
                        
                    </div>  
                    <div>
                        
                    </div>   
                    <div>
                        <h2>10k +</h2>
                        <p>Students Active Our Courses</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h6>About Our University</h6>
                        <h1><p>Welcome to Edura University.</p></h1>
                        <p>Collaboratively simplify user friendly networks after principle centered coordinate effective methods of empowerment distributed niche markets pursue market positioning web-readiness after resource sucking applications. </p>
                        <br></br>
                        <p>Online education, also known as e-learning, is a method of learning that takes place over the internet. It offers individuals the opportunity to acquire knowledge, skills.</p>
                    </div>
                    <div>
                        <div>
                            <img src={Cinema} alt="Cinema" />
                        </div>
                        <div>
                            <ul>
                                <li><img src={Que} alt="Question Icon" /> Get access to 4,000+ of our top courses</li>
                                <li><img src={Que} alt="Question Icon" />Popular topics to learn now</li>
                                <li><img src={Que} alt="Question Icon" />Find the right instructor for you</li>
                            </ul>
                        </div>
                        <div>
                            <Button>ABOUT MORE</Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}