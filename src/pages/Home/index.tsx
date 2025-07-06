import { MainTemplate } from '../../template/MainTemplate';
import { Container } from '../../components/Container/Index';
import { CountDown } from '../../components/CountDown/Index';
import { MainForm } from '../../components/Mainform';

export function Home() {
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
