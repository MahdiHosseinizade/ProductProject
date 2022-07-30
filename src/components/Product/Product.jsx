import styles from './product.module.css'

const Product = ({product,onIncrement,onDelete,onInput}) => {

    // console.log(props);
    return (
        <div className={styles.product} >
            <p>product name : {product.title} course</p>
            <p>product price: {product.price} $</p>

            <span className={styles.value}>{product.quantity}</span>
            
            <input className = {styles.input} value={product.title} type="text" onChange={onInput}></input>

            <button className={`${styles.button} ${styles.inc}`} onClick={onIncrement}>increment</button>
            <button className={styles.button} onClick={onDelete}>Delete</button>
        </div>
    );
}

export default Product;