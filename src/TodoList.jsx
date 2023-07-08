const TodoList = ({ todos, deleteTodo }) => {
    return (
        <ul>
            {todos.map((todo, index) => {
                return (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList