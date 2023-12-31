import Sidebar from '@/components/organisms/Sidebar';
import Profile from '@/components/organisms/Sidebar/Profile';
import TransactionDetail from '@/components/organisms/TransactionDetail';

export default function DetailTransactions() {
  return (
    <section className="transactions-detail overflow-auto">
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <Profile />
          <Sidebar activeMenu="transactions" />
        </div>
      </section>
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            Details #GG001
          </h2>
          <div className="details">
            <div className="main-content main-content-card overflow-auto">
              <TransactionDetail />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
