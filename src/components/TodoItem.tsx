import type { Todo } from "@/types";
import { getFormattedDate } from "@/utils/dates";

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props): JSX.Element {
  return (
    <li
      key={todo.id}
      className="m-2 flex w-full flex-row justify-between rounded-lg border-2 p-5 text-center text-lg"
    >
      <h3 className="text-xl font-medium">{todo.title}</h3>
      <span className="">{getFormattedDate(todo.dueDate)}</span>
    </li>
  );
}
