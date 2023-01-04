import { ChangeEvent, FormEvent } from "react";
import { FaPlusCircle } from "react-icons/fa";
import styles from "./TaskForm.module.css";

interface iTaskForm {
  handleCreateNewTask: (event: FormEvent<Element>) => void;
  handleNewTaskChange: (event: ChangeEvent<HTMLInputElement>) => void;
  newTaskText: string;
}

export function TaskForm({ handleCreateNewTask, handleNewTaskChange, newTaskText }: iTaskForm) {
  return (
    <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
      <input
        placeholder="Adicione uma nova tarefa"
        name="task"
        required
        onChange={handleNewTaskChange}
        value={newTaskText}
      />
      <button type="submit">
        Criar
        <FaPlusCircle size={14} />
      </button>
    </form>
  );
}
