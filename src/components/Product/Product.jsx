import styles from './product.module.css'

import {FaTrash} from 'react-icons/fa'
import { useEffect } from 'react';

const Product = ({product,onIncrement,onDelete,onInput,onDecrement}) => {

    // CDM + CDU + CWUM => useEffect
    // useEffect(() =>{
    //     console.log('Product.js CDM' );
    //     return() =>{
    //         console.log('product.js CWUM');
    //     }
    // },[])

    // console.log(props);
    return (
        <div className={styles.product} >
            <p>product name : {product.title} </p>
            <p>product price: {product.price} $</p>

            <span className={styles.value}>{product.quantity}</span>
            
            {/* <input className = {styles.input} value={product.title} type="text" onChange={onInput}></input> */}

            <button className={`${styles.button} ${styles.inc}`} onClick={onIncrement}>+</button>
            <button className={`${styles.button} ${product.quantity === 1 && styles.remove}`} onClick={onDecrement}>{product.quantity === 1 ? <FaTrash/> : <p>-</p>}</button>
            <button className={`${styles.button} ${styles.del}`} onClick={onDelete}>Delete</button>
        </div>
    );
}

export default Product;