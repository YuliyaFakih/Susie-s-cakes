import React from 'react'
import styles from './Footer.module.css'
import footer from '../../assets/img/footer.png'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div>
               <img src={footer} alt="#" />
                <ul>
                    <li>Susiecakes</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Weddings</li>
                    <li>Decoration</li>
                    <li>Locations</li>
                    <li>Order online</li>
                </ul>
                <ul>
                    <li>Careers</li>
                    <li>Contact</li>
                    <li>Purchase gift cards</li>
                    <li>Check gift card balance</li>
                    <li>Susie favors rewards</li>
                </ul>
                <ul>
                    <li>FAQ</li>
                    <li>Legal</li>
                    <li>Terms and conditions</li>
                    <li>Susiefavors legal</li>
                    <li>Susiefavors terms</li>
                </ul> 
            </div>
            <div className={styles.copy}>Copyright © SusieCakes 2021</div>
            
        </div>
    )
}

export default Footer