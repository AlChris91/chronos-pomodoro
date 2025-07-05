import './styles/theme.css';
import './styles/global.css';

import { Logo } from './components/Logo/Index';
import { Container } from './components/Container/Index';
import { Menu } from './components/Menu/Index';
import { CountDown } from './components/CountDown/Index';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer/Index';

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
      <Container>
        <form action='' className='form'>
          <div className='formRow'>
            <DefaultInput
              id='meuinput'
              type='text'
              labelText='Task'
              placeholder='Digite algo'
            />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='formRow'>
            <Cycles />
          </div>
          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
        <Container>
          <Footer />
        </Container>
      </Container>
    </>
  );
}
