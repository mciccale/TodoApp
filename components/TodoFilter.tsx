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
    <div className="flex content-center justify-center">
      <input
        className="w-1/5 text-lg p-5 rounded-lg shadow-lg m-5 text-center"
        placeholder="search for todo"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}
