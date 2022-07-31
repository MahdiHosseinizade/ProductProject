import './App.css'
import Navbar from './components/Navbar/Navbar';
import Products from "./components/ProductList/ProductList";

import { useState } from 'react';

const App = () => {
    
    const [products,setProducts] = useState([
        {title : "React.js" , price : 99,id:1 , quantity : 5},
        {title : "Ruby" , price : 36 , id:2 , quantity : 6},
        {title : "Python" , price : 60, id:3 ,quantity : 7},
    ])

    const deleteHandler = (id) =>{
        const filteredProduct = products.filter((item) => item.id !== id)
        setProducts(filteredProduct)
    }

    const incrementHandler = (id) =>{
        const copiedProducts = [...products] ;
        const selectedItem = copiedProducts.find((item) => item.id === id)
        selectedItem.quantity++;
        setProducts(copiedProducts)
    }

    const inputHandler = (e,id) =>{
        // console.log(e.target.value,id);
        const copiedProducts = [...products] ;
        const seletctedItem = copiedProducts.find((item) => item.id === id)
        seletctedItem.title = e.target.value;
        setProducts(copiedProducts);
    }

    const decrementHandler = (id) =>{
        const copiedProducts = [...products]
        const selectedItem = copiedProducts.find((item) => item.id === id);
        if (selectedItem.quantity === 1) {
            const filteredProduct = copiedProducts.filter((item) => item.id !== id)
            setProducts(filteredProduct)
        }else{
            selectedItem.quantity-=1
            setProducts(copiedProducts)
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