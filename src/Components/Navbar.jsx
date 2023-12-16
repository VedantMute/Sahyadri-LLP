import React from 'react'
import '../Styles/Navbar.css'
export default function Navbar() {
  return (
    <>
      <header>
        <nav>
           <div className="navbar">
           <div className="logo">
                Logo
            </div>
            <div className="menu-items">
                <div>Home</div>
                <div>About</div>
                <div>Projects</div>
                <div>Contact</div>
            </div>
           </div>
        </nav>
      </header>
    </>
  )
}
