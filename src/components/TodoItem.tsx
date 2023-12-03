import { TodoWithId } from '@/types';
import DeleteButton from './DeleteButton';

interface Props {
  todo: TodoWithId;
}

export default function TodoItem({ todo }: Props): JSX.Element {
  return (
    <div className="group flex w-full justify-between rounded-md">
      <li
        key={todo.id}
        className="flex w-full justify-between py-5 pl-2 pr-5 text-center text-lg"
      >
        <h3 className="text-xl font-bold">{todo.title}</h3>
        <span className="font-semibold">{todo.dueDate}</span>
      </li>
      <DeleteButton todoId={todo.id} />
    </div>
  );
}
