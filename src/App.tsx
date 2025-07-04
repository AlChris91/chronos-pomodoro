import './styles/theme.css';
import './styles/global.css';

import { Logo } from './components/Logo/Index';
import { Container } from './components/Container/Index';
import { Menu } from './components/Menu/Index';
import { CountDown } from './components/CountDown/Index';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
    </>
  );
}
