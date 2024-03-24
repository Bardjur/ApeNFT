import { ReactNode } from 'react';
import { Link } from 'react-scroll';

export interface MenuItemProps {
  children: ReactNode;
  link: string;
  isMobile?: boolean;
  type?: 'black' | 'white';
}

const mobStyleLink = 'sm:Only:min-h-10 smOnly:text-2xl smOnly:leading-[1.2]';

const StyleLi =
  'md:px-[5px] md:min-w-12 xl:min-w-20 md:min-h-12 xl:min-h-20 md:inline-flex md:items-center md:justify-center md:rounded-lg md:shrink-0';
const StyleLink =
  'md:hover:underline md:text-xs md:leading-[1.16] common-transition xl:text-base md:py-[15px] xl:py-6 md:px-[5px]';

export default function MenuItem({
  children,
  link,
  isMobile = false,
  type = 'black',
}: MenuItemProps) {
  const colorStyle = type === 'black' ? 'black-style' : 'white-style';

  return (
    <li className={`${StyleLi}`}>
      <Link
        href=""
        aria-label={link}
        className={`font-['MSMono'] font-semibold cursor-pointer block
        ${mobStyleLink} ${StyleLink} 
        ${!isMobile && colorStyle}`}
        to={link}
        smooth={true}
      >
        {children}
      </Link>
    </li>
  );
}
