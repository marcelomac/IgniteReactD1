import { Status } from './Status';
import styles from './TodoList.module.css';


interface iTasks {
  id: string;
  title: string;
  isCompleted: boolean;
}

const totalTasks = tasks.length;

const completedTasks = tasks
  .filter((task) => {
    task.isCompleted;
  })
  .reduce((sum) => {
    return sum;
  }, 0);

// const tarefasConcluidas = tarefas.filter(tarefaAtual => tarefaAtual.isCompleted).length;

export function TodoList({tasks}: iTasks[]) {
  return (
    <div>
      <div>
        <Status title="Tarefas criadas" values={totalTasks.toString()} />
        <Status
          title="Concluídas"
          completedTasks={completedTasks}
          values={`${completedTasks} de ${totalTasks}`}
        />
      </div>

      <div className={styles.tasksList}>
        {tasks.map((task) => {
          return <Task key={task.id} content={task} onDeleteTask={deleteTask} />;
        })}
      </div>

    </div>
  );
}