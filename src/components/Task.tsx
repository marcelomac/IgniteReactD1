import styles from "./Task.module.css";
import { FaTrash } from "react-icons/fa";

interface iTaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
  onDeleteTask: (task: string) => void;
  onCheckTask: (task: string) => void;
}

export function Task({ id, title, isCompleted, onDeleteTask, onCheckTask }: iTaskProps) {
  function handleCheckTask() {
    onCheckTask(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.taskBox}>
      <div className={styles.taskContent}>
        <input type="checkbox" checked={isCompleted} onChange={handleCheckTask} id={id}/>
        <label htmlFor={id}></label>
        <p className={isCompleted === true ? styles.completed : ''}>{title}</p>
      </div>
      <button onClick={handleDeleteTask} title="Deletar tarefa">
        <FaTrash size={14} />
      </button>
    </div>
  );
}
