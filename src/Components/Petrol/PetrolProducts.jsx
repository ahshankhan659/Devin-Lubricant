import React from 'react'
import './PetrolProducts.css'
import Card2 from '../../Components/images/card2.png'
import Card3 from '../../Components/images/card3.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function PetrolProducts(props) {
    const responsive1 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            {/* ----------PETROL PRODUCTS----------- */}
            <div className="heading" id='petrol' data-aos="fade-right">
                <h1 className="deisel-products gap" >PETROL PRODUCTS</h1>
            </div>
            <div className="main-div" data-aos="fade-up">

                <Carousel arrows={false}
                    autoPlaySpeed={3000} infinite={true} autoPlay={props.deviceType !== "mobile" ? true : false}
                    responsive={responsive1}>
                    <div>
                        <div className="deisel">
                            <div className="deisel-card">
                                <div className="deisel-img">
                                    <img className='imge' src={Card2} alt="" />
                                </div>
                                <div className="deisel-title">
                                    <h5>Delo Right For Your Engine Rewarding Eve...</h5>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit nobis fugit vitae reprehenderit consectetur eveniet molestias provident officia sit maxime?</p>
                                    <a href="">See More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="deisel">
                            <div className="deisel-card">
                                <div className="deisel-img">
                                    <img className='imge' src={Card3} alt="" />
                                </div>
                                <div className="deisel-title">
                                    <h5>Delo Right For Your Engine Rewarding Eve...</h5>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit nobis fugit vitae reprehenderit consectetur eveniet molestias provident officia sit maxime?</p>
                                    <a href="">See More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="deisel">
                            <div className="deisel-card">
                                <div className="deisel-img">
                                    <img className='imge' src={Card2} alt="" />
                                </div>
                                <div className="deisel-title">
                                    <h5>Delo Right For Your Engine Rewarding Eve...</h5>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit nobis fugit vitae reprehenderit consectetur eveniet molestias provident officia sit maxime?</p>
                                    <a href="">See More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="deisel">
                            <div className="deisel-card">
                                <div className="deisel-img">
                                    <img className='imge' src={Card3} alt="" />
                                </div>
                                <div className="deisel-title">
                                    <h5>Delo Right For Your Engine Rewarding Eve...</h5>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit nobis fugit vitae reprehenderit consectetur eveniet molestias provident officia sit maxime?</p>
                                    <a href="">See More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="deisel">
                            <div className="deisel-card">
                                <div className="deisel-img">
                                    <img className='imge' src={Card2} alt="" />
                                </div>
                                <div className="deisel-title">
                                    <h5>Delo Right For Your Engine Rewarding Eve...</h5>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit nobis fugit vitae reprehenderit consectetur eveniet molestias provident officia sit maxime?</p>
                                    <a href="">See More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="deisel">
                            <div className="deisel-card">
                                <div className="deisel-img">
                                    <img className='imge' src={Card3} alt="" />
                                </div>
                                <div className="deisel-title">
                                    <h5>Delo Right For Your Engine Rewarding Eve...</h5>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit nobis fugit vitae reprehenderit consectetur eveniet molestias provident officia sit maxime?</p>
                                    <a href="">See More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>;
            </div>

        </>
    )
}

export default PetrolProducts