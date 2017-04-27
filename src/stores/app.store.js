
import { createStore ,applyMiddleware } from 'redux'
import {
    reducers
}from '../reducers'
import {
    middleware
} from  '../middlewares'

const Middleware = applyMiddleware(...middleware);
const store = createStore(reducers,Middleware);

export default store;