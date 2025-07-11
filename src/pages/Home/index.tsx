import { MainTemplate } from '../../template/MainTemplate';
import { Container } from '../../components/Container/Index';
import { CountDown } from '../../components/CountDown/Index';
import { MainForm } from '../../components/Mainform';
import { useEffect } from 'react';

export function Home() {
  useEffect(() => {
    document.title = 'Chronos Pomodoro';
  }, []);
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
