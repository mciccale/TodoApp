'use client';

import { MdDelete } from 'react-icons/md';
import { removeTodo } from '@/actions/todos';

interface Props {
  todoId: string;
}

export default function DeleteButton({ todoId }: Props) {
  return (
    <button
      onClick={async () => await removeTodo(todoId)}
      className="hidden rounded-r-lg bg-red-500 px-6 text-3xl transition group-hover:block"
    >
      <MdDelete />
    </button>
  );
}
