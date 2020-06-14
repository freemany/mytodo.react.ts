import React from 'react';
import { TodoItemInterface } from './../interfaces/Todo';

export interface Props {
    index: number,
    todo: TodoItemInterface;
    handleTodoRemove: (index: number) => void;
}

const TodoListItem = ({ index, todo, handleTodoRemove }: Props) => {

     return <li className="list-group-item" onClick={() => handleTodoRemove(index)} >{todo.task}</li>
};

export default TodoListItem;