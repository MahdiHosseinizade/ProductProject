import { useState } from "react";
import Select from "react-select";
import SelectComponent from "../../Common/Select/Select";
import { SetProductsActions } from "../Providers/ProductsProviders";
import SearchBar from "../../Common/Search/Search";
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
    // console.log(value);
    const dispatch = SetProductsActions()


    const changeHandler = (selectedOption) =>{
        dispatch({type:"filter",selectedOption:selectedOption})
        dispatch({type:"sort",selectedOption:sort})
        setValue(selectedOption);
        // console.log(selectedOption);
    }

    const sortHandler = (selectedOption) =>{
        dispatch({type:"sort",selectedOption:selectedOption})
        setSort(selectedOption);
        // console.log(selectedOption);
    }


    return (
        <section >
            <SearchBar filter={value}/>
            <div className={styles.filter}>
                <p>filter product</p>
                <SelectComponent
                    title="sort by size"
                    value={value}
                    onChange={changeHandler}
                    options={options}
                />
                <SelectComponent
                    title="sort by price"
                    value={sort}
                    onChange={sortHandler}
                    options={sortOptions}
                />
            </div>
        </section>
    );
}

export default Filter
