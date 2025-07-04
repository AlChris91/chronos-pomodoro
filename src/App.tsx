import './styles/theme.css';
import './styles/global.css';

import { Logo } from './components/Logo/Index';
import { Heading } from './components/Heading/Index';
import { Container } from './components/Container/Index';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  );
}
