import Sidebar from '@/components/organisms/Sidebar';
import Profile from '@/components/organisms/Sidebar/Profile';
import TransactionsFilter from '@/components/organisms/Transactions';
import TableRow from '@/components/organisms/Transactions/TableRow';

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <Profile />
          <Sidebar activeMenu="transactions" />
        </div>
      </section>
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            My Transactions
          </h2>
          <TransactionsFilter />
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Latest Transactions
            </p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th className="" scope="col">
                      Game
                    </th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody id="list_status_item">
                  <TableRow
                    title="Mobile Legend"
                    cat="Desktop"
                    image="overview-1"
                    item="200"
                    price={290000}
                    status="Pending"
                    statusClass="pending"
                  />
                  <TableRow
                    title="Call Of Duty"
                    cat="Desktop"
                    image="overview-2"
                    item="200"
                    price={290000}
                    status="Success"
                    statusClass="success"
                  />
                  <TableRow
                    title="Clash of Clans"
                    cat="Mobile"
                    image="overview-3"
                    item="200"
                    price={290000}
                    status="Failed"
                    statusClass="failed"
                  />
                  <TableRow
                    title="The Royal Game"
                    cat="Mobile"
                    image="overview-4"
                    item="200"
                    price={290000}
                    status="Pending"
                    statusClass="pending"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
