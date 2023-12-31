import Image from 'next/image';

interface StepCard {
  icon: 'step1.svg' | 'step2.svg' | 'step3.svg';
  title: string;
  pOne: string;
  pTwo: string;
}

export default function StepCard(props: StepCard) {
  const { icon, title, pOne, pTwo } = props;
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <Image
          src={`/icon/${icon}`}
          width={80}
          height={80}
          alt=""
          className="mb-30"
        />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {pOne}
          <br />
          {pTwo}
        </p>
      </div>
    </div>
  );
}
