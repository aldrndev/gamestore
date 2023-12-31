import SignupForm from '@/components/organisms/SignupForm';
import Image from 'next/image';
import Link from 'next/link';

export default function SignUp() {
  return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <form action="">
          <div className="pb-50">
            <Link href="/" className="navbar-brand">
              <Image src="/icon/logo.svg" width={60} height={60} alt="" />
            </Link>
          </div>
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
          <p className="text-lg color-palette-1 m-0">
            Daftar dan bergabung dengan kami
          </p>
          <SignupForm />
          <div className="button-group d-flex flex-column mx-auto pt-50">
            <a
              className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
              href="/sign-up-photo"
              role="button"
            >
              Continue
            </a>

            <a
              className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
              href="/sign-in.html"
              role="button"
            >
              Sign In
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
