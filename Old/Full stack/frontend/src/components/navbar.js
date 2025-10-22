import React from 'react'
import logo from '../image.png';
import Home from './Home';
import About from './about';
import Contact from './contact';
export default function navbar() {
  return (
   <div className="navbar">
   
    <img src={logo} className="App-logo" alt="logo" />
    <div className="nav-items">
        <a href="/">Hello</a>
        <a href="/about"><About/></a>
        <a href="/Home"><Hom e/></a>
        
        <a href="/contact"><Contact/></a>

    </div>
   </div>
  )
}
