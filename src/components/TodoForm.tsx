'use client';

import { addTodoFromForm } from '@/actions/todos';
import { useRef } from 'react';

export default function TodoForm() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <div>
      <form
        ref={ref}
        action={async (formData) => {
          // Resetting the form
          ref.current?.reset();
          // TODO: input validation
          await addTodoFromForm(formData);
          // Scroll to the bottom
          const todoList = document.getElementById('todo-list');
          if (todoList) {
            todoList.scrollTop = todoList.scrollHeight;
          }
        }}
        className="flex flex-row"
      >
        <input
          className="mr-2 rounded-lg border-2 px-2"
          placeholder="new todo..."
          name="title"
        />
        <input
          className="mx-2 rounded-lg border-2 px-2"
          type="date"
          name="dueDate"
        />
        <button
          className="ml-2 h-20 w-20 rounded-full bg-green-300 text-6xl hover:bg-green-200"
          type="submit"
        >
          +
        </button>
      </form>
    </div>
  );
}
