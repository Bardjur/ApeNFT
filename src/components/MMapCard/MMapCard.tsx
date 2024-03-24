import Arrow from '../../../public/icon/Vector.svg';

export interface IMMapCardProps {
  title: string;
  type?: 'text' | 'link';
  children?: string;
  link?: string;
}

const wrapStyle =
  'flex flex-col w-[216px] h-[242px] md:w-[284px] xl:w-[504px] xl:h-[480px] px-3 py-6 md:p-6 rounded-xl md:rounded-2xl xl:rounded-3xl';
const headStyle = 'mt-auto text-[32px] xl:text-[64px] leading-none uppercase';

export default function MMapCard({
  title,
  type = 'text',
  children,
  link = '',
}: IMMapCardProps) {
  return (
    <>
      {type === 'link' ? (
        <a className={`${wrapStyle} bg-red-light`} href={link}>
          <div className="flex justify-center items-center w-[48px] h-[48px] xl:w-[64px] xl:h-[64px] ml-auto">
            <Arrow className="w-[24px] h-[24px] xl:w-[40px] xl:h-[40px]" />
          </div>

          <h3 className={headStyle}>{title}</h3>
        </a>
      ) : (
        <div className={`${wrapStyle} bg-black-light`}>
          <p className="md:ml-auto md:w-32 xl:w-[228px] font-['MSMono'] text-xs xl:text-2xl leading-[1.17] xl:leading-[1.21] uppercase">
            {children}
          </p>

          <h3 className={headStyle}>{title}</h3>
        </div>
      )}
    </>
  );
}
