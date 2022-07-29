import Product from "../Product/Product";
import { useState } from "react";

const Products = () => {
    
    const [products,setProducts] = useState([
        {title : "React.js" , price : 99,id:1},
        {title : "Ruby" , price : 36,id:2},
        {title : "Python" , price : 60,id:3},
    ])

    return (
        <div>
            {products.map((item)=>{
                return(
                    <Product
                        key ={item.id}
                        name = {item.title}
                        price = {item.price}
                        // click = {clikcHandler}
                    />
                )
            })}
        </div>
    );
}

export default Products;