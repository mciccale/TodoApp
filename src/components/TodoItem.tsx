import { TodoWithId } from '@/types';

interface Props {
  todo: TodoWithId;
}

export default function TodoItem({ todo }: Props): JSX.Element {
  return (
    <li
      key={todo.id}
      className="flex w-full flex-row justify-between border-b-2 py-5 pr-5 text-center text-lg"
    >
      <h3 className="text-xl font-bold">{todo.title}</h3>
      <span className="font-medium">{todo.dueDate}</span>
    </li>
  );
}
