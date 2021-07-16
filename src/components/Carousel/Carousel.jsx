import React from 'react'
import img1 from '../../assets/img/cake1.jpg'
import img2 from '../../assets/img/cake2.jpg'
import img3 from '../../assets/img/cake3.jpg'
import img4 from '../../assets/img/cake4.jpg'
import styles from './Carousel.module.css'

const Carousel = () => {
    return (
        <div className={styles.carousel}>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img  className={styles.bg} src={img1} class="d-block w-100" height='650px' alt="#" />
                    <div className={styles.carouselCaption} className="carousel-caption d-md-block">
                        <p className={styles.caption}> Peanut butter and <br/>Jelly cupcakes</p>
                        <h6 className={styles.availableTime}> Available May 6th – May 30th</h6>
                        <button className={styles.btnRedirect}> Order now </button>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img className={styles.bg} src={img2} class="d-block w-100" height='650px'  alt="#" />
                    <div class="carousel-caption d-md-block">
                        <p className={styles.caption}> <b>7 LAYER BARS </b> <br/> Baked with chocolate and butterscotch chips </p>
                        <button className={styles.btnRedirect}> Order now </button>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img className={styles.bg} src={img3} class="d-block w-100" height='650px'  alt="#" />
                    <div class="carousel-caption d-md-block">
                        <p className={styles.caption}> Wedding Cakes!<br/>Customized with your choice of cake flavor, filling and frosting</p> 
                        <button className={styles.btnRedirect}> Order now </button>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img className={styles.bg} src={img4} class="d-block w-100" height='650px'  alt="#" />
                    <div class="carousel-caption d-md-block">
                    <p className={styles.caption}> Contact us for more information about creating the wedding cake of your dreams. </p>
                        <button className={styles.btnRedirect}> Order now </button>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    )
}

export default Carousel;
