'use client';

import { useRef } from 'react';
import { addTodoFromForm } from '@/actions/todos';
import Button from '@/components/Button';

export default function TodoForm() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        formRef.current?.reset();
        await addTodoFromForm(formData);
        // Scroll to the bottom
        const todoList = document.getElementById('todo-list');
        if (todoList) {
          todoList.scrollTop = todoList.scrollHeight;
        }
      }}
      className="flex flex-row pr-4"
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
  );
}
