import Image from 'next/image';
import cx from 'classnames';
import Link from 'next/link';

interface SidebarProps {
  title: string;
  icon:
    | 'ic-overview'
    | 'ic-transaction'
    | 'ic-message'
    | 'ic-card'
    | 'ic-reward'
    | 'ic-setting'
    | 'ic-logout';
  active?: boolean;
  link: string;
}

export default function SidebarMenu(props: Partial<SidebarProps>) {
  const { title, icon, active, link } = props;

  const classItem = cx({
    item: true,
    'mb-30': true,
    active,
  });
  return (
    <div className={classItem}>
      <Image
        src={`/icon/${icon}.svg`}
        width={25}
        height={25}
        alt=""
        className="icon me-3"
      />

      <p className="item-title m-0">
        <Link href={`${link}`} className="text-lg text-decoration-none">
          {title}
        </Link>
      </p>
    </div>
  );
}
