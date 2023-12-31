import Image from 'next/image';

interface TableRowPops {
  title: string;
  image: string;
  cat: string;
  item: string;
  price: number;
  status: string;
  statusClass: string;
}

export default function TableRow(props: TableRowPops) {
  const { title, image, cat, item, price, status, statusClass } = props;
  return (
    <tr data-category="pending" className="align-middle">
      <th scope="row">
        <Image
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${image}.png`}
          width="80"
          height="60"
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {cat}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">Rp {price}</p>
      </td>
      <td>
        <div>
          <span className={`float-start icon-status ${statusClass}`}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
      <td>
        <a
          href="/member/transactions/detail"
          className="btn btn-status rounded-pill text-sm"
        >
          Details
        </a>
      </td>
    </tr>
  );
}
