import React, {useState} from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  const [menu,setMenu]=useState("home");
  console.log('Navbar rendered');
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li className={menu==="home"?"active":""}>Home</li>
        <li className={menu==="menu"?"active":""}>Menu</li>
        <li className={menu==="mobile-app"?"active":""}>Mobile app</li>
        <li className={menu==="contact us"?"active":""}>Contact us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" className="search_icon" />
        <div className='navbar-search-icon'>
            <img src={assets.basket_icon} alt=""/>
            <div className='dot'></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
