import {
    fetchUserStarted,
    fetchUserSuccess,
    fetchUserFailed,
    postUserFailed,
    postUserSuccess,
    deleteProductSuccess,
    deleteProductFailed,
    updateProductFailed,
    updateProductSuccess,

} from './actions'
import fetch from 'isomorphic-fetch'
const userDetail ={
    'fname':'anchal',
    'lname':'jain'
}

export const asyncAction = () => {
    return (dispatch) => { // this is store's dispatch method
        dispatch(fetchUserStarted()); // call started
        fetch('http://localhost:4000/products')
            .then(response => response.json())
            .then(products => {
                dispatch(fetchUserSuccess(products)); // success
            })
            .catch(err => {
                dispatch(fetchUserFailed(err));// failure
            });
    }
};

export const asyncPostAction = () => {
    return (dispatch) => {

        fetch('http://localhost:4000/products',{
            method:'post',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(userDetail),
        })
            .then(data => {
                dispatch(postUserSuccess(data));
            })
            .catch(err => {
                dispatch(postUserFailed(err));
            });
    }
};

export const asyncDeleteAction = (product) => {

    console.log("product",product)
    return (dispatch) => {

        fetch('http://localhost:4000/products',{
            method:'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({name: product}),
        })
            .then(data => {
                dispatch(deleteProductSuccess(data));
            })
            .catch(err => {
                dispatch(deleteProductFailed(err));
            });
    }
};

export const asyncUpdateAction = (product) => {

    return (dispatch) => {

        fetch('http://localhost:4000/products',{
            method:'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({name: product}),
        })
            .then(data => {
                dispatch(updateProductSuccess(data));
            })
            .catch(err => {
                dispatch(updateProductFailed(err));
            });
    }
};