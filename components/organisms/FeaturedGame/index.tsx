import FeaturedGameCard from '@/components/molecules/FeaturedGameCard';

export default function FeaturedGame() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <FeaturedGameCard
            title="Super Mecha"
            thumbnail="Thumbnail-1.png"
            genre="Mobile"
          />
          <FeaturedGameCard
            title="Call of Duty: Modern"
            thumbnail="Thumbnail-2.png"
            genre="Mobile"
          />
          <FeaturedGameCard
            title="Mobile Legends"
            thumbnail="Thumbnail-3.png"
            genre="Mobile"
          />
          <FeaturedGameCard
            title="Clash of Clan"
            thumbnail="Thumbnail-4.png"
            genre="Mobile"
          />
          <FeaturedGameCard
            title="Valorant"
            thumbnail="Thumbnail-5.png"
            genre="Desktop"
          />
        </div>
      </div>
    </section>
  );
}
