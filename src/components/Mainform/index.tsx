import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utility/getNextCycle';
import { getNextCycleType } from '../../utility/getnextCycleType';
import { formatSecondsToMinutes } from '../../utility/formatSecondsToMinuttes';

export function MainForm() {
  const { state, setState } = useTaskContext();

  const taskNameInpult = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);

  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInpult.current === null) return;

    const taskName = taskNameInpult.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };
    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        acitivetask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formatedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        task: [...prevState.task, newTask],
        config: { ...prevState.config },
      };
    });
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
        <p>Próximo intervalo é de 25min</p>
      </div>
      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
