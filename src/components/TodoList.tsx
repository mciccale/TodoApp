import { ReactNode } from 'react';
import { TodoWithId } from '@/types';
import { compareDates } from '@/utils/dates';
import { fetchTodos } from '@/actions/todos';
import TodoItem from '@/components/TodoItem';

const todosToRender = (todos: TodoWithId[]): ReactNode[] => {
  return todos
    .sort((todo1, todo2) => compareDates(todo1.dueDate, todo2.dueDate))
    .map((todo) => <TodoItem key={todo.id} todo={todo} />);
};

export default async function TodoList(): Promise<JSX.Element> {
  const todos = await fetchTodos();

  return (
    <ul id="todo-list" className="mt-2 h-[300px] overflow-y-auto">
      {todosToRender(todos)}
    </ul>
  );
}
