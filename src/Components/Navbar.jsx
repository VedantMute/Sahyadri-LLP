import React from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png';
export default function Navbar() {
  return (
    <>
      <header>
        <nav>
           <div className="navbar">
           <div className="logo">
                <img src={logo} alt="" height="55px" width="200px" />
            </div>
            <div className="menu-items">
                <div><Link className='linkColor' to="/">Home</Link></div>
                <div><Link className='linkColor' to="/about">About</Link></div>
                <div><Link className='linkColor' to="/projects">Projects</Link></div>
                <div><Link className='linkColor' to="/contact">Contact</Link></div>
                
            </div>
           </div>
        </nav>
      </header>
    </>
  )
}
