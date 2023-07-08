import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (todo.trim()) {
            const newTodo = {
                id: uuidv4(),
                text: todo,
            };
            addTodo(newTodo)
            setTodo('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Enter a Todo"
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm