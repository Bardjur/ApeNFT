'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Keyboard, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';

export interface ISliderProps {
  data: string[];
}

export default function Slider({ data }: ISliderProps) {
  return (
    <Swiper
      className="!pb-12 smOnly:max-w-[281px]"
      modules={[Navigation, A11y, Keyboard]}
      onClick={(e) => {
        e.slideNext();
      }}
      keyboard={{
        enabled: true,
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
    >
      {data.map((img) => (
        <SwiperSlide key={img}>
          <div className="xl:w-[240px] mx-auto">
            <Image
              src={img}
              width={284}
              height={336}
              alt="slide"
              sizes="(min-width: 1280px) 240px"
              className="mx-auto"
            />
          </div>
        </SwiperSlide>
      ))}

      <p className="swiper-button-prev after:!content-[none] !mt-0 !w-auto !h-auto !top-auto !bottom-0 !left-[33px] md:!left-[35%] xl:!left-[42%] font-['BiroScriptPB'] text-2xl leading-none !text-white">
        Back
      </p>

      <p className="swiper-button-next after:!content-[none] !mt-0 !w-auto !h-auto !top-auto !bottom-0 !right-[33px] md:!right-[35%] xl:!right-[42%] font-['BiroScriptPB'] text-2xl leading-none !text-white">
        Next
      </p>
    </Swiper>
  );
}
