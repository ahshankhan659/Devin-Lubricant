import React from 'react';
import './DeiselProduct.css';
import Card2 from '../../Components/images/card2.png'
import Card3 from '../../Components/images/card3.jpg'

function DeiselProduct1() {
    return (
        <>
            <section id="course-inner">
                <div className="overview">
                    <img className="course-img" src={Card2} alt="" />
                    <div className="course-head">
                        <div className="c-name">
                            <h2>Javascript Beginner Course</h2>
                            <div className="stars">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                            <p>
                                Modern Jvascript from the beginning - all the way upto JS expert level! The must-have Javascript
                                resources in 2021.
                            </p>
                        </div>
                        <span>$49.99</span>
                    </div>
                    <div>
                        <h3>Instructor</h3>
                        <div className="tutor">
                            <img src={Card3} alt="" />
                            <div className="tutor-det">
                                <h5>John Doe</h5>
                                <p>Web Developer at Google</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <h3>Course Overview</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consectetur quis nulla fugit impedit cum
                        ipsum repellendus consequatur distinctio expedita corrupti, quidem doloribus ab quaerat repudiandae dolor
                        praesentium tempore nostrum facilis molestiae pariatur porro libero obcaecati provident! Itaque, illo quae.
                        <br /><br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis esse dignissimos tempore iusto!
                        Voluptates repudiandae dolore omnis fugiat sapiente in, perferendis possimus facilis quisquam asperiores
                        amet ullam molestiae fugit nostrum alias earum voluptatem ipsa deleniti? Voluptatibus magnam, repellat qui
                        aut laudantium a soluta tenetur ipsa, officiis aliquid magni vero fugit modi, corrupti quos repellendus
                        ipsum accusamus voluptas sapiente. Unde, quaerat quos placeat culpa asperiores voluptates dolore similique,
                        molestiae quod corporis ipsa laboriosam cum esse vero deleniti suscipit earum commodi fuga enim quisquam
                        inventore. Libero, quisquam! Ex doloribus voluptates facilis itaque?
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nisi aperiam repellendus reiciendis. Quis
                        nihil quibusdam nostrum odio, velit illum illo asperiores sed numquam perspiciatis ut unde iure repellat
                        quam corporis, exercitationem optio non doloremque eveniet dolore, voluptas aspernatur blanditiis? Ab
                        veritatis libero, obcaecati sit dolores sapiente eos maiores velit amet reprehenderit eaque possimus iste id
                        laudantium cupiditate saepe beatae autem, ex blanditiis assumenda quia harum quisquam animi illo? Repellat.
                    </p>
                    <hr />
                    <h3>What you'll Learn</h3>
                    <div className="learn">
                        <p>
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                            Javascript from scratch - beginner to advanced
                        </p>
                        <p>
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                            Everything you need to become a javascript expert and apply for javascript jobs
                        </p>
                        <p>
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                            All about variables, functions, objects, and arrays
                        </p>
                        <p>
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                            All core features and concepts you need to know in modern javascript development
                        </p>
                        <p>
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                            Project-driven learning with plenty of examples
                        </p>
                        <p>
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                            Object-oriented programming
                        </p>
                    </div>
                </div>
                <div className="enroll">
                    <h3>This Course Includes</h3>
                    <p>
                        <i className="fa fa-video-camera" aria-hidden="true"></i>
                        52 hours video
                    </p>
                    <p>
                        <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                        75 articles
                    </p>
                    <p>
                        <i className="fa fa-cloud-download" aria-hidden="true"></i>
                        Downloadable resources
                    </p>
                    <p>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                        Full-time access
                    </p>
                    <p>
                        <i className="fa fa-mobile" aria-hidden="true"></i>
                        Access on mobile and TV
                    </p>
                    <p>
                        <i className="fa fa-paperclip" aria-hidden="true"></i>
                        Assignments
                    </p>
                    <p>
                        <i className="fa fa-trophy" aria-hidden="true"></i>
                        Certificate of completion
                    </p>
                    <div className="enroll-btn">
                        <a className="blue" href="#">
                            Enroll Course
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DeiselProduct1;
