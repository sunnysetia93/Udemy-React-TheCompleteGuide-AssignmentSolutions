import React from 'react';
import './UserOutput.css'
const userOutput = (props)=>{
    return (
        <div className="UserOutput">
            <p className="para1">Text from <span>{props.username}</span>:</p>
            <p className="para2">{props.textData}</p>
        </div>
    )
};

export default userOutput;