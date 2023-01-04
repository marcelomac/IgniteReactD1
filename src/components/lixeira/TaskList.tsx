import { TaskItem } from "./TaskItem";
import styles from "./TaskList.module.css";

export function TaskList(): any {
  return (
    <article className={styles.taskList}>
      <header>
        <div>
          <strong>Tarefas criadas</strong>
          <span>5</span>
        </div>
        <div>
          <strong>Concluídas</strong>
          <span>2 de 5</span>
        </div>
      </header>
      <div>
       <TaskItem />
       <TaskItem />
      </div>
    </article>
  );
}