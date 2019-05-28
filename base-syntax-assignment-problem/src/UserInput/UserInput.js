import React from 'react';
import './UserInput.css'

const userInput = (props)=>{
    const style = {
        backgroundColor:'lightgrey'
    }
    return (
        <div style={style} className="UserInput">
            User Input: <input type="text" value={props.username} onChange={props.changed}/>
        </div>
    )
};

export default userInput;