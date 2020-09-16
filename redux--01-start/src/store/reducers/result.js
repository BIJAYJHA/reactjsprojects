import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility'

const intialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter((result) => result.id !== action.resultElId);
    return updateObject(state, { results: updatedArray });
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.STRORE_RESULT: return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.result * 2 }) })

        case actionTypes.DELETE_RESULT: return deleteResult(state, action);


    }
    return state;
}






export default reducer;