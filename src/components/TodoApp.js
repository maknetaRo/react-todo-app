import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'




const TodoApp = () => {

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

export default TodoApp
