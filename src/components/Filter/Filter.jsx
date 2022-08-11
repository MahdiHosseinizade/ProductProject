import { useState } from "react";
import { SetProductsActions } from "../Providers/ProductsProviders";



const Filter = () => {

    const [value,setValue] = useState("")
    const dispatch = SetProductsActions()


    const changeHandler = (e) =>{
        setValue(e.target.value);
        dispatch({type:"filter",event:e})
    }

    return (
        <div>
            <p>filter product</p>
            <div>
                order by
                <select onChange={changeHandler} value={value}>
                    <option value="">All</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
    );
}

export default Filter
