import { useState } from "react";


const HookObject = () => {
    
    const [user, setUser] = useState({firstname : "" ,lastname:"" })
    

    const changeHandler = (e) =>{
        setUser({...user,firstname : e.target.value})
    }

    return (
        <div>
            <input onChange={changeHandler} value={user.firstname}></input>
            <p>{user.firstname}</p>
        </div>
    );
}

export default HookObject;