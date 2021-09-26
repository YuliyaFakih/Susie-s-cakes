import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import styles from './Nav.module.css'
import cart from './../../assets/img/cart.png'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import style from './style.css'
import close from './../../assets/img/close.png'

const Nav = () => {
    const OpenMenu =() => {
        document.querySelector('.navigationMenu').style.display = 'block'
    }
    const hideMenu = () => {
        document.querySelector('.navigationMenu').style.display = 'none'
    }
    return (
        <div className={styles.navigation}>
            <div className={styles.sections}>
                <div>
                     <img src={logo} alt="#"/> 
                </div>
                <NavLink to='/home' className={styles.navHome}>
                    Home
                </NavLink>
                <NavLink to='/about'className={styles.navAbout}>
                    About
                </NavLink>
                <NavLink to='/menu' className={styles.navMenu}>
                    Menu
                    
                </NavLink>
                <NavLink to='/weddings' className={styles.navWedding}>
                    Weddings
                </NavLink>
                <NavLink to='/decorations' className={styles.navDecor}>
                    Decorations
                </NavLink>
                <NavLink to='/careers' className={styles.navCereers}>
                    Careers
                </NavLink>
                
                <NavLink to='/cart'>
                    <img className={styles.cart} src={cart} alt="#" />
                </NavLink>
                <button className={styles.orderBtn}> <NavLink to="/menu"> Order </NavLink> </button>
                <div className={styles.btnMore}>
                        <div onClick={OpenMenu}>
                            <div className={styles.line}></div>
                            <div className={styles.line}></div>
                            <div className={styles.line}></div>
                        </div>
                </div>
                <div class="navigationMenu">
                    <div class="navGrid">
                        <div class="navigationMenuList">
                        <NavLink to='/decorations'>Decorations</NavLink>
                        <NavLink to='/careers'>Careers</NavLink>
                        <NavLink to='/weddings'>Weddings</NavLink>
                        <NavLink to='/menu'>Menu</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/home'>Home</NavLink>
                    </div>
                    <img src={close} onClick={hideMenu} />
                    </div>
                </div>
                
                
            </div>
                
           

        </div>
    )
}

export default Nav;
