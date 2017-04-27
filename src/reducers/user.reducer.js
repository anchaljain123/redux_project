import {
    FETCH_USERS_STARTED,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED,
    POST_USERS_SUCCESS,
    POST_USERS_FAILED,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILED,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILED,

}from '../config/constants'

const initialState ={
    products : [],
    loading : true,
    err:'',
};

export const reducers = (state=initialState,action) =>{
    switch(action.type){
        case FETCH_USERS_STARTED :
            return{
                ...state,
                loading:true,

            }
        case  FETCH_USERS_SUCCESS:{
            const products = state.products.concat(action.products);

          return{
                ...state,
              products:products,
                loading:false

            }
        }
        case FETCH_USERS_FAILED:{
            return{
                ...state,err:action.err
            }
        }

        case POST_USERS_SUCCESS:{
            console.log(action.data,"---------")

        }

        case POST_USERS_FAILED:{
            return{
                ...state,
                err:action.err,
            }
        }

        case DELETE_PRODUCT_SUCCESS :{
            let products = action.products;
            return{
                ...state,
                products:products,
                loading:false
            }
        }

        case DELETE_PRODUCT_FAILED:{
            return{
                ...state,err:action.err
            }
        }

        case UPDATE_PRODUCT_SUCCESS:{
            let products = action.product;
            return{
                ...state,
                products:products,
                loading:false
            }
        }

        case UPDATE_PRODUCT_FAILED:{
            return{
                ...state,err:action.err
            }
        }
    }
    return state;
}
