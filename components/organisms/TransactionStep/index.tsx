import StepCard from '@/components/molecules/StepCard';
import Image from 'next/image';

export default function TransactionStep() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br /> Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <StepCard
            icon="step1.svg"
            title="1. Start"
            pOne="Pilih salah satu game"
            pTwo="yang ingin kamu top up"
          />
          <StepCard
            icon="step2.svg"
            title="2. Fill Up"
            pOne="Top up sesuai dengan"
            pTwo="nominal yang sudah tersedia"
          />
          <StepCard
            icon="step3.svg"
            title="3. Be a Winner"
            pOne="Siap digunakan untuk"
            pTwo="improve permainan kamu"
          />
        </div>
      </div>
    </section>
  );
}
