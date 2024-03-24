import SocialLink from '../ui/SocialLink';

import IconX from '../../../public/icon/X.svg';
import IconDiscord from '../../../public/icon/discord.svg';
import IconSoc from '../../../public/icon/Logomark.svg';

export interface HeadSocialProps {
  colorType?: 'black' | 'white';
}

export default function HeadSocial({ colorType = 'black' }: HeadSocialProps) {
  return (
    <ul className="inline-flex flex-col gap-y-2">
      <li>
        <SocialLink href="https://github.com/Bardjur" colorType={colorType}>
          <IconDiscord className="w-4 h-4 md:w-6 md:h-6" />
        </SocialLink>
      </li>
      <li>
        <SocialLink href="https://github.com/Bardjur" colorType={colorType}>
          <IconSoc className="w-4 h-4 md:w-6 md:h-6" />
        </SocialLink>
      </li>
      <li>
        <SocialLink href="https://github.com/Bardjur" colorType={colorType}>
          <IconX className="w-4 h-4 md:w-6 md:h-6" />
        </SocialLink>
      </li>
    </ul>
  );
}
