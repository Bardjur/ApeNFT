import Slider from '@/components/Slider';

const dataSlide: string[] = [
  '/imgs/slide1.png',
  '/imgs/slide2.png',
  '/imgs/slide3.png',
  '/imgs/slide4.png',
  '/imgs/slide5.png',
  '/imgs/slide6.png',
  '/imgs/slide7.png',
  '/imgs/slide8.png',
];

export default function Collection() {
  return (
    <section className="container block-distance">
      <h2 id="collection" className="title">
        Collection
      </h2>
      <Slider data={dataSlide} />
    </section>
  );
}
