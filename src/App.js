import './App.css'
import Navbar from './components/Navbar/Navbar';
import Products from "./components/ProductList/ProductList";

import { useState } from 'react';

import ProductsProviders from './components/Providers/ProductsProviders';
import { SetProductsActions, UseProducts } from './components/Providers/ProductsProviders';



const App = () => {

    const products = UseProducts();
    const setProducts = SetProductsActions();
    
    // const [products,setProducts] = useState()

    const deleteHandler = (id) =>{
        const filteredProduct = products.filter((item) => item.id !== id)
        setProducts(filteredProduct)
    }

    const incrementHandler = (id) =>{
        // const copiedProducts = [...products] ;
        // const selectedItem = copiedProducts.find((item) => item.id === id)
        // selectedItem.quantity++;
        // setProducts(copiedProducts)

        const index = products.findIndex((item) => item.id === id);
        const product = {...products[index]}
        product.quantity ++;

        const AllProducts = [...products];
        AllProducts[index] = product;
        setProducts(AllProducts);
    }

    const inputHandler = (e,id) =>{
        // console.log(e.target.value,id);
        const index = products.findIndex((item) => item.id === id)
        const product = products[index] ;
        product.title = e.target.value ; 
        
        const AllProducts = [...products]
        AllProducts[index] = product;
        setProducts(AllProducts);
    }

    const decrementHandler = (id) =>{
        const index = products.findIndex((item) => item.id === id)
        const product = products[index];
        if (product.quantity === 1) {
            const filteredProduct = products.filter((item) => item.id !== id)
            setProducts(filteredProduct)
        }else{
            product.quantity--;
            const AllProducts = [...products];
            AllProducts[index] = product;
            setProducts(AllProducts);
        }
    }
// to use context 
//1. createContext 
//2. export 
//3. provider
//4. useContext

    return (
        // <div className='container'>
            
        //     <Navbar
        //         products={products}
        //     />
        //     <Products 
        //         products = {products}
        //         onDelete = {deleteHandler}
        //         onIncrement = {incrementHandler}
        //         onDecrement = {decrementHandler}
        //         onInput =  {inputHandler}
        //     />
        // </div>
        <div className='container'>
            <ProductsProviders>
                <Navbar
                    products={products}
                />
                <Products 
                    products = {products}
                    onDelete = {deleteHandler}
                    onIncrement = {incrementHandler}
                    onDecrement = {decrementHandler}
                    onInput =  {inputHandler}
                />
            </ProductsProviders>
        </div>
    );
}
export default App;
// export default Wrapper(App,"container");