import { createContext, useContext, useReducer } from "react";
import { productsData } from "../../db/products";


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
            const index = state.findIndex((p) => p.id === action.id)
            const product = state[index];
            if (product.quantity === 1) {
                const filteredProduct = state.filter((p) => p.id !== action.id)
                return(filteredProduct)
            }else{
                product.quantity--;
                const AllProducts = [...state];
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
            console.log(action.event.target.value);
            if (action.event.target.value === "") {
                return productsData
            }else{
                const updatedProduct = productsData.filter((p) => p.availableSizes.indexOf(action.event.target.value) >= 0)
                return updatedProduct;
            }
        }
        default:
            break;
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
    // const products = useContext(ProductContext);
    // const deleteHandler = (id) =>{
    //     const filteredProduct = products.filter((p) => p.id !== id)
    //     setProducts(filteredProduct)
    // }

    // const incrementHandler = (id) =>{

    //     const index = products.findIndex((p) => p.id === id);
    //     const product = {...products[index]}
    //     product.quantity ++;

    //     const AllProducts = [...products];
    //     AllProducts[index] = product;
    //     setProducts(AllProducts);
    // }

    // const inputHandler = (e,id) =>{
        // console.log(e.target.value,id);
    //     const index = products.findIndex((p) => p.id === id)
    //     const product = products[index] ;
    //     product.title = e.target.value ; 
        
    //     const AllProducts = [...products]
    //     AllProducts[index] = product;
    //     setProducts(AllProducts);
    // }

    // const decrementHandler = (id) =>{
    //     const index = products.findIndex((p) => p.id === id)
    //     const product = products[index];
    //     if (product.quantity === 1) {
    //         const filteredProduct = products.filter((p) => p.id !== id)
    //         setProducts(filteredProduct)
    //     }else{
    //         product.quantity--;
    //         const AllProducts = [...products];
    //         AllProducts[index] = product;
    //         setProducts(AllProducts);
    //     }
    // };
    // return{deleteHandler,incrementHandler,inputHandler,decrementHandler}
}
