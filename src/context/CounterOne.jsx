import { useContext } from "react";
import { counetrContext, counetrContextDispacher } from "./CounterProvider";


const CounterOne = () => {
    
    const count = useContext(counetrContext)
    const setCount = useContext(counetrContextDispacher)

    return (
        <div>
            <p>count is :{count}</p>
            <button onClick={() => setCount(count +1)}></button>
        </div>
    );
}

export default CounterOne;