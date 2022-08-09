import { useContext } from "react";
import { useCounter , useCountActions } from "./CounterProvider";


const CounterOne = () => {
    
    const count = useCounter();
    const setCount = useCountActions();

    return (
        <div>
            <p>count is :{count}</p>
            <button onClick={() => setCount(count +1)}></button>
        </div>
    );
}

export default CounterOne;