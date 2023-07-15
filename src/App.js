import React from 'react';
import { ToastContainer } from 'react-toastify';
import { TodoList } from './pages/TodoList';

import './styles/main.css';

function App() {
  return (
    <>
      <div className="App">
        <TodoList />
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
