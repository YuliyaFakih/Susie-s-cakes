import React from 'react'
import styles from './Decorations.module.css'
import img1 from '../../assets/img/cakesDesign/1.JPG'
import img2 from '../../assets/img/cakesDesign/2.JPG'
import img3 from '../../assets/img/cakesDesign/3.JPG'
import img4 from '../../assets/img/cakesDesign/4.JPG'
import img5 from '../../assets/img/cakesDesign/5.JPG'
import img6 from '../../assets/img/cakesDesign/6.JPG'
import img7 from '../../assets/img/cakesDesign/7.JPG'
import img8 from '../../assets/img/cakesDesign/8.JPG'
import img9 from '../../assets/img/cakesDesign/9.JPG'
import img10 from '../../assets/img/cakesDesign/10.JPG'
import img11 from '../../assets/img/cakesDesign/11.JPG'
import img12 from '../../assets/img/cakesDesign/12.JPG'
import img13 from '../../assets/img/cakesDesign/13.JPG'
import img14 from '../../assets/img/cakesDesign/14.JPG'
import img15 from '../../assets/img/cakesDesign/15.JPG'


const Decorations = () => {
    return (
        <div>
            <div className={styles.block}>
                <div className={styles.firstTextBlock}>
                <h3>Susie’s Signature Decoration cakes are the most festive way to celebrate!</h3>
                    <p>Find your local bakery to place an order.</p>
                </div>
                <div className={styles.border}></div>
            </div>
            <div className={styles.imgBlock}>
                <img src={img1} alt="#" />
                <img src={img2} alt="#" />
                <img src={img3} alt="#" />
                <img src={img4} alt="#" />
                <img src={img5} alt="#" />
                <img src={img6} alt="#" />
                <img src={img7} alt="#" />
                <img src={img8} alt="#" />
                <img src={img9} alt="#" />
                <img src={img10} alt="#" />
                <img src={img11} alt="#" />
                <img src={img12} alt="#" />
                <img src={img13} alt="#" />
                <img src={img14} alt="#" />
                <img src={img15} alt="#" />
            </div>
        </div>
    )
}

export default Decorations