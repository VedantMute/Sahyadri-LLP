import React from 'react'
import '../Styles/Footer.css'
export default function Footer() {
  return (
    <><>
    {/* Site footer */}
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Sahyadri Development and Construction LLP</h6>
            <p className="text-justify">
            Flat No.803, Building B, Madhuvanti, <br /> Sinhagad Road, Nandedcity, <br /> Pune 411041. <br />+91 99875 56874, +91 99875 55877
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Our Sites</h6>
            <ul className="footer-links">
              
              <li>
                <a href="">
                  Magarpatta City
                </a>
              </li>
              <li>
                <a href="">
                 Nanded City
                </a>
              </li>
              <li>
                <a href="">
                  Something City
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">
                  Projects
                </a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright © 2023 All Rights Reserved by
             Sahyadri Development and Construction LLP <br />Designed and Developed by <a href="">Vedant</a>
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a className="dribbble" href="#">
                  <i className="fa fa-dribbble" />
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </>
  
    </>
  )
}
