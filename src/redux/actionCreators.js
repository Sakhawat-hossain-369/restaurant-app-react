import * as actionType from './actionType';
import axios from 'axios';
import { baseUrl } from './baseUrl';


// import { actionTypes } from 'react-redux-form';

export const addComment = (dishId, rating, author, comment) => dispatch => {
    const newComment = {
        dishId: Number(dishId),
        author: author,
        rating: Number(rating),
        comment: comment
    }
    newComment.date = new Date().toISOString();

    axios.post(baseUrl + "comments", newComment)
        .then(response => response.data)
        .then(comment => dispatch(commentConcat(comment)))
}
export const commentConcat = (comment) => ({
    type: actionType.ADD_COMMENT,
    payload: comment

})
export const commentLoading = () => ({
    type: actionType.COMMENT_LOADING
})

export const loadComments = comments => ({
    type: actionType.LOAD_COMMENTS,
    payload: comments
})

export const fetchComments = () => dispatch => {
    dispatch(commentLoading());
    axios.get(baseUrl + "comments")
        .then(response => response.data)
        // .then(response => {
        //     console.log("Comments fetched from server:", response.data);
        //     dispatch(loadComments(response.data))
        // })

        .then(comments => dispatch(loadComments(comments)))
        // .then(comments => {
        //     if (!comments) {
        //         console.error("No comments data received");
        //         return;
        //     }
        //     dispatch(loadComments(comments));
        // })
        .catch(error => {

            console.error("Comments fetch error: ", error);
        })
}

export const loadDishes = dishes => ({
    type: actionType.LOAD_DISHES,
    payload: dishes
})
export const dishesLoading = () => ({
    type: actionType.DISHES_LOADING

})
export const dishesFailed = (errMess) => ({
    type: actionType.DISHES_FAILED,
    payload: errMess

})
export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());

        axios.get(baseUrl + "dishes")
            .then(response => response.data)
            .then(dishes => dispatch(loadDishes(dishes)))
            .catch(error => dispatch(dishesFailed(error.message)))

        // setTimeout(() => {
        //     dispatch(loadDishes(DISHES))

        // },
        //     2000);

    }
}

// Chekout and orders 
export const addOrder = (order) => (
    {
        type: actionType.ADD_ORDER,
        payload: order
    }
)

export const orderError = (errMess) => ({
    type: actionType.ERR_ORDER,
    payload: errMess,
})

export const postOrder = (order) => dispatch => {

    axios.post(baseUrl + "orders", order)
        .then(response => response.data)
        .then(order => {
            dispatch(addOrder(order));
            alert(`Order placed Successfully \nName: ${order.name} \nPhone: ${order.phone}`);
        })
        .catch(error => {
            dispatch(orderError(error.message));
            alert("Order could not be placed\nError: " + error.message);

        })
}