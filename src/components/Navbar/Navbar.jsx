
import styles from './navabr.module.css'


const Navbar = ({products}) => {

    return (
        <header className={styles.navbar}>
            <h2>shopping App</h2>
            <span>{products.length}</span>
        </header>
    );
}

export default Navbar;