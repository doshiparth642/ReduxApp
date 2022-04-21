import * as actionTypes from '../constants/actionTypes';
import fakeApi from '../api/fakeApi';

export const fetchProducts = (products) => {
    return {
        type: actionTypes.FETCH_PRODUCTS,
        payload: products
    }
}


/*export const setProducts = (products) => {
    return {
        type: actionTypes.SEI_PRODUCTS,
        payload: products
    }
}
*/
export const selectedProduct = (product) => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCT,

    }
}

export function fetchProductList() {
    return (dispatch) => {
            return fakeApi.get('/products')
              .then((response) => {
                dispatch(fetchProducts(response.data))
                console.log(response.data)
               // return res
            })
    
    }
}

/*export const fetchProductList =()=>async(dispatch)=>{
     const response = await fakeApi.get('/products');
     dispatch(fetchProducts(response.data))
}*/

/*export function selectedProductList(id) {
    return (dispatch) => {
        return fakeApi.get(`products/${id}`)
                .then((res) => {
                dispatch(selectedProduct(res.data))
                console.log(res.data)
                return res
            })
    
    }
}*/

export const selectedProductList =(id)=>async(dispatch)=>{
    const response = await fakeApi.get(`/products/${id}`);
    dispatch(selectedProduct(response.data))
}
