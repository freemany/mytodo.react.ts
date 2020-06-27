import React from 'react';
import { TodoItemInterface } from './../interfaces/Todo';
import storeFactory from './../store';
import { editTodo, toggleEditingTodo } from './../store/actions/todoAction';

export interface Props {
    index: number,
    todo: TodoItemInterface;
    handleTodoRemove: (index: number) => void;
}

const TodoListItem = ({ index, todo, handleTodoRemove }: Props) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleSave = (index, isEditing) => {
        const task = inputRef && inputRef.current ? inputRef.current.value : ''
        if (true === isEditing) {
            storeFactory.dispatch(editTodo(index, task));
        }
        storeFactory.dispatch(toggleEditingTodo(index));
    };
    const onChangeHandler = (value) => value;

    return (
        <li className="list-group-item">
            {true === Boolean(todo.isEditing) ? <input defaultValue={todo.task} ref={inputRef} onChange={() => { onChangeHandler(todo.task) }} /> : todo.task}
            <button onClick={() => handleSave(index, todo.isEditing)}>
                {true === Boolean(todo.isEditing) ? 'Save' : 'Edit'}
            </button>
            <button onClick={() => handleTodoRemove(index)}>X</button>
        </li>
    )
};

export default TodoListItem;