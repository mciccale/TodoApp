import mongoose from 'mongoose';
import TodoSchema from '@/schemas/todo';
import dbConnect from '@/lib/dbConnect';

const dummyTodos = [
  {
    title: 'Walk the dog',
    dueDate: '2023-12-10',
    done: false,
  },
  {
    title: 'Grocery shopping',
    dueDate: '2023-12-12',
    done: false,
  },
  {
    title: "Doctor's appointment",
    dueDate: '2023-12-15',
    done: false,
  },
  {
    title: 'Attend yoga class',
    dueDate: '2023-12-18',
    done: false,
  },
  {
    title: 'Read a book',
    dueDate: '2023-12-20',
    done: false,
  },
];

(async () => {
  await dbConnect();
  await TodoSchema.deleteMany({});
  await TodoSchema.insertMany(dummyTodos);
  await mongoose.connection.close();
})();
