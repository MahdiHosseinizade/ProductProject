import Product from "../Product/Product";
import { SetProductsActions, UseProducts } from "../Providers/ProductsProviders";


const Products = () => {
    
    const products = UseProducts();
    const dispatch = SetProductsActions();
    
    const rendredProduct = () =>{
        if (products.length === 0) {
            return(
                <div>There is no item in cart</div>
            )
        }
        return(
            products.map((product,index)=>{
                return(
                    <Product
                        key ={index}
                        product = {product}
                        onIncrement = {() => dispatch({type:"increment" , id:product.id})}
                        onDecrement = {() => dispatch({type:"decrement" , id:product.id})}
                        onDelete = {() => dispatch({type:"remove" , id:product.id})}
                        onInput = {(e) =>dispatch({type:"edit" , id:product.id,event:e})}
                    />
                )
            })
        )
    }
    return (
        <div>
            {!products.length == true && <div>Back to shopping</div>}
            {rendredProduct()}
        </div>
    );
}

export default Products;