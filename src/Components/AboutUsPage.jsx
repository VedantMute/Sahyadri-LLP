import React from "react";
import Title from "./Title";
import '../Styles/AboutUsPage.css'
import aboutCompanyBanner from "../assets/about-banner.png";
export default function AboutUsPage() {
  return (
    <>
      <Title content="About Us" />
      <div className="about-company-container">
        <div className="about-company">
          <div><h3>INNOVATIVE AND QUALITY DRIVEN COMPANY</h3>
          <p>
            Tricon Infra Buildtech Pvt. Ltd. (TIBPL) is a leading construction
            contracting company working on Design Built, Turn-key and Core &
            Shell projects. Started in 2009 with a dedicated team of 80 members,
            within a span of couple of decades, we have grown to become a family
            of 3700+ construction workforce who have all contributed towards
            yielding an annual turnover of 250cr. Our senior management along
            with our efficient workforce toils every day to reach higher
            skylines and build properties which offer fine. <br />Our
            determined workforce comprises highly qualified and experienced
            individuals operating across all fields of work within our industry.
            We revel in the fact that we are one of the civil contracting firms
            to have a facility of independent formyard to meet all shuttering
            requirements across our sites.
          </p></div>
        </div>
        {/* <div className="about-companny-banner">
          <img src={aboutCompanyBanner} alt="" />
        </div> */}
      </div>
    </>
  );
}
