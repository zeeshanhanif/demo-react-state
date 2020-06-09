import React, { useState } from 'react';
import './Room.css'

function Room() {

    //const state = useState(true);
    //console.log("State = ",state);
    let [isLit, setLit] = useState(false);
    let [age , setAge] = useState(24);
    
    //let hello = 'Hello '+ isLit +'World';
    //let hello = `Hello ${isLit} World`;

    return (
    <div className={`room ${isLit? "lit": "dark"}`}> 
        This Room is {isLit? "lit": "dark"}
        <br/>
        Age: {age}
        <br/>
        <button onClick={()=> setLit(!isLit) } >Toggle Light</button>
        <br/>
        <button onClick={ ()=> {
                        console.log("Increase age arrow function");
                        setAge(++age);
                        }}>
            Increase Age
        </button>
    </div>
    );
}

export default Room;
