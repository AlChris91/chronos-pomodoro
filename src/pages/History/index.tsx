import styles from './styles.module.css';
import { MainTemplate } from '../../template/MainTemplate';
import { Container } from '../../components/Container/Index';
import { Heading } from '../../components/Heading/Index';
import { DefaultButton } from '../../components/DefaultButton';
import { TrashIcon } from 'lucide-react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utility/formatDate';
import { getTaskStatus } from '../../utility/getTaskStatus';
import { sortTasks, type SortTasksOptions } from '../../utility/sortTasks';
import { useState } from 'react';

export function History() {
  const { state } = useTaskContext();
  const [sortTaskOptions, setSortTaskOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.task }),
        field: 'startDate',
        direction: 'desc',
      };
    },
  );
  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    const newDirection = sortTaskOptions.direction === 'desc' ? 'asc' : 'desc';

    setSortTaskOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTaskOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    });
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>
          <span className={styles.buttonContainer}>
            <DefaultButton
              icon={<TrashIcon />}
              color='red'
              aria-label='Apagar todo o histórico'
              title='Apagar Histórico'
            />
          </span>
        </Heading>
      </Container>
      <Container>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th
                  onClick={() => handleSortTasks({ field: 'name' })}
                  className={styles.thSort}
                >
                  Tarefa
                </th>
                <th
                  onClick={() => handleSortTasks({ field: 'duration' })}
                  className={styles.thSort}
                >
                  Duração
                </th>
                <th
                  onClick={() => handleSortTasks({ field: 'startDate' })}
                  className={styles.thSort}
                >
                  Data
                </th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {sortTaskOptions.tasks.map(task => {
                const taskTypeDictionary = {
                  workTime: 'foco',
                  shortBreakTime: 'Descanso curto',
                  longBreakTime: 'Descanso longo',
                };
                return (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.duration}min</td>
                    <td>{formatDate(task.startDate)}</td>
                    <td>{getTaskStatus(task, state.activeTask)}</td>
                    <td>{taskTypeDictionary[task.type]}</td>
                  </tr>
                );
              })}
              ,
              <tr>
                <td>Estudar</td>
                <td>25min</td>
                <td>10/07/2025 10:05</td>
                <td>Completa</td>
                <td>Foco</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplate>
  );
}
