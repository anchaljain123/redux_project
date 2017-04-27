import thunkMiddleware from 'redux-thunk' ;
import { logger } from './logger';
export const middleware =     [
    logger ,thunkMiddleware
];
