import TableRow from './TableRow';

export default function TableTransaction() {
  return (
    <table className="table table-borderless">
      <thead>
        <tr className="color-palette-1">
          <th className="text-start" scope="col">
            Game
          </th>
          <th scope="col">Item</th>
          <th scope="col">Price</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          image="overview-1"
          title="Mobile Legends: The New Battle 2021"
          cat="Desktop"
          item="200 Gold"
          price="Rp 290.000"
          statusDetail="pending"
          status="Pending"
        />
        <TableRow
          image="overview-2"
          title="Call of Duty:Modern"
          cat="Desktop"
          item="550 Gold"
          price="Rp 740.000"
          statusDetail="success"
          status="Success"
        />
        <TableRow
          image="overview-3"
          title="Clash of Clans"
          cat="Mobile"
          item="100 Gold"
          price="Rp 140.000"
          statusDetail="failed"
          status="Failed"
        />
        <TableRow
          image="overview-4"
          title="The Royal Game"
          cat="Mobile"
          item="225 Gold"
          price="Rp 290.000"
          statusDetail="pending"
          status="Pending"
        />
      </tbody>
    </table>
  );
}
