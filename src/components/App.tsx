import React , { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { TodoItemInterface } from './../interfaces/Todo';
import initialTodo from './../store/initial';
// import { BehaviorSubject } from 'rxjs';

// const test = new BehaviorSubject(null);
// test.next(null);

const App = () => {
    const [todos, setTodos] = useState<Array<TodoItemInterface>> (initialTodo);
    const handleTodoCreate = (event: React.MouseEvent, task: string) => {
        event.preventDefault();
        if (!task) {
            return;
        }
        const newTodo: TodoItemInterface = {
            task,
            finished: false
        };

        setTodos([...todos, newTodo]);
    };
    return (
    <div><h1>Welcome to My Todo App !!!</h1>
    <TodoList todos={todos} />
    <TodoForm handleTodoCreate={handleTodoCreate}/>
    </div>
    );
};

export default App;