'use server';

import dbConnect from '@/lib/dbConnect';
import { Todo, TodoWithId } from '@/types';
import TodoSchema from '@/schemas/todo';
import { revalidatePath } from 'next/cache';

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
  } catch (e) {
    console.error(e);
  }
};

export const addTodoFromForm = async (
  formData: FormData
): Promise<undefined> => {
  const title = <string>formData.get('title');
  const dueDate = <string>formData.get('dueDate');

  try {
    await addTodo({ title, dueDate, done: false });
    revalidatePath('/');
  } catch (e) {
    console.error(e);
  }
};

export const addTodo = async (todo: Todo): Promise<undefined> => {
  try {
    await dbConnect();
    await new TodoSchema(todo).save();
  } catch (e) {
    console.error(e);
  }
};

export const removeTodo = async (todoId: string): Promise<undefined> => {
  try {
    await dbConnect();
    await TodoSchema.findByIdAndDelete(todoId);
  } catch (e) {
    console.error(e);
  }
};
