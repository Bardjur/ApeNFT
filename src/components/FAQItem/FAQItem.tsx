'use client';

import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

import css from './FAQItem.module.css';
import { IFAQItem } from '@/types';

export interface IFAQItemProps {
  order: number;
  selectNumber: number;
  data: IFAQItem;
  onClick: Dispatch<SetStateAction<number>>;
}

export default function FAQItem({
  order,
  selectNumber,
  onClick,
  data,
}: IFAQItemProps) {
  const isOpen = selectNumber === order;
  const { image, title, text } = data;

  return (
    <li
      className={`p-2 md:py-[18px] md:pr-4 md:pl-[183px] xl:pl-[297px] xl:p-6 rounded-xl relative common-transition
      ${css.faq} ${isOpen ? 'bg-black-light' : ''}`}
      onClick={() => {
        onClick(order);
      }}
    >
      {isOpen && (
        <div className="smOnly:hidden absolute left-[19px] top-[-15px] xl:top-[-36px] w-[148px] xl:w-[248px] rotate-[-16deg] xl:rotate-[-8deg]">
          <Image
            src={image}
            alt="ape afq"
            width={248}
            height={306}
            sizes="(min-width: 1280px) 248px,
                (min-width: 768px) 148px"
          />
        </div>
      )}

      <div className="flex gap-x-2 md:gap-x-5 xl:gap-x-6">
        <p
          className={`shrink-0 md:mt-[5px] xl:mt-[10px] font-['BiroScriptPB'] text-xs md:text-[16px] xl:text-[24px] leading-[1.67] ${
            isOpen ? '' : 'text-red-light'
          }`}
        >
          [{order}]
        </p>

        <div>
          <h4
            className={`text-xl md:text-[32px] xl:text-[64px] leading-none ${
              isOpen ? 'text-red-light' : ''
            }`}
          >
            {title}
          </h4>

          <div className="overflow-hidden">
            <p
              className={`pt-2.5 font-['MSMono'] text-xs xl:text-base leading-[1.17] xl:leading-[1.19] uppercase common-transition ${
                !isOpen ? 'h-0 opacity-0' : ''
              }`}
            >
              {text}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
