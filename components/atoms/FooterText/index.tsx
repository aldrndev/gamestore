interface FooterTextProps {
  text: string;
}

export default function FooterText(props: FooterTextProps) {
  const { text } = props;
  return <p className="mt-30 text-lg color-palette-1 mb-30">{text}</p>;
}
