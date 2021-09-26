import React, {useState}  from 'react'
import styles from './Cart.module.css'

const Cart = () => {
    
    const [catalogData, setCatalogData] = React.useState(JSON.parse(localStorage.getItem('catalog')) || [])
    const [totalPrice, setTotalPrice] = useState(catalogData && Object.values(catalogData).flat().map(item => ({...item,  price: Number.parseInt(item.price)})))
    console.log(totalPrice)

    const changeCount = (event, index) => {
        
        const newTotalPrice = totalPrice.filter(item => item.inCart).map((item, idx) => idx === index ? {...item, count: event.currentTarget.value} : item)
        setTotalPrice(newTotalPrice)
        console.log(newTotalPrice)
    }

    const removeCart = (itemId) => {
        const newCatalog = [...totalPrice]
        newCatalog.filter(item => item.id === itemId).forEach((item, index, arr) => {
                item.inCart = false
                item.count = 0
        })
        setCatalogData([...newCatalog])
        
    }
    
    return (
        
        <div className={styles.container}>
            <div> Number of items: 
                {totalPrice && totalPrice.reduce((sum, item) => +item.count + sum, 0)}
             </div>
             <div> Total price: 
               {totalPrice && totalPrice.reduce((sum, item) => (+item.count * item.price) + sum, 0)} &#x24;
             </div>
             <div className={styles.products}>
            {catalogData && Object.values(catalogData).flat().filter(item => item.inCart).map((item, index) => (
                    
                   <div className={styles.block} key={item.id}>
                    <span> {item.name} </span>
                    <img src={item.img} alt="#"/>
                    <span> {item.description} </span>
                    <span> {item.price} </span>
                    <input type="number" min="1"
                    value={(totalPrice[index].count) || 1}
                    onChange={(event) => changeCount(event, index)} />
                    <button className={styles.buttonRemove} onClick={() => removeCart(item.id)}>Remove from cart</button>
                   </div>
            ))}
            </div>
        </div>
    )
}

export default Cart
