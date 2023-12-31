import FooterText from '@/components/atoms/FooterText';
import MenuLink from '@/components/atoms/FooterText/MenuLink';
import TitleMenu from '@/components/atoms/FooterText/TitleMenu';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href="/" className="mb-30">
                <Image src="/icon/logo.svg" width={60} height={60} alt="" />
              </Link>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <FooterText text="Copyright 2021. All Rights Reserved." />
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <TitleMenu text="Company" />
                  <ul className="list-unstyled">
                    <MenuLink menu="About Us" link="/" />
                    <MenuLink menu="Press Relaes" link="/" />
                    <MenuLink menu="Terms of Use" link="/" />
                    <MenuLink menu="Privacy & Policy" link="/" />
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <TitleMenu text="Support" />
                  <ul className="list-unstyled">
                    <MenuLink menu="Refund Policy" link="/" />
                    <MenuLink menu="Unlock Rewards" link="/" />
                    <MenuLink menu="Live Chatting" link="/" />
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <TitleMenu text="Connect" />
                  <ul className="list-unstyled">
                    <MenuLink menu="hi@store.gg" link="mailto: hi@store.gg" />
                    <MenuLink
                      menu="team@store.gg"
                      link="mailto: team@store.gg"
                    />
                    <MenuLink
                      menu="Pasific 12, Jakarta Selatan"
                      link="http://maps.google.com/?q=Pasific 12,
                                  Jakarta Selatan"
                    />
                    <MenuLink
                      menu="021 - 1122 - 9090"
                      link="tel: 02111229090"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
