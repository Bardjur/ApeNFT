'use client';

import Image from 'next/image';
import apeImg from '../../../public/imgs/hero.png';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section className="pt-[54px] xl:pt-4 px-2 md:px-4 container relative">
      <div className="px-16 md:px-[72px] xl:px-[114px] pt-9 md:pt-[124px] xl:pt-[197px] pb-[19px] md:pb-[36px] xl:pb-[109px] rounded-xl bg-red-light text-center text-black-light">
        <p className="font-['BiroScriptPB'] leading-[1.68] md:leading-[1.65] md:text-xl xl:text-2xl md:text-left">
          diD yOu seE iT ?
        </p>

        <h1 className="text-[44px] md:text-[92px] xl:text-[164px] leading-none mb-2 md:mb-4 xl:mb-[30px] md:word-spacing">
          YACHT APES
        </h1>

        <p className="xl:ml-[120px] font-['BiroScriptPB'] leading-[1.68] md:leading-[1.65] smOnly:mb-1.5 md:text-xl xl:text-2xl md:text-left">
          Apes aRe eveRywhere
        </p>

        <div className="md:absolute md:w-[291px] xl:w-auto md:bottom-0 md:left-[220px] xl:md:left-[380px]">
          <Image
            src={apeImg}
            width={463}
            height={612}
            alt="Ape"
            sizes="(min-width: 1280px) 463px,
              (min-width: 768px) 283px,
              216px"
          />
        </div>

        <div className="md:max-w-[190px] xl:max-w-[337px] md:flex md:flex-col-reverse md:mt-[-25px] xl:mt-[-30px] md:ml-auto md:gap-y-4">
          <Link
            smooth={true}
            aria-label="Mint"
            href=""
            to="mint"
            className="inline-block w-full smOnly:mb-3 smOnly:mt-[-4px] pt-2.5 xl:pt-4 pb-3 xl:pb-5 px-4 text-black hover:text-white xl:text-[28px] leading-[1.19]
             bg-black-light-10 rounded-xl common-transition backdrop-blur-md uppercase
            "
          >
            mint apes
          </Link>

          <p className="text-xs xl:text-base font-['MSMono'] uppercase leading-[1.16] xl:leading-[1.19] md:first-letter:ml-[40%] xl:first-letter:ml-[25%] md:text-justify">
            Yacht Ape is a collection of unique digital apes that you can own in
            NFT format
          </p>
        </div>
      </div>
    </section>
  );
}
