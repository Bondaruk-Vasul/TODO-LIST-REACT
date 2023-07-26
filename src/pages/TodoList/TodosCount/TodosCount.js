import React from 'react';
import { useSelector } from 'react-redux';

import { selectTodoList } from '../../../store/todos/selectors';

export const TodosCount = () => {
  const todos = useSelector(selectTodoList);

  return (
    <>
      <div className="header-count">
        <strong>Total: {todos.length}</strong>
      </div>
    </>
  );
};
