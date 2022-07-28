import { useState } from "react";
import Product from "./components/Product/Product";

import './App.css'

const App = () => {
    
    const [products,setProducts] = useState([
        {title : "React.js" , price : 99,id:1},
        {title : "Ruby" , price : 36,id:2},
        {title : "Python" , price : 60,id:3},
    ])

    const clikcHandler = () =>{
        console.log('clickHandler clikced!');
    }
    
    return (
        <div className="container">
            <h1>shopping App</h1>
            {products.map((item)=>{
                return(
                    <Product
                        key ={item.id}
                        name = {item.title}
                        price = {item.price}
                        click = {clikcHandler}
                    />
                )
            })}
            <button onClick={clikcHandler}>Change Price</button>
        </div>
    );
}

export default App;