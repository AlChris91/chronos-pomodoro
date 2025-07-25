import type { TaskStateModel } from '../../models/TaskStateModel';

export const initialTaskState: TaskStateModel = {
  task: [],
  secondsRemaining: 0,
  formatedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};
