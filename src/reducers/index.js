import {combineReducers} from 'redux';
import addProductReducer from './addProductReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    addProductReducer,
    cartReducer
})

export default rootReducer;