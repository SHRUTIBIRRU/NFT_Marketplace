import React from 'react'
// import search from '../images/search.jpg'
// import radio from '../images/icon.jpg'
// import menu from '../images/menu.jpg'
import mainimage from '../images/mainimage.jpg'
import { Search, AlignJustify } from 'react-feather';
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="inputField">
        <span id='search'><Search /></span>
          <input type="text" className='inputsearch' placeholder='search' />
          <span style={{marginRight : '80px'}}><AlignJustify/></span>
          {/* <img src={search} alt="search" className='search' />
                <img src={radio} alt="radio" className='radio'/> 
                <img src={menu} alt="menu" className='menu'/>*/}
          
        </div>
        <img src={mainimage} alt="mainimage" className='mainimage' />
        <div className="headings">
        SoulCurryArt
      </div>
      <div className="subhead1">
      A play of light and shade, chairoscurso is the realm between the light and dark
      </div>
      <button className="button3">Create</button> 
      </div>
      
    </div>
  )
}

export default Navbar