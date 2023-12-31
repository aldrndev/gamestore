import StatusTrx from './StatusTrx';

export default function TransactionsFilter() {
  return (
    <>
      <div className="mb-30">
        <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
        <h3 className="text-5xl fw-medium color-palette-1">Rp 4.518.000.500</h3>
      </div>
      <div className="row mt-30 mb-20">
        <div className="col-lg-12 col-12 main-content">
          <div id="list_status_title">
            <StatusTrx title="All Trx" link="/" btn="btn-active" />
            <StatusTrx title="Success" link="/" />
            <StatusTrx title="Pending" link="/" />
            <StatusTrx title="Failed" link="/" />
          </div>
        </div>
      </div>
    </>
  );
}
