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

export const  SetProductsActions = () => {
    const setProducts = useContext(ProductContextDispacher);
    const products = useContext(ProductContext);
    const deleteHandler = (id) =>{
        const filteredProduct = products.filter((item) => item.id !== id)
        setProducts(filteredProduct)
    }

    const incrementHandler = (id) =>{

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
    };
    return{deleteHandler,incrementHandler,inputHandler,decrementHandler}
}
