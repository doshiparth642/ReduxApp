import {combineReducers} from 'redux';
import {productsReducer , selectedproductReducer } from './productReducer';

const reducer = combineReducers({
    allProducts: productsReducer,
    product: selectedproductReducer
})

export default reducer