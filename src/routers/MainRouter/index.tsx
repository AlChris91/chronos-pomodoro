import { BrowserRouter, Route, Routes } from 'react-router';
import { AboutPomodoro } from '../../pages/AboutPomodoro';
import { Home } from '../../pages/Home';
import { NotFound } from '../../pages/NotFound';
import { ScrollToTop } from '../../components/ScrollToTop';

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-pomodoro' element={<AboutPomodoro />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
