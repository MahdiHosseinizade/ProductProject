import { useState } from "react";


const ArrayHook = () => {
    
    const [item, setItem] = useState([])
    // console.log(item);
    const clickHandler = () =>{
        setItem([...item, {id:item.length ,number : Math.floor(Math.random()*10) }])
    }

    return (
        <div>
            <button onClick={clickHandler}>add item</button>
            {item.map ((item) =>{
                return (
                    <li>{item.number}</li>
                )
            })}
        </div>
    );
}
 
export default ArrayHook;