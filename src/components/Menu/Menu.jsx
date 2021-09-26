import React, {useState} from 'react'
import styles from './Menu.module.css'
import {NavLink} from 'react-router-dom'
import menuCake from '../../assets/img/menuCake1.png'
import menuCupcake from '../../assets/img/menuCupcake.png'
import menuCookies from '../../assets/img/menuCookies.png'
import menuPuddings from '../../assets/img/menuPuddings.png'
import cakeChoice1 from '../../assets/img/cakeChoice1.jpg'
import cakeChoice2 from '../../assets/img/cakeChoice2.jpg'
import cakeChoice3 from '../../assets/img/cakeChoice3.jpg'
import cakeChoice4 from '../../assets/img/cakeChoice4.jpg'
import cakeChoice5 from '../../assets/img/cakeChoice5.jpg'
import cookieChoice1 from '../../assets/img/cookieChoice1.jpg'
import cookieChoice2 from '../../assets/img/cookieChoice2.jpg'
import cookieChoice3 from '../../assets/img/cookieChoice3.jpg'
import cookieChoice4 from '../../assets/img/cookieChoice4.jpg'
import cookieChoice5 from '../../assets/img/cookieChoice5.jpg'
import cupcakeChoice1 from '../../assets/img/cupcakeChoice1.jpg'
import cupcakeChoice2 from '../../assets/img/cupcakeChoice2.jpg'
import cupcakeChoice3 from '../../assets/img/cupcakeChoice3.jpg'
import cupcakeChoice4 from '../../assets/img/cupcakeChoice4.jpg'
import cupcakeChoice5 from '../../assets/img/cupcakeChoice5.jpg'
import pieChoice1 from '../../assets/img/pieChoice1.jpg'
import pieChoice2 from '../../assets/img/pieChoice2.jpg'
import pieChoice3 from '../../assets/img/pieChoice3.jpg'
import pieChoice4 from '../../assets/img/pieChoice4.jpg'
import pieChoice5 from '../../assets/img/pieChoice5.jpg'
import Cart from './../Cart/Cart'
import uuid from 'react-uuid'
import Modal from './Modal'

const Menu = () => {
    const catalog = JSON.parse(localStorage.getItem('catalog')) || {
        cakesArr: [
            {id: uuid(), name: 'Old-Fashioned 6-Layer Chocolate Cake', img: cakeChoice1, description: '“Just like you remember!” Towering high, moist chocolate cake filled and covered in rich, dark chocolate buttercream frosting.', price: '20$', inCart: false, count: 0},
            {id: uuid(), name: 'Vanilla Celebration Cake', img: cakeChoice2, description:'6-layers of vanilla cake baked with colorful sugar confetti, filled & frosted with our signature retro-blue vanilla frosting.', price: '18$', inCart: false, count: 0},
            {id: uuid(), name: 'Susie’s Famous Southern Red Velvet', img: cakeChoice3, description: 'Deep red, moist cake lightly flavored with cocoa, filled & topped with traditional cream cheese frosting. Our best seller!', price: '25$', inCart: false, count: 0},
            {id: uuid(), name:'Carrot Cake', img: cakeChoice4, description:'Baked with pecans & golden raisins, layered with our unique “praline filling” & topped with traditional cream cheese frosting.', price: '30$', inCart: false, count: 0},
            {id: uuid(), name: 'Tropical Coconut Cake', img: cakeChoice5, description:'Vanilla cake layered with pineapple accented coconut filling &amp; topped with fluffy coconut buttercream &amp; shredded coconut.', price: '27$', inCart: false, count: 0}
        ],
        cupcakesArr: [
            {id: uuid(), name: 'Peanut Butter &amp; Jelly Cupcake', img: cupcakeChoice1, description: 'Grape jelly swirled into vanilla cake batter, topped with peanut butter buttercream and a jelly swirl', price: '5$', inCart: false, count: 0},
            {id: uuid(), name: 'Chocolate Cupcake', img: cupcakeChoice2, description: 'This chocolate cupcake recipe makes perfect moist, fudgey, fluffy chocolate cupcakes topped with silky chocolate Swiss meringue buttercream.', price: '7$', inCart: false, count: 0},
            {id: uuid(), name: 'Flourless Chocolate Cupcake', img: cupcakeChoice3, description: 'These small but rich flourless chocolate cupcakes made with whipped meringue are so moist and fudgy they will stick to your fingers.', price: '4$', inCart: false, count: 0},
            {id: uuid(), name: 'Coconut cupcake', img: cupcakeChoice4, description: 'Delicate coconut cupcakes topped with vanilla cream cheese frosting and sweetened shredded coconut.', price: '6$', inCart: false, count: 0},
            {id: uuid(), name: 'Mini Cupcakes', img: cupcakeChoice5, description: 'Available in Red Velvet, Vanilla, Chocolate, and Flourless Chocolate', price: '10$', inCart: false, count: 0}

        ],
        cookiesArr: [
            {id: uuid(), name: '7-layer bars', img: cookieChoice1, description: 'Baked with chocolate chips, coconut, &amp; pecans on a graham cracker crust', price: '10$', inCart: false, count: 0}, 
            {id: uuid(), name:'Chocolate chip cookies', img: cookieChoice2, description:'Everyone’s favorite treat! Baked with brown sugar, butter and semi-sweet chocolate chips', price: '5$', inCart: false, count: 0},
            {id: uuid(), name: 'Molasses Cookie', img: cookieChoice3, description: 'Drizzled with icing!', price: '8$', inCart: false, count: 0},
            {id: uuid(), name: 'Fruit Crumble Bar', img: cookieChoice4, description:'Blueberry filling baked on a shortbread crust topped with crumble. Made without dairy &amp; eggs.', price: '13$', inCart: false, count: 0},
            {id: uuid(), name: 'Whoopie pies', img: cookieChoice5, description: 'Susie’s exclusive! Two thick, chewy chocolate cookies sandwiched with vanilla buttercream', price: '15$', inCart: false, count: 0}
        ],
        piesArr : [
            {id: uuid(), name: 'Banana Cream Pie', img: pieChoice1, description: `A flaky pie crust is filled with fresh bananas and a rich creamy vanilla layer. It's all topped off with whipped topping.`, price: '25$', inCart: false, count: 0},
            {id: uuid(), name:`Hershey's Creamy Milk Chocolate Pudding Pie`, img: pieChoice2, description: 'This chocolate pudding comes out so smooth and creamy, and the pie filling is easy to make from scratch.', price: '20$', inCart: false, count: 0},
            {id: uuid(), name: 'Chocolate and vanilla pudding pie', img: pieChoice3, description: 'This sweet-tooth-satisfying dessert is light with just enough sugar to kick your craving—we love it when we don’t have to feel guilty about consuming chocolate and vanilla. ', price: '18$', inCart: false, count: 0},
            {id: uuid(), name: 'Tart Cherry Lattice Pie', img: pieChoice4, description: 'Tart cherries have a sweet and sour flavour while they other ones are popular for their sweetness which may range from mild to intense.', price: '10$', inCart: false, count: 0},
            {id: uuid(), name: 'Summer Fruit Tart', img: pieChoice5, description: 'This tart includes a sweet, cookie-like crust, creamy lemon filing and can be topped with any assortment of fruit you like.', price: '18$', inCart: false, count: 0}
        ]
    }

    const [state, setState] = React.useState({cakesArr:false, cupcakesArr: false, cookiesArr:false, piesArr: false})
    const [catalogData, setCatalogData] = React.useState(catalog)
    

    React.useEffect(() => {
        localStorage.setItem('catalog', JSON.stringify(catalogData))
    }, [catalogData])

    const addInCart = (id, type) => {
        const newCatalog =  catalogData
        
        newCatalog[type].forEach((item, index, arr) => {
            console.log(item.id === id)
            if(item.id === id) {
                item.inCart = true
                item.count = 1
            }
        })
        setCatalogData({...newCatalog})
        console.log(newCatalog)
    }

    const removeCart = (id, type) => {
        const newCatalog = catalogData
        newCatalog[type].forEach((item, index, arr) => {
            console.log(item.id === id)
            if(item.id === id) {
                item.inCart = false
            }
        })
        setCatalogData({...newCatalog})
        console.log(newCatalog)
        return (
            <Cart type={type} />
        )
    }

    const [open, setOpen] = React.useState(false)

    const openMenuCake = (type, id) => {
        console.log(catalogData[type])
        
        return (
            //<NavLink to='/cart'> 
                <div className={styles.menuBlock}>
                    {catalogData[type] && catalogData[type].map(item => (
                        <div className={styles.item} key={item.id}>
                            <img src={item.img} onClick={() => setOpen(true) }/>
                            <h3> {item.name} </h3>
                            <p> {item.description} </p>
                            <p> <b> {item.price} </b></p>
                            <button onClick={() => addInCart(item.id, type) }> Order </button>
                            <button onClick={() => removeCart(item.id, type) }> Remove </button>
                            <Modal id={item.id} catalogData={catalogData[type]} open={open} setOpen={setOpen}/> 
                        </div>
                    ))}
                </div>
            //</NavLink>
        )
    }

    return (
        <div className={styles.menu}>
            <div className={styles.title}> Menu </div>
            <div>
                
                <div className={styles.imgChoice}>
                    <div>
                        <img onClick={() => setState({...state, cakesArr:true, cookiesArr: false, cupcakesArr: false, piesArr: false})} src={menuCake} alt="#" />
                        <h2> Cakes </h2>
                    </div>
                    <div>
                        <img onClick={() => setState({...state, cakesArr:false, cookiesArr: false, cupcakesArr: true, piesArr: false})} src={menuCupcake} alt="#" />
                        <h2> Cupcakes </h2>
                    </div>
                    <div>
                        <img onClick={() => setState({...state, cookiesArr:true, cakesArr:false, cupcakesArr: false, piesArr: false})} src={menuCookies} alt="#" />
                        <h2> Cookies and bars </h2>
                    </div>
                    <div>
                        <img onClick={() => setState({...state, cookiesArr:false, cakesArr:false, cupcakesArr: false, piesArr: true})} src={menuPuddings} alt="#" />
                        <h2> Pies and puddings </h2>
                    </div>
                    
                </div>
                {state.cakesArr && openMenuCake('cakesArr')}
                {state.cookiesArr && openMenuCake('cookiesArr')}
                {state.cupcakesArr && openMenuCake('cupcakesArr')}
                {state.piesArr && openMenuCake('piesArr')}
            </div>
            
        </div>
        
    )
}

export default Menu