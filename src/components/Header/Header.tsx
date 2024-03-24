'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import IconLogo from '../../../public/icon/Logo.svg';

import { useDevice } from '@/utils/useDevice';

import HeadSocial from '../HeadSocial';
import Menu from '../Menu/Menu';
import MobileMenu from '../MobileMenu';

const menuData = [
  { name: 'ABOUT', link: 'about' },
  { name: 'M-MAP', link: 'mmap' },
  { name: 'FAQ', link: 'faq' },
  { name: 'ARTS', link: 'collection' },
  { name: 'MINT', link: 'mint' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const device = useDevice();

  useEffect(() => {
    device === 'desktop' && setIsOpen(true);
  }, [device]);

  useEffect(() => {
    isOpen && device === 'mobile'
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden');
  }, [device, isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      console.log(device);

      window.scrollY > 54 && device === 'mobile'
        ? setIsFixed(true)
        : setIsFixed(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [device]);

  const handlerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="absolute z-[11] top-[54px] xl:top-4 w-full">
      <div className="container pt-2 md:pt-3 px-4 md:px-[28px] relative">
        <Link
          href="/"
          className={`absolute z-10 left-4 md:left-7 xl:left-10 top-2 md:top-5 xl:top-[39px] common-transition
            ${isOpen && device === 'mobile' ? 'white-style' : 'black-style'}`}
        >
          <IconLogo className="w-[48px] xl:w-[72px]" />
        </Link>

        <div
          className={`inline-flex flex-col items-end gap-y-2 ${
            isFixed ? 'fixed' : 'absolute'
          } z-10 right-4 md:right-7 xl:right-10 top-2 md:top-3 xl:top-6 overflow-hidden`}
        >
          <Menu
            handlerClick={handlerClick}
            isOpen={isOpen}
            isFixed={isFixed}
            menuData={menuData}
          />

          <HeadSocial
            colorType={
              isFixed || (isOpen && device === 'mobile') ? 'white' : 'black'
            }
          />
        </div>
      </div>

      {isOpen && device === 'mobile' && (
        <MobileMenu menuData={menuData} handlerClick={handlerClick} />
      )}
    </header>
  );
}
