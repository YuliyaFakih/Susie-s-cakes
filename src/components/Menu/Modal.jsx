import Modal from '@material-ui/core/Modal';
import React, {useState} from 'react'
import styles from './Menu.module.css'

export default ({id, catalogData, open , setOpen}) => {
    debugger
    return (
        <Modal className={styles.modal}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
        <div className={styles.modalWindow}>
            
        {catalogData.filter(item => item.id === id).map((item) => (
                    
                    <div className={styles.block} key={item.id}>
                     <h3> {item.name} </h3>
                     <img src={item.img} />
                     <p> {item.description} </p>
                     <span> <b> {item.price} </b> </span>
                    </div>
            
                
             ))}
        </div>
        </Modal>

    )
    
    
}