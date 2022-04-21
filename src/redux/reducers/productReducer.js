import * as actionTypes from '../constants/actionTypes'


const initialState = {
    products: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SEI_PRODUCTS:
        return { ...state, products: action.payload };

        case actionTypes.FETCH_PRODUCTS:
        return { ...state, products: action.payload };

      default:
        return state;
    }
  };

export const selectedproductReducer = (state = {},action) => {
    switch (action.type) {
        case actionTypes.SELECTED_PRODUCT:
            return {
                ...state,
                ...action.payload,
              
            }
            
            case actionTypes.REMOVE_SELECTED_PRODUCT:
                return { }
        default:
            return state
    }
}