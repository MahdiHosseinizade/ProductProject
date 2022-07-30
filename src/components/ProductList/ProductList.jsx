import Product from "../Product/Product";
import { useState } from "react";

const Products = () => {
    
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

    return (
        <div>
            {products.map((product,index)=>{
                return(
                    <Product
                        key ={index}
                        product = {product}
                        onIncrement = {() => incrementHandler(product.id)}
                        onDelete = {() => deleteHandler(product.id)}
                        onInput = {(e) =>inputHandler(e,product.id)}
                    />
                )
            })}
        </div>
    );
}

export default Products;