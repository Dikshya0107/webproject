import * as actionTypes from '../constants/productConstant';

// state = {products: []} .....here an empty array(because a set of object is passed) is passed as default value
export const getProductReducer = (state = {products: []}, action) => { 
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { products: action.payload }
        case actionTypes.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};
//here a single object is set as default value because the data od a single object is passed 
export const getProductDetailsReducer = (state = { product: {}}, action) => {
    
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true }
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_RESET: 
            return {
                product: {}
            }
        default:
            return state
    }
}