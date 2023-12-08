import React from 'react'
import './DeiselProducts.css'
import Card2 from '../../Components/images/card2.png'
import Card3 from '../../Components/images/card3.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';

function DeiselProducts(props) {
    const navigate = useNavigate()
    function product1(){
        navigate("/DeiselProduct1")
    }

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
            {/* ----------DEISEL PRODUCTS----------- */}
                <div className="heading" id='deisel' data-aos="fade-right">
                    <h1 className="deisel-products" >DEISEL PRODUCTS</h1>
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
                                    <button type='button' onClick={product1}>See More</button>
                                    {/* <a href="#" onClick={product1}>See More</a> */}
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

export default DeiselProducts