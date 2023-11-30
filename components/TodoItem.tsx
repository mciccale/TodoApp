import type { Todo } from '@/types';
import { getFormattedDate } from '@/utils/utils';

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props): JSX.Element {
  return (
    <li
      key={todo.id}
      className="w-1/5 text-lg p-5 rounded-lg shadow-lg m-5 text-center"
    >
      <h3 className="text-3xl">{todo.title}</h3>
      <span className="">{getFormattedDate(todo.dueDate)}</span>
    </li>
  );
}
