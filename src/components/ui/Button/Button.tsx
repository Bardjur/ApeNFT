import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  children,
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`
        w-full pt-2.5 xl:pt-4 pb-3 xl:pb-5 px-4 rounded-xl xl:text-[28px] leading-[1.19] uppercase common-transition backdrop-blur-md bg-red-light hover:text-black ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  );
}
