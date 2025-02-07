import { FC, ReactNode } from 'react';
import { cn } from '@shared/lib';

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = props => {
  return (
    <div className={cn('m-auto', 'px-4', props.className)}>
      {props.children}
    </div>
  );
};
