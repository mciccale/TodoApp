import { ReactNode } from 'react';
import type { Todo } from '@/types';
import { useTodosStore } from '@/store/todos';
import { titleIncludesFilter } from '@/utils/filter';
import { compareDates } from '@/utils/dates';
import TodoItem from '@/components/TodoItem';

interface Props {
  filter: string;
}

const todosToRender = (todos: Todo[], filter: string): ReactNode[] => {
  return todos
    .filter((todo) => titleIncludesFilter(todo.title, filter))
    .toSorted((todo1, todo2) => compareDates(todo1.dueDate, todo2.dueDate))
    .map((todo) => <TodoItem key={todo.id} todo={todo} />);
};

export default function TodoList({ filter }: Props): JSX.Element {
  const todos = useTodosStore((state) => state.todos);

  return (
    <ul className="flex flex-col flex-wrap content-center justify-center">
      {todosToRender(todos, filter)}
    </ul>
  );
}
