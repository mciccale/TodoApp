import { ReactNode } from 'react';
import { compareDates, titleIncludesFilter } from '@/utils/utils';
import TodoItem from '@/components/TodoItem';
import type { Todo } from '@/types';
import { dummyTodos } from '@/constants';

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
  return (
    <ul className="flex flex-col flex-wrap justify-center content-center">
      {todosToRender(dummyTodos, filter)}
    </ul>
  );
}
