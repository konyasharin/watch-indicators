import { FC, ReactNode } from 'react';
import { cn } from '@shared/lib';

interface TypographyProps {
  tag?: `h${1 | 2 | 3 | 4 | 5 | 6}` | 'p';
  children?: ReactNode;
  className?: string;
}

export const Typography: FC<TypographyProps> = props => {
  const Tag = props.tag ?? 'p';
  return <Tag className={cn('inline', props.className)}>{props.children}</Tag>;
};
