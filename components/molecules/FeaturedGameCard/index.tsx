import Image from 'next/image';
import Link from 'next/link';

interface FeaturedGameCard {
  title: string;
  thumbnail:
    | 'Thumbnail-1.png'
    | 'Thumbnail-2.png'
    | 'Thumbnail-3.png'
    | 'Thumbnail-4.png'
    | 'Thumbnail-5.png';
  genre: string;
}

export default function FeaturedGameCard(props: FeaturedGameCard) {
  const { title, thumbnail, genre } = props;

  return (
    <div className="featured-game-card position-relative">
      <Link href="/detail">
        <div className="blur-sharp">
          <Image
            className="thumbnail"
            src={`/img/${thumbnail}`}
            width={205}
            height={270}
            alt=""
          />
        </div>
        <div className="cover position-absolute bottom-0 m-32">
          <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
            <div className="game-icon mx-auto">
              <Image src="/icon/featured.svg" width={54} height={36} alt="" />
            </div>
            <div>
              <p className="fw-semibold text-white text-xl m-0">{title}</p>
              <p className="fw-light text-white m-0">{genre}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
