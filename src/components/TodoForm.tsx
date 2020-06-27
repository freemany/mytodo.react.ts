import React from "react";
import { TodoFormInterface } from './../interfaces/Todo';

const TodoForm = (props: TodoFormInterface) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const createTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    props.handleTodoCreate(e, inputRef && inputRef.current ? inputRef.current.value : '');
    if (inputRef && inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <form>
      <input 
        ref={inputRef}
        className="form-control"
        placeholder="What would you like to get done?"
      />
      <button className="btn btn-primary" onClick={(e) => createTodo(e)}>Create</button>
    </form>
  );
};

export default TodoForm;