import React from 'react'
import techron from '../../Components/images/techron_fuels.jpg'
import './Engine.css'

function Engine() {
  return (
    <>
      <div className="flex-container">
                <div className="flex-l" data-aos="fade-down-right">
                    <h3>HAVOLINE CAR ENGINE OILS</h3>
                    <h1>HAVOLINE PROTECTS</h1>
                    <p>Caltex Havoline engine oils help keep your car going. For more than a century, people have relied on Caltex Havoline advanced motor oil technology to continuously protect their engines against premature wear. Protect your vehicle. Protect your investment. And keep going with Caltex Havoline motor oils.</p>
                    <button type='button'>Learn More</button>
                </div>
                <div className="flex-r" data-aos="fade-down-left">
                    <img src={techron} alt="" />
                </div>
            </div>
    </>
  )
}

export default Engine