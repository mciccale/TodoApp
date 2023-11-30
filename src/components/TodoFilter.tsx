import { ChangeEvent } from 'react';

interface Props {
  filter: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TodoFilter({
  filter,
  handleChange,
}: Props): JSX.Element {
  return (
    <input
      className="mb-2 w-full rounded-lg border-2 p-5 text-lg"
      placeholder="search for todo..."
      value={filter}
      onChange={handleChange}
    />
  );
}
