import C from './../constants';
import { TodoItemInterface, ReducerInterface } from './../../interfaces/Todo';

const listTodos = (todos: TodoItemInterface): ReducerInterface => {
    return {
        type: C.LIST_TODOS,
        payload: todos
    };

};

const addTodo = (todo: TodoItemInterface): ReducerInterface => {
    return {
        type: C.ADD_TODO,
        payload: todo
    }
};

const removeTodo = (index: number): ReducerInterface => {
    return {
        type: C.REMOVE_TODO,
        payload: index
    }
};

const editTodo = (index: number, task: string): ReducerInterface => {
    return {
        type: C.EDIT_TODO,
        payload: { index, task }
    }
};

const toggleEditingTodo = (index: number): ReducerInterface => {
    return {
        type: C.TOGGLE_EDITING_TODO,
        payload: index
    }
};

export { listTodos, addTodo, removeTodo, editTodo, toggleEditingTodo };