import React from 'react';

const validationComponent = (props)=>{
    let style={
        margin:"10px",
        color:"red",
        fontWeight:"bold"
    }
    let lengthValidationText = "Text too short";

    if(props.textLength>5){
        lengthValidationText="Text long Enough";
        style.color="green"
    }
    return (
        <div>
            <label style={style}>{lengthValidationText}</label>
        </div>
    );
};

export default validationComponent;