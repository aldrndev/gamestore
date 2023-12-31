import Link from 'next/link';

interface MenuLinkProps {
  menu: string;
  link: string;
}

export default function MenuLink(props: MenuLinkProps) {
  const { menu, link } = props;
  return (
    <li className="mb-6">
      <Link
        href={link}
        className="text-lg color-palette-1 text-decoration-none"
      >
        {menu}
      </Link>
    </li>
  );
}
