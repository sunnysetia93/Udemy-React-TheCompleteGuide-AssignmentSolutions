import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    counter:0
}
const reducer = (state=initialState,action) =>{

    switch(action.type){
        case actionTypes.INCREMENT:
            const updatedState = Object.assign({},state);
            updatedState.counter = state.counter + 1;
            return updatedState;
        case actionTypes.DECREMENT:
            return updateObject(state,{counter:state.counter-1});
        case actionTypes.ADD:
            return updateObject(state,{counter:state.counter+action.value});
        case actionTypes.SUB:
            return updateObject(state,{counter:state.counter-action.value});
    }
    return state;
}

export default reducer;