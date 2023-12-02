// experimental feature
// import { useFormStatus } from 'react-dom';

export default function Button() {
  // const { pending } = useFormStatus();

  // const styles = `ml-2 h-20 w-20 rounded-full ${
  //   pending ? 'bg-green-200' : 'bg-green-300 hover:bg-green-200'
  // } text-6xl`;

  const styles = `ml-2 h-20 w-20 rounded-full bg-green-300 hover:bg-green-200 text-6xl`;

  return (
    <button className={styles} type="submit">
      +
    </button>
  );
}
