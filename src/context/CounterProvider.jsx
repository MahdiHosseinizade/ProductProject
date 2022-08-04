//to use context 
//1. createContext 
//2. export 
//3. provider
//4. useContext

import { createContext, useState } from "react";

export const counetrContext = createContext();
export const counetrContextDispacher = createContext();

const CounterProvider = ({chilren}) => {
    
    const [count , setCount] = useState(0)
    
    return (
        <div>
            <counetrContext.Provider value={count}>
                <counetrContextDispacher.Provider value={setCount}>
                    {chilren}
                </counetrContextDispacher.Provider>
            </counetrContext.Provider>
        </div>
    );
}
 
export default CounterProvider;