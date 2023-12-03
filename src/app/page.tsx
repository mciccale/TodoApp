import Header from '@/components/Header';
import TodoList from '@/components/TodoList';
import TodoForm from '@/components/TodoForm';
import Footer from '@/components/Footer';
import { fetchTodos } from '@/actions/todos';

export default async function App(): Promise<JSX.Element> {
  const todos = await fetchTodos();

  return (
    <main className="max-w-xl rounded-lg bg-white p-10">
      <Header title="Todo App" />
      <TodoForm />
      <TodoList todos={todos} />
      <Footer todosCount={todos.length} />
    </main>
  );
}
