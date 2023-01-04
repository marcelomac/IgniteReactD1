import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import styles from "./TodoForm.module.css";
import { TodoTask } from "./TodoTask";

export function TodoForm() {
  const [newTaskText, setNewTaskText] = useState("");
  const [tasks, setTasks] = useState<{ id: string; title: string; isCompleted: boolean }[]>([]);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      title: newTaskText,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function deleteTask(taskId: string) {
    const newTaskList = tasks.filter((task) => {
      return task.id != taskId;
    });

    setTasks(newTaskList);
  }

  function checkTask(taskId: string) {
    const tasksUpdated = [...tasks]

    const taskIndex = tasks.findIndex(task => {
      return task.id === taskId
    })

    tasksUpdated[taskIndex].isCompleted = !tasksUpdated[taskIndex].isCompleted;

    setTasks(tasksUpdated);
  }


  return (
    <article>
      <form onSubmit={handleCreateNewTask} className={styles.todoForm}>
        <textarea
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



      <div className={styles.tasksList}>
        {tasks.map((task) => {
          return (
            <TodoTask
              key={task.id}
              id={task.id}
              title={task.title}
              isCompleted={task.isCompleted}
              onDeleteTask={deleteTask}
              onCheckTask={checkTask}
            />
          );
        })}
      </div>
    </article>
  );
}
