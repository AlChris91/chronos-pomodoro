import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utility/getNextCycle';
import { getNextCycleType } from '../../utility/getnextCycleType';
import styles from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle });

  const cycleDescription = {
    workTime: 'foco',
    shortBreakTime: 'descanso curto',
    longBreakTime: 'descanso longo',
  };
  return (
    <div className={styles.cycles}>
      {cycleStep.map((_, index) => {
        const nextCycle = getNextCycle(index);
        const nextCycleType = getNextCycleType(nextCycle);
        return (
          <span
            key={nextCycle}
            className={`${styles.cycleDot} ${styles[nextCycleType]}`}
            aria-label={`Indicador de ciclo  de  ${cycleDescription[nextCycleType]}`}
            title={`Indicador de ciclo  de  ${cycleDescription[nextCycleType]}`}
          ></span>
        );
      })}
    </div>
  );
}
