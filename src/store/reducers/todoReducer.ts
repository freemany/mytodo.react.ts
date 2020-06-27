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

        case C.REMOVE_TODO:
            return state.filter((_, i) => i !== action.payload);
        
        case C.EDIT_TODO: 
            const editTodoState = [...state]; 
            editTodoState[action.payload.index].task = action.payload.task;
            
            return editTodoState;

        case C.TOGGLE_EDITING_TODO: 
            const toggleEditingTodoState = [...state]; 
            toggleEditingTodoState[action.payload].isEditing = !toggleEditingTodoState[action.payload].isEditing;
            
            return toggleEditingTodoState;    
    }

    return state;
};

export default todos;