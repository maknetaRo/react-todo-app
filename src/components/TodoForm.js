import React, { useState } from 'react'


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
                onChange={e => setValue(e.target.value)}
                value={value}
            />

            <input type="submit" value="Submit" />
        </form>
    )

}

export default TodoForm
