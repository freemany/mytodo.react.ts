import React from 'react';
import { TodoItemInterface } from './../interfaces/Todo';

export interface Props {
    todo: TodoItemInterface;
}

const TodoListItem = ({ todo }: Props) => {
     return <li className="list-group-item">{todo.task}</li>
};

export default TodoListItem;