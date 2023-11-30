'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import TodoFilter from '@/components/TodoFilter';
import TodoList from '@/components/TodoList';
import TodoForm from '@/components/TodoForm';

export default function App(): JSX.Element {
  const [filter, setFilter] = useState('');

  return (
    <main>
      <Header title="My Todo App" />
      <div className="m-10 flex flex-row">
        <section className="w-2/3">
          <TodoFilter
            filter={filter}
            handleChange={(e) => setFilter(e.target.value)}
          />
          <TodoList filter={filter} />
        </section>
        <aside className="ml-10 w-1/3">
          <TodoForm />
        </aside>
      </div>
    </main>
  );
}
