import { createContext, useContext, useReducer } from "react";
import { productsData } from "../../db/products";

import _ from 'lodash'

const ProductContext = createContext();
const ProductContextDispacher = createContext();

// const initialState = [
//     {title : "React.js" , price : 99,id:0 , quantity : 3},
//     {title : "Ruby" , price : 36 , id:1 , quantity : 2},
//     {title : "Python" , price : 60, id:2 ,quantity : 2}
// ]

const reducer = (state,action) =>{
    switch (action.type) {
        case "increment":{
            const index = state.findIndex((p) => p.id === action.id);
            const product = {...state[index]}
            product.quantity ++;

            const AllProducts = [...state];
            AllProducts[index] = product;
            return(AllProducts);
        }
        case "decrement":{
            const index = state.findIndex((item) => item.id === action.id)
            const product = {...state[index]};
            if (product.quantity === 1) {
                const filteredProduct = state.filter((p) => p.id !== action.id)
                return(filteredProduct)
            }else{
                const AllProducts = [...state];
                product.quantity--;
                AllProducts[index] = product;
                return(AllProducts);
            }
        }
        case "remove":
            const filteredProduct = state.filter((p) => p.id !== action.id)
            return filteredProduct
        case "edit":{
            const index = state.findIndex((p) => p.id === action.id)
            const product = state[index] ;
            product.title = action.event.target.value ; 

            const AllProducts = [...state]
            AllProducts[index] = product;
            return(AllProducts);
        }
        case "filter":{
            // console.log(action.selectedOption.value);
            if (action.selectedOption.value === "") {
                return productsData
            }else{
                const updatedProduct = productsData.filter((p) => p.availableSizes.indexOf(action.selectedOption.value) >= 0)
                return updatedProduct;
            }
        }
        case "sort" :{
            const value = action.selectedOption.value;
            const products = [...state];
            if (value === "lowest") {
                return _.orderBy(products,["price"],["asc"])
            }else{
                return _.orderBy(products,["price"],["desc"])
            }
        }
        case "search":{
            const value = action.event.target.value;

            if (value === "") {
                return productsData;
            }else{
                const filteredProducts = productsData.filter((p) =>p.title.toLowerCase().includes(value.toLowerCase()))
                return filteredProducts ;
            }
        }
        default:
            return state;
    }
}

const ProductsProviders = ({children}) => {
    const [products, dispatch] = useReducer(reducer,productsData)
    
        
    return (
        <ProductContext.Provider value={products}>
            <ProductContextDispacher.Provider value={dispatch}>
                {children}
            </ProductContextDispacher.Provider>
        </ProductContext.Provider>
    );
}

export default ProductsProviders;

export const UseProducts = () => useContext(ProductContext);

export const  SetProductsActions = () => {
    return useContext(ProductContextDispacher);
}
