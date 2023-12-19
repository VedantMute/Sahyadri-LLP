import React from "react";
import Title from "./Title";
import '../Styles/AboutUsPage.css'
import qualityImage1 from '../assets/about-best-cost.png'
import qualityImage2 from '../assets/about-best-quality.png'
import qualityImage3 from '../assets/about-best-rated.png'
import aboutCompanyBanner from "../assets/about-banner.png";
import az1 from "../assets/lala1.jpg";
import az2 from "../assets/lala2.jpg";
export default function AboutUsPage() {
  return (
    <>
      <Title content="About Us" />
      <div className="about-company-container">
        <div className="about-company">
          <div><h3><span className="yellow-text">INNOVATIVE</span> AND QUALITY DRIVEN COMPANY</h3>
          <div className="about-company-info-para">
          <p>Welcome to Sahyadri Developement constructors LLP(formerly known as Tarangan Associates), where a legacy of over two decades defines our commitment to excellence in construction. For more than 20 years, we've been shaping environments, exceeding expectations, and crafting enduring structures. Our highly skilled team, comprised of seasoned architects, engineers, and craftsmen, forms the heartbeat of SDC.
    <br />
At SDC, we pride ourselves on a diverse portfolio that spans residential and commercial developments, showcasing the depth of our capabilities. Our journey is marked by a dedication to innovation, integrity, and unwavering client satisfaction, earning us a stellar reputation in the construction landscape.
<br />
As we reflect on our 20+ years of service, our commitment to pushing the boundaries of construction remains unwavering. We embrace new technologies, set new standards for excellence, and invite you to join us on a journey where experience meets innovation.
<br />
          </p></div></div>
        </div>
        {/* <div className="about-companny-banner">
          <img src={aboutCompanyBanner} alt="" />
        </div> */}
      </div>
      <section className="quality-bar">
        <div className="quality">
        <div className="quality-box">
          <div className="quality-image"><img src={qualityImage1} alt="" /></div>
          <div className="quality-details">
          <div className="quality-heading">TOP RATED</div>
          <div className="quality-info">On the other hand, we denounce with righteous indignation and dislike men who are</div>
          </div>
        </div>
        <div className="quality-box">
          <div className="quality-image"><img src={qualityImage2} alt="" /></div>
          <div className="quality-details">
          <div className="quality-heading">BEST QUALITY</div>
          <div className="quality-info">On the other hand, we denounce with righteous indignation and dislike men who are</div>
          </div>
        </div>
        <div className="quality-box">
          <div className="quality-image"><img src={qualityImage3} alt="" /></div>
          <div className="quality-details">
          <div className="quality-heading">LOW COST</div>
          <div className="quality-info">On the other hand, we denounce with righteous indignation and dislike men who are</div>
          </div>
        </div>
        </div>
      </section>
    
    <h3><span className="yellow-text">Director's</span> Words of Wisdom</h3>

      <div className="dirctor-message-container">
        <div className="directors-message">
          <h4 className="director-name">Mr. Pravin Patel <span className="position">- Director</span> </h4><p>"In my capacity as Director at SDC, my foremost mission is to chart a course of excellence, originality, and client fulfillment. We are devoted to constructing not merely buildings but enduring spaces that transcend expectations. From our inaugural venture to each subsequent project, we aim to redefine our industry benchmarks, earning SDC a reputation for quality and innovation. I am committed to fostering a workplace culture that prizes the skills, creativity, and well-being of our team members."</p></div>
        <div className="directors-image">
          <img src={aboutCompanyBanner} alt="" />
        </div>
      </div>
      <div className="dirctor-message-container">
      <div className="directors-image">
          <img src={aboutCompanyBanner} alt="" />
        </div>
        <div className="directors-message">
          <h4 className="director-name">Mr. Mandar Mate<span className="position">- Director</span> </h4><p>"In my role as the Director at SDC, I am dedicated to steering our vision with a focus on ingenuity, collaboration, and client triumph. Our mission is to revolutionize construction norms, delivering influential projects that showcase our unwavering commitment. Together, we're crafting a lasting legacy of distinction, reshaping environments, and ensuring SDC stands as a beacon of inventive solutions and trust in the construction landscape. Let's embark on this journey of excellence."</p></div>
        
      </div>
    </>
  );
}
