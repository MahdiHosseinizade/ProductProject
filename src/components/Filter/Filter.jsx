import { useState } from "react";
import Select from "react-select";
import { SetProductsActions } from "../Providers/ProductsProviders";

import styles from './filter.module.css'

const options = [
    {value:"",label:"All"},
    {value:"Xs",label:"Xs"},
    {value:"S",label:"S"},
    {value:"M",label:"M"},
    {value:"L",label:"L"},
    {value:"XL",label:"XL"},
    {value:"XLL",label:"XXL"},
]

const sortOptions = [
    {value:"highest",label:"highest"},
    {value:"lowest",label:"lowest"},
]

const Filter = () => {

    const [value,setValue] = useState("")
    const [sort,setSort] = useState("")

    const dispatch = SetProductsActions()


    const changeHandler = (selectedOption) =>{
        setValue(selectedOption);
        dispatch({type:"filter",selectedOption:selectedOption})
        dispatch({type:"sort",selectedOption:sort})
        // console.log(selectedOption);
    }

    const sortHandler = (selectedOption) =>{
        setSort(selectedOption);
        dispatch({type:"sort",selectedOption:selectedOption})
        // console.log(selectedOption);
    }


    return (
        <div className={styles.filter}>
            <p>filter product</p>
            <div className={styles.selectContainer}>
                <span>order by</span>
                <Select 
                    value={value}
                    onChange={changeHandler}
                    options={options}
                    className={styles.select}
                />
            </div>
            <div className={styles.selectContainer}>
                <span>sort by</span>
                <Select 
                    value={sort}
                    onChange={sortHandler}
                    options={sortOptions}
                    className={styles.select}
                />
            </div>
        </div>
    );
}

export default Filter
