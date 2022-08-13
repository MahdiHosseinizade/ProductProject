import './App.css'
import SearchBar from './Common/Search/Search';
import Filter from './components/Filter/Filter';
import Navbar from './components/Navbar/Navbar';
import Products from "./components/ProductList/ProductList";


import ProductsProviders from './components/Providers/ProductsProviders';
import { SetProductsActions, UseProducts } from './components/Providers/ProductsProviders';



const App = () => {

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