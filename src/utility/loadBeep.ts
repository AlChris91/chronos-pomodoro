import tictacBeep from '../assets/audios/tic_tac_planeta_miller.mp3';

export function loadBeep() {
  const audio = new Audio(tictacBeep);
  audio.load();
  return () => {
    audio.currentTime = 0;
    audio.play().catch(e => console.log('Error ao tocar audio', e));
  };
}
