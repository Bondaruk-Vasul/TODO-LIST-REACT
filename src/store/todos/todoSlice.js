import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const getInitialTodo = () => {
  const localTodoList = localStorage.getItem('todoList');
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  localStorage.setItem('todoList', JSON.stringify([]));
  return [];
};

const initialValue = {
  todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      // Нужно добавить поле 'done' --> которое по дефолтку false
      const newTodo = {
        id: uuid(),
        time: new Date().toLocaleDateString(),
        ...action.payload,
      };

      state.todoList.push(newTodo);
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
    updateTodo: (state, action) => {
      state.todoList = state.todoList.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo;
        }

        return {
          time: todo.time,
          ...action.payload,
        };
      });

      localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
    markDone: (state, action) => {
      // Тут надо чтобы пришел action, с айдишкой твоего todo
      // и ты поменял в нем поле done на обратное, если было true --> поменять на false, если было false, поменять на true
      return state;
    }
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
