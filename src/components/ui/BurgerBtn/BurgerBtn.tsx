import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface BurgerBtnProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  colorType?: 'black' | 'white';
}

export default function BurgerBtn({
  children,
  className,
  colorType = 'black',
  ...rest
}: BurgerBtnProps) {
  return (
    <button
      {...rest}
      className={`px-[5px] min-w-12 xl:min-w-20 min-h-12 xl:min-h-20 inline-flex items-center justify-center rounded-lg hover:underline shrink-0 font-['MSMono'] font-semibold text-xs xl:text-base leading-[1.16] backdrop-blur-md common-transition
      ${className} 
      ${colorType === 'black' ? 'black-style' : 'white-style'}`}
    >
      {children}
    </button>
  );
}
