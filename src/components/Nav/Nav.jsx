import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import styles from './Nav.module.css'
import cart from './../../assets/img/cart.png'

const Nav = () => {
    
    return (
        <div className={styles.navigation}>
            <div className={styles.sections}>
                <div>
                     <img src={logo} alt="#"/> 
                </div>
                <NavLink to='/home'>
                    Home
                </NavLink>
                <NavLink to='/about'>
                    About
                </NavLink>
                <NavLink to='/menu' >
                    Menu
                    
                </NavLink>
                <NavLink to='/weddings'>
                    Weddings
                </NavLink>
                <NavLink to='/decorations'>
                    Decorations
                </NavLink>
                <NavLink to='/careers'>
                    Careers
                </NavLink>
                <button> Order </button>
                <NavLink to='/cart'>
                    <img className={styles.cart} src={cart} alt="#" />
                </NavLink>
            </div>
                
           

        </div>
    )
}

export default Nav;