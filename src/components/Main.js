import React, { useState } from 'react'
import Todo from './Todo'


const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
        e.target.reset();
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="todo"
                placeholder="Add your ToDo"
                onChange={e => setValue(e.target.value)} />

            <input type="submit" value="Submit" />
        </form>
    )


}


const Main = () => {

    const [todos, setTodos] = useState([

    ])
    const [todo, setTodo] = useState("")

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos)
    }

    const completeTodo = id => {
        const newTodos = [...todos];
        newTodos[id].isCompleted = true;
        setTodos(newTodos);
    }

    const removeTodo = id => {
        const newTodos = [...todos];
        newTodos.splice(id, 1);
        setTodos(newTodos);
    }


    return (
        <div className="main">
            <h1>ToDo List</h1>

            <TodoForm addTodo={addTodo} />

            <div className="todo-list">
                <ol>
                    {todos.map((todo, id) => (
                        <Todo
                            key={id}
                            id={id}
                            todo={todo}
                            completeTodo={completeTodo}
                            removeTodo={removeTodo}
                        />
                    ))}
                </ol>
            </div>

        </div>
    )
}

export default Main
