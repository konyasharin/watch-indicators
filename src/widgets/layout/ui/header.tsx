import { Container, Logo } from '@shared/components';
import { HEADER_HEIGHT_KEY } from '@widgets/layout';

export const Header = () => {
  return (
    <div
      className={'w-full fixed'}
      style={{ height: `var(${HEADER_HEIGHT_KEY})` }}
    >
      <Container className={'md:px-36 pt-5 border-b border-b-secondary h-full'}>
        <Logo />
      </Container>
    </div>
  );
};
