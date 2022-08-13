import { useState } from "react";
import { SetProductsActions } from "../../components/Providers/ProductsProviders";

import styles from './search.module.css'

const SearchBar = ({filter}) => {
    // console.log(filter);
    const dispatch = SetProductsActions()
    const [value,setValue] = useState("")
    
    const changeHandler = (e) =>{
        dispatch({type:"filter",selectedOption:filter})
        dispatch({type:"search",event:e})
        setValue(e.target.value);
    }

    return (
        <div className={styles.formControl}>
            <div>search </div>
            <input 
                type="text" 
                placeholder="search for ..."
                onChange={changeHandler} 
                value={value}
            />
        </div>
    );
}

export default SearchBar;