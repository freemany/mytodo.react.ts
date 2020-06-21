import C from './../constants';
import { TodoItemInterface, ReducerInterface } from './../../interfaces/Todo';
// import { combineReducers } from 'redux';

const todos = (state: TodoItemInterface[], action: ReducerInterface) => {
    console.log('reducers being called', action);
    switch (action.type) {
        case C.LIST_TODOS:
            return state;

        case C.ADD_TODO:
            return [...state, action.payload];

    }

    return state;
};

export default todos;