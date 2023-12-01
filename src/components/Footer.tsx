import { fetchTodos } from '@/actions/todos';

export default async function Footer() {
  const todos = await fetchTodos();

  return (
    <h3 className="pt-5 text-lg font-bold">
      {todos.length !== 0
        ? `You have ${todos.length} pending tasks!`
        : `You don't have any pending tasks!`}
    </h3>
  );
}
