
import { UseProducts } from '../Providers/ProductsProviders';
import styles from './navabr.module.css'


const Navbar = () => {
    const products = UseProducts();
    // console.log(products.length);
    return (
        <header className={styles.navbar}>
            <h2>lorem ipsum</h2>
            <span>{products?.length}</span>
        </header>
    );
}

export default Navbar;