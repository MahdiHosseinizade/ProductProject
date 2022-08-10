import Product from "../Product/Product";
import { SetProductsActions, UseProducts } from "../Providers/ProductsProviders";


const Products = () => {
    
    const products = UseProducts();
    const {deleteHandler,incrementHandler,inputHandler,decrementHandler} = SetProductsActions();
    
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
                        onIncrement = {() =>incrementHandler(product.id)}
                        onDecrement = {() => decrementHandler(product.id)}
                        onDelete = {() => deleteHandler(product.id)}
                        onInput = {(e) =>inputHandler(e,product.id)}
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