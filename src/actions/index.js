import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, SET_FILTER } from '../actiontypes/index.js';

export const addToDo = text => {
    return {
        type: ADD_TODO,
        id: Date.now(),
        text
    };
};

export const deleteToDo = id => {
    return {
        type: DELETE_TODO,
        id
    };
};

export const toggleToDo = id => {
    return {
        type: TOGGLE_TODO,
        id
    };
};

export const setFilter = filter => {
    return {
        type: SET_FILTER,
        filter
    }
};
