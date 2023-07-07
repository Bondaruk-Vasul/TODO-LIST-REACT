import React from 'react'
import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

function AppContent() {
    const todoList = useSelector((state) => state.todo.todoList);
    
    const sortedTodoList = [...todoList];
   
  return (
      <ul className="todo-list" id="todo-list">
          {sortedTodoList && sortedTodoList.length > 0 ? sortedTodoList.map((todo) => <TodoItem todo={todo} key={todo.id} />) : ''}
    </ul>
  )
}

export default AppContent