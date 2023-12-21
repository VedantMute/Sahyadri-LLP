import React from 'react'
import '../Styles/MainPage.css'
import landmark1 from '../assets/LandmarkImage1.jpg';
import landmark2 from '../assets/LandmarkImage2.jpg';
import landmark3 from '../assets/LandmarkImage3.jpg';
import landmark4 from '../assets/LandmarkImage4.jpg';
import landmark5 from '../assets/LandmarkImage5.jpg';
import landmark6 from '../assets/LandmarkImage6.jpg';
export default function LandmarksMainPage() {
  return (
    <>
      <section className="landmarks">
      <h3><span className="yellow-text">SIGNATURE </span>LANDMARKS BY SDCLLP</h3>
      <div className="landmark-container">
        <div data-aos="zoom-out" className="landmark-image"><div>
        <img src={landmark1} alt="" /></div><div className="image-border">Magarpatta City</div></div>
        <div data-aos="zoom-out" className="landmark-image"><div>
        <img src={landmark2} alt="" /></div><div className="image-border">Nanded City</div></div>
        <div data-aos="zoom-out" className="landmark-image"><div>
        <img src={landmark3} alt="" /></div><div className="image-border">ABC Society</div></div>
      </div>
      <div className="landmark-container">
        <div data-aos="zoom-out" className="landmark-image"><div>
        <img src={landmark4} alt="" /></div><div className="image-border">Gulmohar City</div></div>
        <div data-aos="zoom-out" className="landmark-image"><div>
        <img src={landmark5} alt="" /></div><div className="image-border">Gokuldham Society</div></div>
        <div data-aos="zoom-out" className="landmark-image"><div>
        <img src={landmark6} alt="" /></div><div className="image-border">Twin Towers</div></div>
      </div>
      </section>
    </>
  )
}
