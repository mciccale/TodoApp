import mongoose from 'mongoose';
import TodoSchema from '../schemas/todo';
import dbConnect from '@/lib/dbConnect';

const dummyTodos = [
  {
    id: '1',
    title: 'Walk the dog',
    dueDate: '2023-12-10',
    done: false,
  },
  {
    id: '2',
    title: 'Grocery shopping',
    dueDate: '2023-12-12',
    done: false,
  },
  {
    id: '3',
    title: "Doctor's appointment",
    dueDate: '2023-12-15',
    done: false,
  },
  {
    id: '4',
    title: 'Attend yoga class',
    dueDate: '2023-12-18',
    done: false,
  },
  {
    id: '5',
    title: 'Read a book',
    dueDate: '2023-12-20',
    done: false,
  },
];

(async () => {
  await dbConnect();
  await TodoSchema.deleteMany({});
  await TodoSchema.insertMany(
    dummyTodos.map(({ title, dueDate, done }) => ({ title, dueDate, done }))
  );
  await mongoose.connection.close();
})();
