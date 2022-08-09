//to use context 
//1. createContext 
//2. export 
//3. provider
//4. useContext

import { createContext, useContext, useState } from "react";

const CounetrContext = createContext();
const counetrContextDispacher = createContext();

const CounterProvider = ({chilren}) => {
    
    const [count , setCount] = useState(0)
    
    return (
        <div>
            <CounetrContext.Provider value={count}>
                <counetrContextDispacher.Provider value={setCount}>
                    {chilren}
                </counetrContextDispacher.Provider>
            </CounetrContext.Provider>
        </div>
    );
}
 
export default CounterProvider;

export const useCounter = () => useContext(CounetrContext);
export const useCountActions = () => useContext(counetrContextDispacher);