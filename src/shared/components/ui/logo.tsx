import { FC } from 'react';
import { Typography } from '@shared/components';
import { Eye } from 'lucide-react';
import Image from 'next/image';

interface LogoProps {
  withinMadeWith?: boolean;
}

export const Logo: FC<LogoProps> = props => {
  const base = (
    <div className={'flex gap-1.5 items-center'}>
      <Eye size={36} />
      <Typography tag={'h1'}>Watcher</Typography>
    </div>
  );
  if (props.withinMadeWith) return base;
  return (
    <div className={'flex gap-2 align-bottom'}>
      {base}
      <div className={'flex gap-1.5 items-end'}>
        <Typography tag={'p'} className={'text-xs'}>
          made with
        </Typography>
        <Image
          src={'/next.svg'}
          alt={'Logo'}
          width={0}
          height={0}
          priority={true}
          className={'-translate-y-1'}
          style={{ height: 'auto', width: 48 }}
        />
      </div>
    </div>
  );
};
