import { create } from 'zustand';
import { dummyTodos } from '@/constants';
import type { Todo } from '@/types';

interface TodoState {
  todos: Todo[];
  add: (todo: Todo) => void;
  remove: (id: string) => void;
}

const addTodo = (todos: Todo[], newTodo: Todo) => {
  return todos.concat(newTodo);
};

const removeTodo = (todos: Todo[], todoId: string) => {
  return todos.filter((todo) => todo.id !== todoId);
};

const useTodosStore = create<TodoState>((set) => ({
  todos: dummyTodos,
  add: (todo) =>
    set(({ todos }) => {
      return { todos: addTodo(todos, todo) };
    }),
  remove: (id) =>
    set(({ todos }) => {
      return { todos: removeTodo(todos, id) };
    }),
}));

export { useTodosStore };
