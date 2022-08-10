import { createContext, useContext, useState } from "react";

const ProductContext = createContext();
const ProductContextDispacher = createContext();

const ProductsProviders = ({children}) => {
    
    const [products,setProducts] = useState([
        {title : "React.js" , price : 99,id:0 , quantity : 3},
        {title : "Ruby" , price : 36 , id:1 , quantity : 2},
        {title : "Python" , price : 60, id:2 ,quantity : 2}
    ])
        
    return (
        <ProductContext.Provider value={products}>
            <ProductContextDispacher.Provider value={setProducts}>
                {children}
            </ProductContextDispacher.Provider>
        </ProductContext.Provider>
    );
}

export default ProductsProviders;

export const UseProducts = () => useContext(ProductContext);
export const  SetProductsActions = () => useContext(ProductContextDispacher);