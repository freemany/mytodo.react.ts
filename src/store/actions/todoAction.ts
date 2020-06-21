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

export { listTodos, addTodo };