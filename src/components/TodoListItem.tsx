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

    const handleSave = () => {
        const task = inputRef && inputRef.current ? inputRef.current.value : ''
        storeFactory.dispatch(editTodo(index, task));
        storeFactory.dispatch(toggleEditingTodo(index))
    };
    const onChangeHandler = (value) => value;
    const toggleEdit = (index) => {
        storeFactory.dispatch(toggleEditingTodo(index));
    };

    return (
        <li className="list-group-item">
            {true === Boolean(todo.isEditing) ? <div><input defaultValue={todo.task} ref={inputRef} onChange={() => { onChangeHandler(todo.task) }} /><button onClick={() => handleSave()}>Save</button></div> : todo.task}

            <button onClick={() => handleTodoRemove(index)}>X</button>
            <button onClick={() => { toggleEdit(index) }}>Edit</button>
        </li>
    )
};

export default TodoListItem;