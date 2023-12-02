'use client';

import { useRef } from 'react';
import { addTodoFromForm } from '@/actions/todos';
import Button from '@/components/Button';

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
        <Button />
      </form>
    </div>
  );
}
