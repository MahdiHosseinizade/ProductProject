import { useReducer, useState } from "react";

const initialstate = {
    firstCounter : 0,
}
const reducer = (state,action) =>{
    switch (action.type) {
        case 'addOne':
            return {firstCounter : firstCounter + 1 } ;
        case 'addFive':
            return {firstCounter : firstCounter + 5 } ; ;
        case 'decrement':
            return {firstCounter : firstCounter - 1 } ; ;
        default:
            return state;
    }
}

const CountReducer = () => {

    
    // 1 -> useState => state managment
    // 2 -> reducer
    // steps :
    // 1 -> import useReducer()
    // 2 -> useReducer(reducer,initialState)
    // 3 -> retrurn :[count,dispach]
    // 4 -> reducer(state,action)

    const [count, dispatch] = useReducer(reducer, initialstate)


    // const addOne = () =>{
    //     setCount((prevCount) => prevCount + 1)
    // }

    // const addFive = () =>{
    //     setCount((prevCount) => prevCount + 5)
    // }

    
    // const decrement = () =>{
    //     setCount((prevCount) => prevCount - 1)
    // }
    return (
        <div>
            <h2>count is : {count}</h2>
            <button onClick={() => dispatch({type : "addOne"})}>addOne</button>
            <button onClick={() =>dispatch({type : "addOne"})}>addFive</button>
            <button onChange={() => dispatch({type : "addOne"})}>decremnt</button>
        </div>
    );
}

export default CountReducer;