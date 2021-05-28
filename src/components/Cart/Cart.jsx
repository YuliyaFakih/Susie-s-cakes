import React, {useState}  from 'react'
import styles from './Cart.module.css'

const Cart = () => {
    
    const [catalogData, setCatalogData] = React.useState(JSON.parse(localStorage.getItem('catalog')) || [])
    const [totalPrice, setTotalPrice] = useState(catalogData && Object.keys(catalogData).flat().map(item => ({count: 0, price: Number.parseInt(item.price)})))
    console.log(totalPrice, catalogData)
    const changeCount = (event, index) => {
        const newTotalPrice = totalPrice.map((item, idx) => idx === index ? {...item, count: event.currentTarget.value} : item)
        setTotalPrice(newTotalPrice)
    }
    const removeCart = (id) => {
        debugger
        const newCatalog = catalogData.map((item) => item.id === id ? {...item, inCart: false} : item)
        console.log(newCatalog)
        //catalogData[type] = newCatalog
        //console.log(catalogData[type]) 
        setCatalogData(newCatalog)
        
    }
    return (
        
        <div className={styles.container}>
             <div> Number of items: 
               {totalPrice && totalPrice.reduce((sum, item) => +item.count + sum, 0)}
             </div>
             <div className={styles.products}>
            {catalogData && Object.keys(catalogData).map((item) => catalogData[item]).flat().filter(item => item.inCart).map((item, index) => (
                    
                   <div className={styles.block} key={item.id}>
                    <span> {item.name} </span>
                    <img src={item.img} />
                    <span> {item.description} </span>
                    <span> {item.price} </span>
                    <input type="number" min="1"
                    value={totalPrice[index].count}
                    onChange={(event) => changeCount(event, index)} />
                    <button className={styles.buttonRemove} onClick={() => removeCart(item.id)}>Remove from cart</button>
                   </div>
           
               
            ))}
            </div>
        </div>
    )
}

export default Cart