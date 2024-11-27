import React from 'react'
import style from './Header.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.contact}>
            <div className={style.phone}>
              <i><FaPhoneAlt /></i>
              <a href=""> +021-95-51-84</a>
            </div>
            <div className={style.phone}>
              <i><SlEnvolopeLetter /></i>
              <a href="">email@email.com</a>
            </div>
            <div className={style.phone}>
              <i><FaLocationDot /></i>
              <a href=""> 1734 Stonecoal Road</a>
            </div>
          </div>
          <div className={style.usd}>
            <div className={style.phone}>
              <i><FaDollarSign /></i>
              <a href=""> USD</a>
            </div>
            <div className={style.phone}>
              <i><IoPersonOutline /></i>
              <a href=""> My Account</a>
            </div>
          </div>
        </div>
        <div className={style.bottom}>
            <div className={style.logo}>
              <img src="https://preview.colorlib.com/theme/electro/img/logo.png" alt="logo" />
            </div>
            <div className={style.input}>
              <div className={style.categories}><p>All Categories</p></div>
                <input type="text" placeholder='Search Here'/>
                <button className={style.btn}>Search</button>
            </div>
            <div className={style.iconbox}>
              <div className={style.icon}>
                <span>2</span>
                <i><CiHeart/></i>
                <p>Your Wishlist</p>
              </div>
              <div className={style.icon}>
                <span>3</span>
                <i><FaShoppingCart /></i>
                <p>Your Cart</p>
              </div>
            
            </div>
        </div>
        <div className={style.line}>

        </div>
      </div>
    </>
  )
}

export default Header