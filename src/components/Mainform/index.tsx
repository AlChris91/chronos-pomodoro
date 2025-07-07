import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';

export function MainForm() {
  const taskNameInpult = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleCreateNewTask} action='' className='form'>
      <div className='formRow'>
        <DefaultInput
          id='meuinput'
          type='text'
          labelText='Task'
          placeholder='Digite algo'
          ref={taskNameInpult}
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
  );
}
