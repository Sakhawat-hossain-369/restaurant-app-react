
import { combineReducers } from 'redux';
import * as actionType from './actionType';

// const initialState = {
//     dishes: DISHES,
//     comments: COMMENTS,
//     sample: "Hello world!"
// }
const dishReducer = (dishState = { isLoading: false, dishes: [], errMess: null }, action) => {
    switch (action.type) {
        case actionType.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                errMess: null,
                dishes: []
            }
        case actionType.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                errMess: null,
                dishes: action.payload
            }
        case actionType.DISHES_FAILED:
            return {
                ...dishState,
                isLoading: false,
                errMess: action.payload,
                dishes: []
            }
    }
    return dishState
}

const commentReducer = (commentState = { isLoading: true, comments: [] }, action) => {
    switch (action.type) {
        case actionType.LOAD_COMMENTS:
            return {
                ...commentState,
                isLoading: false,
                comments: action.payload
            };
        case actionType.COMMENT_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: []

            }
        case actionType.ADD_COMMENT:
            let comment = action.payload;

            return {
                ...commentState,
                comments: commentState.comments.concat(comment)
            }

        default:
            return commentState;


    }
    // if (action.type === "ADD_COMMENT") {
    //     let comment = action.payload;
    //     comment.id = commentState.length;
    //     comment.date = new Date().toDateString();
    //     console.log("from reducer: ", comment);
    //     return commentState.concat(comment)

    // }
    // return commentState
}
// chekout and orders

const initialOrdersState = {
    orders: []
}
export const orderReducer = (orderState = initialOrdersState, action) => {
    switch (action.type) {
        case actionType.ADD_ORDER:
            return {
                ...orderState,
                orders: orderState.orders.concat(action.payload)
            }
        case actionType.ERR_ORDER:
            return {
                ...orderState,
                errMess: action.payload,
            }

        default:
            return orderState;
    }
}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    orders: orderReducer


    // console.log("Action from comment:", action);

})