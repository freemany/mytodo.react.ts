export interface TodoItemInterface {
    task: string;
    finished: boolean;
    isEditing: boolean;
};

// Todo list interface
export interface TodoListInterface {
    // handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    // handleTodoRemove: (id: string) => void;
    // handleTodoComplete: (id: string) => void;
    handleTodoRemove: (index: number) => void;
    todos: TodoItemInterface[]
};

export interface TodoFormInterface {
    handleTodoCreate: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, task: string) => void;
};

export interface ReducerInterface {
    type: string;
    payload: any;
};
