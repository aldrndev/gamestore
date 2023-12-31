import Link from 'next/link';

interface StatusTrxProps {
  link: string;
  title: string;
  btn?: string;
}

export default function StatusTrx(props: Partial<StatusTrxProps>) {
  const { link, title, btn } = props;
  return (
    <Link
      data-filter="*"
      href={`${link}`}
      className={`btn btn-status rounded-pill text-sm ${btn} me-3`}
    >
      {title}
    </Link>
  );
}
