import React from 'react'
import corousal2 from '../images/Delo-Web-Page-Slide-Banner.jpg'
import corousal3 from '../images/Anti-Counterfiet-Website-Banner-1400x454.jpg'
import corousal5 from '../images/Corporate-Pylon-Carousel.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Main.css'

function Main(props) {
  const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
  return (
    <>
    <Carousel responsive={responsive}
                arrows={false}
                infinite={true}
                autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={4000}
            >
                <div>
                    <div className="main-container">
                        <div className="main-img">
                            <img src={corousal2} alt="" />
                            <hr />
                            <p>A RELAIBLE PARTNER FOR YOU TO GO FURTHER</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="main-container">
                        <div className="main-img">
                            <img src={corousal3} alt="" />
                            <hr />
                            <p>A RELAIBLE PARTNER FOR YOU TO GO FURTHER</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="main-container">
                        <div className="main-img">
                            <img src={corousal5} alt="" />
                            <hr />
                            <p>A RELAIBLE PARTNER FOR YOU TO GO FURTHER</p>
                        </div>
                    </div>
                </div>
            </Carousel>
    </>
  )
}

export default Main