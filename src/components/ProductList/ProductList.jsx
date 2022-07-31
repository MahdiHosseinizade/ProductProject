import Product from "../Product/Product";


const Products = ({products,onDelete,onIncrement,onDecrement,onInput}) => {
    
    

    
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
                        onIncrement = {() =>onIncrement(product.id)}
                        onDecrement = {() => onDecrement(product.id)}
                        onDelete = {() => onDelete(product.id)}
                        onInput = {(e) =>onInput(e,product.id)}
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