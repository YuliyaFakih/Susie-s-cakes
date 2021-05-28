import React from 'react'
import photo from '../../assets/img/photo.png'
import cake5 from '../../assets/img/cake5.jpg'
import hiring from '../../assets/img/hiring.png'
import styles from './Blog.module.css'
import appstore from '../../assets/img/appstore.png'
import googleplay from '../../assets/img/googleplay.png'
import facebook from '../../assets/img/facebook.png'
import twitter from '../../assets/img/twitter.png'
import insta from '../../assets/img/instagramm.png'
import pinterest from '../../assets/img/pinterest.png'


const BlogAbout = () => {

    return (
        <div>
            <div className={styles.blog}>
                <img src={photo} alt="#"/>
                <div>
                    <h2> About Susiecakes </h2>
                    <p>Inspired by the classic recipes of her two beloved grandmothers, Mildred and Madeline, Susie created a bakery that uses the finest, simple ingredients and brings celebration into each and every day.</p>
                    <button> Our story </button>
                    <button> Our difference </button>
                </div>
            </div>
            
            <div className={styles.locations}>
                <div>
                    <h2>We Love to Help You Celebrate!</h2>
                    <p>Talk to a Celebration Specialist today to plan the perfect cake for your special occasion.</p>
                    <button> Locations </button>
                </div>
                <img src={cake5} alt="#"/>
            </div>
            <div className={styles.hiring}>
                <img src={hiring} alt="#"/>
                <div>
                    <h2>Have a career worth celebrating at SusieCakes</h2>
                    <button> Current Opportunities </button>
                </div>
                
            </div>
            <div className={styles.banner}>
                <div>
                    <h2>A Rewards Program that Celebrates You!</h2>
                    <p> Get <b> two free cupcakes </b> when you sign up for SusieFavors! </p>
                    <span> <img src={appstore} alt="#" />
                    <img src={googleplay} alt="#" /> </span>
                    <button> Learn more </button>
                </div>
                
            </div>
            <div className={styles.links}>
                <div>
                    <img src={facebook} alt="#"/>
                    <img src={twitter} alt="#"/>
                    <img src={insta} alt="#"/>
                    <img src={pinterest} alt="#"/>
                </div>
                <form>
                    <input placeholder="Email address" />
                    <button> Subscribe </button>
                </form>
            </div>
        </div>
    )
}

export default BlogAbout