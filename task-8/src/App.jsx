

import { useState } from 'react'
import './styles.css'

function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos((currentTodo) => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID(), title: newItem, completed: false }
      ]
    })
    setNewItem("")
  }

  function toggletodo(id, complete) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: complete }
        }
        return todo
      })
    })
  }

  function removeTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <label htmlFor="item" >New item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="new-item" />
        </div>
        <button className="btn">Add</button>

      </form>
      <h1 className="header">To Do List</h1>
      <ul className="list">
        {todos.length === 0 && <li>No todos found</li>}
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed}
                  onChange={e => toggletodo(todo.id, e.target.checked)} />
                {todo.title}
              </label>
              <button className="btn btn-danger" onClick={()=> removeTodo(todo.id)}>Remove</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App


