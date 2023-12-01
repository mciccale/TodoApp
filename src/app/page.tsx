import Header from '@/components/Header';
import TodoList from '@/components/TodoList';
import TodoForm from '@/components/TodoForm';
import Footer from '@/components/Footer';
import { Suspense } from 'react';

export default async function App(): Promise<JSX.Element> {
  return (
    <main className="max-w-xl rounded-lg bg-white p-10">
      <Header title="Todo App" />
      <TodoForm />
      <Suspense fallback="Loading...">
        <TodoList />
      </Suspense>
      <Footer />
    </main>
  );
}
