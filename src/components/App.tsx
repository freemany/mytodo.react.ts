import React , { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { TodoItemInterface } from './../interfaces/Todo';
import initialTodo from './../store/initial';
import { addTodo, removeTodo } from './../store/actions/todoAction';
import { connect } from 'react-redux';

// import { BehaviorSubject } from 'rxjs';

// const test = new BehaviorSubject(null);
// test.next(null)
import storeFactory from './../store';

const App = (props) => {
    const [todos, setTodos] = useState<Array<TodoItemInterface>> (initialTodo);
    const handleTodoCreate = (event: React.MouseEvent, task: string) => {
        event.preventDefault();
        if (!task) {
            return;
        }
        const newTodo: TodoItemInterface = {
            task,
            finished: false,
            isEditing: false
        };
        // addTodo(newTodo);
        storeFactory.dispatch(addTodo(newTodo));
        // setTodos([...todos, newTodo]);
    };
    const handleTodoRemove = (index: number) => {
        // const reducedTodos = todos.filter((_, i) => i !== index);
        // setTodos(reducedTodos);
        storeFactory.dispatch(removeTodo(index));
    };

    return (
    <div><h1>Welcome to My Todo App !!!</h1>
    <TodoList todos={props.todos} handleTodoRemove={handleTodoRemove} />
    <TodoForm handleTodoCreate={handleTodoCreate} />
    </div>
    );
};
 
const mapStateToProps = state => {
    console.log('mapstate props', state);
    return {
        todos: state
    }
}

export default connect(mapStateToProps)(App);
// export default App;