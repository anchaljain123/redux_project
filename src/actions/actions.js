
import {
    FETCH_USERS_STARTED,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED,
    POST_USERS_FAILED,
    POST_USERS_SUCCESS,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILED,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILED,

} from '../config/constants'


export function fetchUserStarted(){
    return {type:FETCH_USERS_STARTED}
}

export function fetchUserSuccess(products) {
    return {type:FETCH_USERS_SUCCESS,products }

}

export function fetchUserFailed(err) {
    return  {type:FETCH_USERS_FAILED,err}

}

export function postUserFailed(err) {
    return {type:POST_USERS_FAILED,err}
}

export function postUserSuccess(data) {
    return {type:POST_USERS_SUCCESS,data}

}

export function deleteProductSuccess(products) {
    return { type:DELETE_PRODUCT_SUCCESS , products}
}

export function deleteProductFailed(err) {
    return { type:DELETE_PRODUCT_FAILED,err }
}

export function updateProductSuccess(product) {
    return { type: UPDATE_PRODUCT_SUCCESS,product }
}

export function updateProductFailed(err) {
    return { type: UPDATE_PRODUCT_FAILED ,err}
}