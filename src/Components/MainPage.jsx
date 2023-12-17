import React from 'react'
import '../Styles/MainPage.css'
import Statisticsbar from './Statisticsbar'
import WhatWeDo from './WhatWeDo'
export default function MainPage() {
  return (
    <>
      <div className="main-container">
        <div className="main-container-content">
        <h2>From Ideation <br /> to Realization </h2>
        <p>As Pune's fastest-growing contract-based construction company with 20 years of industry expertise, we excel in delivering cutting-edge construction services. Our commitment to value, driven by advanced technology and a discerning vision, sets us apart in the sector.</p>
        <button className='read-more-button'>Read More</button>
        </div>
      </div>
      <Statisticsbar/>
      <WhatWeDo/>
    </>
  )
}
