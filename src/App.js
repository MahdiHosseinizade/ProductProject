import './App.css'
import Filter from './components/Filter/Filter';
import Navbar from './components/Navbar/Navbar';
import Products from "./components/ProductList/ProductList";


import ProductsProviders from './components/Providers/ProductsProviders';
import { SetProductsActions, UseProducts } from './components/Providers/ProductsProviders';



const App = () => {

    const products = UseProducts();
    const setProducts = SetProductsActions();
    
    // const [products,setProducts] = useState()

    
// to use context 
//1. createContext 
//2. export 
//3. provider
//4. useContext

    return (
        <div className='container'>
            <ProductsProviders>
                <Navbar />
                <Filter/>
                <Products/>
            </ProductsProviders>
        </div>
    );
}
export default App;
// export default Wrapper(App,"container");