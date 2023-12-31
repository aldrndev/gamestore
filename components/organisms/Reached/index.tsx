import ReachedText from '@/components/atoms/ReachedText';
import ReachedText2 from '@/components/atoms/ReachedText/ReachedText2';

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedText text1="290M+" text2="Player Top Up" />
          <ReachedText2 text1="12.500" text2="Games Available" />
          <ReachedText2 text1="99,9%" text2="Happy Players" />
          <ReachedText2 text1="4.7⭐" text2="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
