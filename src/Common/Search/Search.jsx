import { useState } from "react";

import styles from './search.module.css'

const SearchBar = () => {
    
    const [value,setValue] = useState("")
    
    const changeHandler = (e) =>{
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