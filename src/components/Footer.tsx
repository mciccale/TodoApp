'use client';

import { clearTodos } from '@/actions/todos';
import { useState } from 'react';

interface Props {
  todosCount: number;
}

export default function Footer({ todosCount }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <footer className="flex justify-between pr-5 pt-5 text-lg font-bold">
      <h3 className="py-2">
        {todosCount !== 0
          ? `You have ${todosCount} pending tasks!`
          : `You don't have any tasks!`}
      </h3>
      <button
        onClick={async () => {
          setIsLoading(true);
          await clearTodos();
          setIsLoading(false);
        }}
        disabled={isLoading}
        className="rounded-lg bg-green-300 px-3 py-2 hover:bg-green-200 disabled:bg-gray-200"
      >
        Clear All
      </button>
    </footer>
  );
}
