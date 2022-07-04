import Product from "./components/Product/Product";
import { useState } from "react";
import HookObject from "./components/Hook/ObjectHook";
import ArrayHook from "./components/Hook/ArrayHook";

const App = () => {

    const [products, setProducts] = useState([
        {title : "Reactjs" , Price :  99 , index:1},
        {title : "Python"  , Price :  36 , index:2},
    ])

    const clickHandler = () => {
        setProducts([
            {title : "Reactjs" , Price :  69 , index:1},
            {title : "Python"  , Price :  24 , index:2},
        ])
    }

    return (
        <div>
            {products.map((product) =>{
                return <Product 
                    key = {product.index}
                    title = {product.title}
                    price = {product.Price}
                /> 
            })}
            <button onClick ={clickHandler}>watch discount</button> 
            
        </div>
    );
}

export default App;