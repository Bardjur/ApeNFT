'use client';

import { IMenuItem } from '@/types';
import { useDevice } from '@/utils/useDevice';

import MenuItem from '../MenuItem';
import BurgerBtn from '../ui/BurgerBtn';

export interface IMenuProps {
  handlerClick?: () => void;
  isOpen: boolean;
  isFixed: boolean;
  menuData: IMenuItem[];
}

export default function Menu({
  handlerClick,
  isOpen,
  menuData,
  isFixed,
}: IMenuProps) {
  const device = useDevice();

  return (
    <nav
      className={`rounded-lg backdrop-blur-md
        ${
          isFixed || (isOpen && device === 'mobile')
            ? 'bg-white-light-10'
            : 'bg-black-light-10'
        }`}
    >
      <ul
        role="navigation"
        className={`inline-flex whitespace-nowrap overflow-hidden smOnly:hidden common-transition ${
          isOpen && device !== 'mobile' ? '' : 'w-0 opacity-0'
        }`}
      >
        {menuData.map(({ name, link }: IMenuItem, idx) => (
          <MenuItem type="black" link={link} key={idx}>
            {name}
          </MenuItem>
        ))}
      </ul>

      <BurgerBtn
        colorType={
          isFixed || (isOpen && device === 'mobile') ? 'white' : 'black'
        }
        type="button"
        onClick={handlerClick}
      >
        {isOpen ? 'CLOSE' : 'MENU'}
      </BurgerBtn>
    </nav>
  );
}
