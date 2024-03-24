'use client';

import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import Cross from '../../../public/icon/cross.svg';
import MetaMask from '../../../public/icon/MetaMask.svg';
import Discord from '../../../public/icon/discordIpt.svg';

import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

import 'react-toastify/dist/ReactToastify.css';

interface IFormInput {
  discord: string;
  address: string;
}

export default function Mint() {
  const [textBtn, setTextBtn] = useState<string>('MINT');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setTextBtn('MINTED');
    toast.success('MINTED');
  };

  useEffect(() => {
    const word = Object.keys(errors).length !== 0 ? 'ERROR' : 'MINT';
    setTextBtn(word);
  }, [errors?.address, errors?.discord]);

  return (
    <section className="container block-distance">
      <h2 id="mint" className="title">
        Mint
      </h2>

      <div className="md:w-[397px] xl:w-[581px] mb-4 md:mb-6 xl:mb-10 mx-auto text-center">
        <Cross className="mx-auto mb-4 md:mb-6 xl:mb-10 w-[36px] h-[36px]" />

        <p className="font-['MSMono'] xl:text-2xl leading-[1.19] xl:leading-[1.21] uppercase">
          Join the YACHT APE community to be one of the first to receive our
          limited edition NFT
        </p>
      </div>

      <form
        className="mx-auto md:w-[247px] xl:w-[397px]"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <Input
          className="mb-1 xl:mb-2"
          placeholder="@user"
          error={errors.discord?.message}
          icon={<Discord />}
          register={{
            ...register('discord', {
              required: 'Discord is required',
              pattern: {
                value: /^@[A-Za-z]+$/,
                message: 'Wrong discord',
              },
            }),
          }}
        />

        <Input
          className="mb-1 xl:mb-2"
          placeholder="1x28601vsdfg31543cs"
          error={errors.address?.message}
          icon={<MetaMask />}
          register={{
            ...register('address', {
              required: 'Address is required',
              pattern: {
                value: /^[\S\d]+$/,
                message: 'Wrong address',
              },
              minLength: {
                value: 10,
                message: 'must be min 10 characters',
              },
            }),
          }}
        />

        <Button type="submit">{textBtn}</Button>
      </form>

      <ToastContainer />
    </section>
  );
}
