'use client';

import { FC, ReactNode } from 'react';
import { Container } from '@shared/components';
import { useCssVar } from '@shared/hooks';
import { HEADER_HEIGHT_KEY } from '@widgets/layout';
import { AppShellConfig } from '@widgets/layout/model';

interface AppShellProps {
  config: AppShellConfig;
  header: ReactNode;
  children?: ReactNode;
}

export const AppShell: FC<AppShellProps> = props => {
  const { ref } = useCssVar(
    HEADER_HEIGHT_KEY,
    `${props.config.header.height}px`,
  );

  return (
    <div ref={ref}>
      {props.header}
      <main style={{ paddingTop: props.config.header.height + 20 }}>
        <Container className={'md:px-48'}>{props.children}</Container>
      </main>
    </div>
  );
};
