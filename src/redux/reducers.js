import { combineReducers } from 'redux'
import {saveProduct} from './actions'

const initialState = {
    savedObject: {},
    saveObjectError: null,
    objects: [],
  };

export const rootReducer = combineReducers({

});

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_OBJECT_SUCCESS':
            return{
                ...state,
                savedObject: action.payload,
                saveObjectError: null,
            };
        case 'SAVE_OBJECT_ERROR':
            return {
                ...state,
                saveObjectError: action.payload,
            };
        case 'FETCH_OBJECTS_SUCCESS':
            return {
                ...state,
                objects: action.payload,
                fetchObjectsError: null,
            };
        case 'FETCH_OBJECTS_ERROR':
            return {
                ...state,
                fetchObjectsError: action.payload,
            };
        default: return state
    }
}
