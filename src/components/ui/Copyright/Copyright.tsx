export interface CopyrightProps {
  className?: string;
}

export default function Copyright({ className }: CopyrightProps) {
  return (
    <p
      className={`font-['MSMono'] uppercase text-center text-xs xl:text-base leading-[1.17] xl:leading-[1.19] mx-auto ${className}`}
    >
      © Yacht ape 2024 all rights reserved
    </p>
  );
}
