import React from 'react'
import client1 from '../assets/mp-logo.jpg'
import client2 from '../assets/nc-logo.png'
export default function OurClients() {
  return (
    <>
    <h3><span className="yellow-text">OUR </span>CLIENTS</h3>
    <div className="our-clients-slider">
    <div className="slider-area">
  <div className="wrapper">
    <div className="item">
      <img alt="" src={client1} />
    </div>
    <div className="item">
      <img alt="" src={client2} />
    </div>
    <div className="item">
      <img alt="" src={client1} />
    </div>
    <div className="item">
      <img alt="" src={client1} />
    </div>
    <div className="item">
      <img alt="" src={client2} />
    </div>
  </div>
    </div>
</div>

    </>
  )
}
