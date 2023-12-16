import React from 'react'
import '../Styles/Statisticsbar.css'
export default function Statisticsbar() {
  return (
    <>
      <div className="statistics-container">
        <div className="box">
            <div className="box-value">10+</div>
            <div className="box-description">Years</div>
        </div>
        <div className="box">
            <div className="box-value">100+</div>
            <div className="box-description">Projects</div>
        </div>
        <div className="box">
            <div className="box-value">1000+</div>
            <div className="box-description">SQM. Build</div>
        </div>
      </div>
    </>
  )
}
