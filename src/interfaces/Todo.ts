export interface TodoItemInterface {
    task: string;
    finished: boolean;
};

// Todo list interface
export interface TodoListInterface {
    // handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    // handleTodoRemove: (id: string) => void;
    // handleTodoComplete: (id: string) => void;
    // handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
    todos: TodoItemInterface[]
};

export interface TodoFormInterface {
    handleTodoCreate: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, task: string) => void;
};
