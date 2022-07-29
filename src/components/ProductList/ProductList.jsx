import Product from "../Product/Product";
import { useState } from "react";

const Products = () => {
    
    const [products,setProducts] = useState([
        {title : "React.js" , price : 99,id:1},
        {title : "Ruby" , price : 36,id:2},
        {title : "Python" , price : 60,id:3},
    ])

    const deleteHandler = (id) =>{
        console.log('DeleteHandler clicked' , id);
        const filteredProduct = products.filter((item) => item.id !== id)
        setProducts(filteredProduct)
    }

    return (
        <div>
            {products.map((item)=>{
                return(
                    <Product
                        key ={item.id}
                        name = {item.title}
                        price = {item.price}
                        onDelete = {() => deleteHandler(item.id)}
                        // click = {clikcHandler}
                    />
                )
            })}
        </div>
    );
}

export default Products;