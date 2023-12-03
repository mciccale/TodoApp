import { ReactNode } from 'react';
import { TodoWithId } from '@/types';
import { compareDates } from '@/utils/dates';
import TodoItem from '@/components/TodoItem';

interface Props {
  todos: TodoWithId[];
}

const todosToRender = (todos: TodoWithId[]): ReactNode[] => {
  return todos
    .sort((todo1, todo2) => compareDates(todo1.dueDate, todo2.dueDate))
    .map((todo) => <TodoItem key={todo.id} todo={todo} />);
};

export default function TodoList({ todos }: Props): JSX.Element {
  return (
    <ul
      id="todo-list"
      className="mt-2 h-[300px] overflow-y-auto pr-4 [&>*:nth-child(odd)]:bg-gray-100"
    >
      {todosToRender(todos)}
    </ul>
  );
}
