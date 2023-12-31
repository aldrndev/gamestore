import InputForm from '@/components/atoms/InputForm';
import Sidebar from '@/components/organisms/Sidebar';
import Profile from '@/components/organisms/Sidebar/Profile';
import Image from 'next/image';

export default function EditProfile() {
  return (
    <section className="edit-profile overflow-auto">
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <Profile />
          <Sidebar activeMenu="settings" />
        </div>
      </section>
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="position-relative me-20">
                  <Image
                    src="/img/avatar-1.png"
                    width={90}
                    height={90}
                    className="avatar img-fluid"
                    alt=""
                  />
                  <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                    <Image
                      src="/icon/upload.svg"
                      width={24}
                      height={24}
                      alt=""
                    />
                  </div>
                </div>
                <div className="image-upload">
                  <label htmlFor="avatar">
                    <Image
                      src="/icon/uploadicon.svg"
                      width={90}
                      height={90}
                      alt=""
                    />
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                  />
                </div>
              </div>
              <InputForm
                label="name"
                title="Full Name"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                describedby="name"
              />
              <InputForm
                label="email"
                title="Email Address"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                describedby="email"
              />
              <InputForm
                label="phone"
                title="Phone"
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your phone"
                describedby="phone"
              />

              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="submit"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  role="button"
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}
