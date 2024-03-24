'use client';

import React from 'react';

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactElement;
  error?: string;
  register: {};
}

export default function Input({
  className,
  icon,
  error,
  register,
  ...rest
}: IInputProps) {
  return (
    <label
      className={`block font-[MSMono] relative pb-3 xl:pb-[14px] ${className}`}
    >
      <div className="flex">
        <div className="flex justify-center items-center w-12 h-12 xl:w-16 xl:h-16 rounded-l-xl bg-black-light shrink-0">
          {icon}
        </div>

        <input
          {...rest}
          {...register}
          className={`w-full pl-6 border border-black-light rounded-r-xl bg-inherit focus:outline-none focus:border-white common-transition text-xs xl:text-base leading-[1.17] xl:leading-[1.19] placeholder-[#ffffff3d] ${
            error ? 'border-red-light text-red-light' : 'border-black-light '
          }`}
        />
      </div>

      {error && (
        <div className="absolute bottom-0 right-0 text-red-light text-[10px] xl:text-xs leading-[1.2] xl:leading-[1.17] text-left uppercase">
          {error}
        </div>
      )}
    </label>
  );
}
