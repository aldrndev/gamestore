import OverviewContent from '@/components/organisms/OverviewContent';
import Sidebar from '@/components/organisms/Sidebar';
import Profile from '@/components/organisms/Sidebar/Profile';

export default function Overview() {
  return (
    <section className="overview overflow-auto">
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <Profile />
          <Sidebar activeMenu="overview" />
        </div>
      </section>
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
          <OverviewContent />
        </div>
      </main>
    </section>
  );
}
