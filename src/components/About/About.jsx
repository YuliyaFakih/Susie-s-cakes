import React from 'react'
import styles from './About.module.css'
import SusieImg from './../../assets/img/SusieImg.png'
import signature from './../../assets/img/signature.png'

const About = () => {
    return (
        <div>
            <div className={styles.block}>
                <div className={styles.firstTextBlock}>
                    <h3>Connecting through Celebration</h3>
                    <p>We believe cakes are the hallmarks of celebration and we feel privileged to be a part of life’s special moments.</p>
                    <button> Susie's Story </button>
                    <button> Our Difference </button>
                </div>
                <div className={styles.border}></div>
                
            </div>
            <div className={styles.secondTextBlock}>
                Our classic treats are made daily by in-house bakers, using the freshest & finest ingredients. Come visit us for delicious, sentimental sweets and a friendly, old-fashioned neighborhood experience.
            </div>
            <div className={styles.story}>
                <h3>Susie's Story</h3>
            </div>
            <div className={styles.blockBio}>
                <img src={SusieImg} alt="#" />
                <div className={styles.blockBioText}>
                    <h4> SusieCakes’ founder, <span>Susan Sarich</span>, grew up in Chicago, where she was called <span> Susie</span> by her two beloved grandmothers, <span>Mildred</span> and <span>Madeline</span>.</h4>
                    <p>
                        Every day Susie would come home from school to enjoy her grandmothers’ company over a glass of milk and a fresh baked treat. This daily baking ritual and special time together in the kitchen left a lasting impression. When Susie grew up to become Susan and moved to the West Coast, she brought along her grandmothers’ carefully recorded recipes on handwritten 3×5 cards. The pure and simple connection those recipes fostered helped Susan form SusieCakes bakeries to share her experience with others.
                    </p>
                    <p>
                        Through SusieCakes, Susan honors Mildred and Madeline: both in her dedication to their baking traditions, and her commitment to providing women with progressive careers in the food & hospitality industry.
                    </p>
                    <p>
                        “You most likely recall a cake as part of your life’s milestone celebrations. Cake has the unique ability to connect us with the people and events of our past. However, cake should not be reserved only for these special occasions. A delicious slice of cake can immediately bring a bit of celebration to an ordinary day. I hope you enjoy SusieCakes on your special occasions, as well as all the days in between.
                    </p>
                    <img src={signature} alt="#" />
                    <button> Susie's bio </button>
                </div>
            </div>
            <div className={styles.difference}>
                <h3>Susiecakes difference</h3>
            </div>
            <div className={styles.thirdTextBlock}>
                If you can’t spell it, we don’t bake with it. <br/> Just like our grandmothers, we do not use any mixes, artificial preservatives, or shortening in our products. We bake our products from scratch using only the freshest and finest ingredients.
            </div>
            <div className={styles.collage}> </div>
        </div>
    )
}

export default About