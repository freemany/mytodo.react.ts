import React from 'react';
import Todo from './TodoListItem';
import { TodoListInterface } from './../interfaces/Todo';

const TodoList = (props: TodoListInterface) => {
    return (
        <ul className="list-group">
            {props.todos.map((todo, index) => <Todo key={index} todo={todo} index={index}
              handleTodoRemove={props.handleTodoRemove} 
            />)}
        </ul>
    );
}

export default TodoList;