import React from 'react'

const Todo = (props) => {
    return (
        <div className="todo-elem">
            <li
                className="todo"
                style={{ textDecoration: props.todo.isCompleted ? "line-through" : "" }}
            >
                {props.todo.text}
            </li>
            <div className="todo-btns">
                <button className="btn" onClick={() => props.completeTodo(props.id)}>&#10003;</button>
                <button className="btn" onClick={() => props.removeTodo(props.id)}>x</button>
            </div>

        </div>
    )
}

export default Todo
