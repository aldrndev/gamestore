export default function CheckoutConfirm() {
  return (
    <div className="d-md-block d-flex flex-column w-100 pt-50">
      <a
        className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
        href="./complete-checkout"
        role="button"
      >
        Confirm Payment
      </a>
    </div>
  );
}
