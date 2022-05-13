import React from 'react'
import logo from '../images/image 73.jpg'
import ellipse from '../images/Ellipse 48.png'

const LeftHalfPage = () => {
  return (
    <div>
      <div className="leftTopHalf">
        <div className="topHeading">
          <img src={logo} className="logo" alt="logo" />
           <span id='logohead'>OpenSea</span>
        </div>
        <div className="heading">
          Discover. Collect. & Sell. Extraordinary
        </div>
        <div className="subheading1">
          <img src={ellipse} className='ellipse' alt="ellipse" />
          <span id='subtitle'> NFT's  </span>          
        </div>
        <div className="subheading2">
        On the world’s first & largest NFT marketplace.
        </div>
        <div className="buttonG">
         <button className="button1">Explore</button> 
         <button className="button2">Create</button> 
       </div>
       <div className="subheading3">
       Get Featured On The Homepage
       </div>
      </div>
      
    </div>
  )
}

export default LeftHalfPage