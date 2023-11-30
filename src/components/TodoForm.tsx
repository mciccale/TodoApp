'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { useTodosStore } from '@/store/todos';
import { Todo } from '@/types';
import { createDate, compareDates } from '@/utils/dates';

interface Inputs {
  title: string;
  dueDate: string;
}

export default function TodoForm() {
  const addTodo = useTodosStore((state) => state.add);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ title, dueDate }) => {
    console.log(dueDate);
    const newTodo: Todo = {
      title,
      dueDate: createDate(dueDate),
      id: uuidv4(),
      done: false,
    };

    addTodo(newTodo);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <input
        className="mb-2 w-full rounded-lg border-2 p-5 text-lg"
        placeholder="new todo..."
        {...register('title', { required: true })}
      />
      {errors.title && (
        <p className="px-3 py-2 font-semibold text-red-500" role="alert">
          Todo title is required
        </p>
      )}
      <input
        className="mb-2 w-full rounded-lg border-2 p-5 text-lg"
        type="date"
        {...register('dueDate', { required: true })}
      />
      {errors.dueDate && (
        <p className="px-3 font-semibold text-red-500" role="alert">
          Due date of the todo is required
        </p>
      )}
      <button
        className="mb-2 w-full rounded-lg border-2 bg-blue-600 p-5 text-lg hover:bg-blue-400"
        type="submit"
      >
        Register TODO
      </button>
    </form>
  );
}
