interface TitleMenuProps {
  text: string;
}

export default function TitleMenu(props: TitleMenuProps) {
  const { text } = props;
  return <p className="text-lg fw-semibold color-palette-1 mb-12">{text}</p>;
}
