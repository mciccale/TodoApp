'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import TodoFilter from '@/components/TodoFilter';
import TodoList from '@/components/TodoList';

export default function App(): JSX.Element {
  const [filter, setFilter] = useState('');

  return (
    <main>
      <Header title="My Todo App" />
      <TodoFilter
        filter={filter}
        handleChange={(e) => setFilter(e.target.value)}
      />
      <TodoList filter={filter} />
    </main>
  );
}
