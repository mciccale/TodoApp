import { Todo } from '@/types';
import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema<Todo>({
  title: {
    type: String,
    required: [true, 'Please specify the title of the todo'],
  },
  dueDate: {
    type: String,
    required: [true, 'Please specify the due date of the todo'],
  },
  done: {
    type: Boolean,
    required: [true, 'Please specify whether the todo is completed or not'],
  },
});

todoSchema.set('toObject', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default mongoose.models.Todo || mongoose.model<Todo>('Todo', todoSchema);
