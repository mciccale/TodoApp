'use server';

import { revalidatePath } from 'next/cache';
import { Todo, TodoWithId } from '@/types';
import dbConnect from '@/lib/dbConnect';
import TodoSchema from '@/schemas/todo';

export const fetchTodos = async (): Promise<TodoWithId[]> => {
  try {
    await dbConnect();
    return await TodoSchema.find({});
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const clearTodos = async (): Promise<undefined> => {
  try {
    await dbConnect();
    await TodoSchema.deleteMany({});
    revalidatePath('/');
  } catch (e) {
    console.error(e);
  }
};

export const addTodoFromForm = async (
  formData: FormData
): Promise<undefined> => {
  const title = <string>formData.get('title');
  const dueDate = <string>formData.get('dueDate');

  if (!title || !dueDate) return;

  try {
    await addTodo({ title, dueDate, done: false });
    revalidatePath('/');
  } catch (e) {
    console.error(e);
  }
};

export const removeTodo = async (todoId: string): Promise<undefined> => {
  try {
    await dbConnect();
    await TodoSchema.findByIdAndDelete(todoId);
    revalidatePath('/');
  } catch (e) {
    console.error(e);
  }
};

const addTodo = async (todo: Todo): Promise<undefined> => {
  try {
    await dbConnect();
    await new TodoSchema(todo).save();
  } catch (e) {
    console.error(e);
  }
};
