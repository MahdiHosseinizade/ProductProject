import './App.css'
import Navbar from './components/Navbar/Navbar';
import Products from "./components/ProductList/ProductList";

import { useState } from 'react';

const App = () => {
    
    const [products,setProducts] = useState([
        {title : "React.js" , price : 99,id:0 , quantity : 3},
        {title : "Ruby" , price : 36 , id:1 , quantity : 2},
        {title : "Python" , price : 60, id:2 ,quantity : 2},
    ])

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

    return (
        <div className="container">
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
        </div>
    );
}

export default App;