interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return <h1 className="py-5 pb-7 text-5xl font-bold">{title}</h1>;
}
