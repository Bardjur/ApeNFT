'use client';

import Copyright from '../ui/Copyright';
import MenuItem from '../MenuItem';
import { IMenuItem } from '@/types';
import { useEffect } from 'react';
import { Events } from 'react-scroll';

export interface IMobileMenuProps {
  handlerClick: () => void;
  menuData: IMenuItem[];
}

export default function MobileMenu({
  handlerClick,
  menuData,
}: IMobileMenuProps) {
  useEffect(() => {
    Events.scrollEvent.register('begin', () => {
      handlerClick();
    });
  });

  return (
    <div className="bg-black fixed w-dvw h-dvh left-0 top-0 z-[1]">
      <nav className="flex flex-col container h-full relative">
        <ul
          role="navigation"
          className="flex flex-col flex-1 justify-center items-center  gap-y-4"
        >
          {menuData.map(({ name, link }: IMenuItem, idx) => (
            <MenuItem isMobile link={link} key={idx}>
              {name}
            </MenuItem>
          ))}
        </ul>

        <Copyright className="pb-20 max-w-[216px]" />
      </nav>
    </div>
  );
}
