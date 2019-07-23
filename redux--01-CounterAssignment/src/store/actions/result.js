import * as actionTypes from './actionTypes';

export const saveResult = result =>{
    return {
        type:actionTypes.STORE_RESULT,
        result:result
    } 
}
export const storeResult = (result) => {
    // thunk is making dispatch method available in this actionCreator
    // so that it can be used after using async code
    return function(dispatch){        
        setTimeout(()=>{
            dispatch(saveResult(result))

        },2000);
    }
}

export const deleteResult = (id) => {
    return {
        type:actionTypes.DELETE_RESULT,
        elementId:id
    }
}