import React from "react";
import Title from "./Title";
import "../Styles/ContactUs.css";
import map from "../assets/map.png";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import location from "../assets/location.png";
import businesscontact from "../assets/contact-banner.jpeg";

const ContactBox = ({ imageSrc, heading, info }) => {
  return (
    <div className="contact-box">
      <div className="contact-image">
        <img src={imageSrc} alt="" />
      </div>
      <div className="contact-details">
        <div className="contact-heading">{heading}</div>
        <div className="contact-info">{info}</div>
      </div>
    </div>
  );
};

export default function ContactUs() {
  return (
    <>
      <Title content="Contact Us" />
      <div className="contact-boxes">
        <ContactBox
          imageSrc={phone}
          heading="Phone"
          info="+91 99875 56874,  +91 99875 55877"
        />
        <ContactBox
          imageSrc={email}
          heading="Email"
          info="admin@sahyadri.com"
        />
        <ContactBox
          imageSrc={location}
          heading="Location"
          info="Flat No.803, Building B, Madhuvanti,
        Sinhagad Road, Nandedcity,
        Pune 411041."
        />
      </div>
      <div className="business-contact">
        <div className="business-contact-image">
          <img src={businesscontact} alt="" />
        </div>
        <div className="business-contact-form">
          <h3>
            <span className="yellow-text">BUSINESS </span>ENQUIRY
          </h3>
          <div className="input">
          <div id="textInput1">
              <input type="text" placeholder="Enter Name" />
            </div>
            <div id="phoneInput">
              <input type="tel" placeholder="Enter phone number" />
            </div>

            <div id="emailInput">
              <input type="email" placeholder="Enter email address" />
            </div>

            

            <div id="textInput2">
              <input type="text" placeholder="Enter Message" />
            </div>
            <button type="submit" className="submitButton">Submit</button>
          </div>
        </div>
      </div>
      <div className="map">
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.613508281609!2d73.78436311078141!3d18.455849308914182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29598fdbfdc63%3A0x1b56e0dfe786b471!2sMadhuvanti%20Society!5e0!3m2!1sen!2sin!4v1703229941958!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      <img src={map} alt="" />
</div>

    </>
  );
}
