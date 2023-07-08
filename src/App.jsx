import { useState } from 'react'
import './App.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((_,i) => i !== index))
  }

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos= {todos} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
