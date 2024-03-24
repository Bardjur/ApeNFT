'use client';

import { ReactNode } from 'react';

export interface SocialLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  colorType?: string;
}

export default function SocialLink({
  href,
  children,
  className = '',
  colorType = 'black',
}: SocialLinkProps) {
  return (
    <a
      rel="noopener noreferrer"
      href={href}
      className={`px-[5px] min-w-12 xl:min-w-20 min-h-12 xl:min-h-20 inline-flex items-center justify-center rounded-lg backdrop-blur-md common-transition 
      ${
        colorType === 'black'
          ? 'black-style bg-black-light-10'
          : 'white-style bg-white-light-10'
      }
      ${className}`}
    >
      {children}
    </a>
  );
}
