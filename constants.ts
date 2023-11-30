import { Todo } from '@/types';

export const dummyTodos: Todo[] = [
  {
    id: '1',
    title: 'Walk the dog',
    dueDate: new Date('2023-12-10'),
    done: false,
  },
  {
    id: '2',
    title: 'Grocery shopping',
    dueDate: new Date('2023-12-12'),
    done: false,
  },
  {
    id: '3',
    title: "Doctor's appointment",
    dueDate: new Date('2023-12-15'),
    done: false,
  },
  {
    id: '4',
    title: 'Attend yoga class',
    dueDate: new Date('2023-12-18'),
    done: false,
  },
  {
    id: '5',
    title: 'Read a book',
    dueDate: new Date('2023-12-20'),
    done: false,
  },
];
