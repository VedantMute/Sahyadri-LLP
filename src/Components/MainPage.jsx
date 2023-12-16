import React from 'react'
import '../Styles/MainPage.css'
import Statisticsbar from './Statisticsbar'
export default function MainPage() {
  return (
    <>
      <div className="main-container">
        <div className="main-container-content">
        <h2>From Concept <br /> to Creation </h2>
        <p>fastest growing construction company in Pune, India with highbrowed experience within the industry. We excel at delivering construction services backed by cutting- edge technology and a thorough vision of delivering value to our customers.</p>
        <button>Read More</button>
        </div>
      </div>
      <Statisticsbar/>
    </>
  )
}
