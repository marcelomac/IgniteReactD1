import { FaPlusCircle } from "react-icons/fa";
import styles from "./AddTask.module.css";

export function AddTask() {
  return (
    <div className={styles.addTaskBox}>
      <textarea placeholder="Adicione uma nova tarefa"/>
      <button type="submit">
        Criar
        <FaPlusCircle size={14} />
      </button>
    </div>
  );
}
