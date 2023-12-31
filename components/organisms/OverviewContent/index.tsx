import Image from 'next/image';
import CategoryCard from './CategoryCard';
import TableTransaction from './TableTransaction';

export default function OverviewContent() {
  return (
    <>
      <div className="top-up-categories mb-30">
        <p className="text-lg fw-medium color-palette-1 mb-14">
          Top Up Categories
        </p>
        <div className="main-content">
          <div className="row">
            <CategoryCard
              totalSpent="Rp 18.005.500"
              cat="Desktop"
              icon="overview-desktop-other.svg"
            />
            <CategoryCard
              totalSpent="Rp 8.455.000"
              cat="Mobile"
              icon="overview-mobile.svg"
            />
            <CategoryCard
              totalSpent="Rp 5.000.000"
              cat="Other"
              icon="overview-desktop-other.svg"
            />
          </div>
        </div>
      </div>
      <div className="latest-transaction">
        <p className="text-lg fw-medium color-palette-1 mb-14">
          Latest Transactions
        </p>
        <div className="main-content main-content-table overflow-auto">
          <TableTransaction />
        </div>
      </div>
    </>
  );
}
