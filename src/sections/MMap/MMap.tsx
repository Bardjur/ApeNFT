'use client';

import MMapCard, { IMMapCardProps } from '@/components/MMapCard/MMapCard';
import MMapSlider from '@/components/MMapSlider';
import { useDevice } from '@/utils/useDevice';

const dataSlide: IMMapCardProps[] = [
  {
    title: 'YAPE DROP',
    children:
      'All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own',
  },
  {
    title: 'New Collection',
    children:
      'Launch of the 2nd YACHT Collection Releasing the first version of the Ape Slam Game',
  },
  {
    title: 'Token',
    children:
      'Launch your own token, the proceeds of which will go to a global fund to LAUNCH YACHT CLUB AND PROMOTE it',
  },
  {
    title: 'Learn more in mind map',
    type: 'link',
    link: 'https://github.com/Bardjur',
  },
];

export default function MMap() {
  const device = useDevice();

  return (
    <section className="container block-distance">
      <h2 id="mmap" className="title">
        MIND map
      </h2>
      {device === 'mobile' ? (
        <MMapSlider data={dataSlide} />
      ) : (
        <div className="grid grid-cols-2 gap-6">
          {dataSlide.map((slide, idx) => {
            let {
              title,
              type = undefined,
              link = undefined,
              children = undefined,
            } = slide;
            return (
              <MMapCard key={idx} title={title} type={type} link={link}>
                {children}
              </MMapCard>
            );
          })}
        </div>
      )}
    </section>
  );
}
