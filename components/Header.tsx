interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return <h1 className="text-6xl text-center p-10">{title}</h1>;
}
