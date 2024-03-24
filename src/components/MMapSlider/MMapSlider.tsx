'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import MMapCard from '../MMapCard';
import { IMMapCardProps } from '../MMapCard/MMapCard';

export interface IMMapSliderProps {
  data: IMMapCardProps[];
}

export default function MMapSlider({ data }: IMMapSliderProps) {
  return (
    <Swiper
      className="!pb-12 w-[216px]"
      modules={[Navigation, A11y]}
      initialSlide={data.length}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
    >
      {data.map((slide, idx) => {
        let {
          title,
          type = undefined,
          link = undefined,
          children = undefined,
        } = slide;
        return (
          <SwiperSlide key={idx}>
            <MMapCard title={title} type={type} link={link}>
              {children}
            </MMapCard>
          </SwiperSlide>
        );
      })}

      <p className="swiper-button-prev after:!content-[none] !mt-0 !w-auto !h-auto !top-auto !bottom-0 !left-[33px] font-['BiroScriptPB'] text-2xl leading-none !text-white">
        Back
      </p>

      <p className="swiper-button-next after:!content-[none] !mt-0 !w-auto !h-auto !top-auto !bottom-0 !right-[33px] font-['BiroScriptPB'] text-2xl leading-none !text-white">
        Next
      </p>
    </Swiper>
  );
}
