

const Product = (props) => {

    // console.log(props);
    return (
        <div>
            <p>product name : {props.title}</p>
            <p>product price: {props.price}</p>
        </div>
    );
}

export default Product;