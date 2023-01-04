import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./TodoMain.module.css";
import { Task } from "./Task";
import { Status } from "./Status";
import { TaskForm } from "./TaskForm";
import { FaRegClipboard } from 'react-icons/fa';

export function TodoMain() {
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

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
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
    const tasksUpdated = [...tasks];

    const taskIndex = tasks.findIndex((task) => {
      return task.id === taskId;
    });

    tasksUpdated[taskIndex].isCompleted = !tasksUpdated[taskIndex].isCompleted;
    setTasks(tasksUpdated);
  }

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <article className={styles.todoMain}>
      <TaskForm
        handleCreateNewTask={handleCreateNewTask}
        handleNewTaskChange={handleNewTaskChange}
        newTaskText={newTaskText}
      />

      <div className={styles.todoBody}>
        <div className={styles.status}>
          <Status
            title="Tarefas criadas"
            titleStyle={{ color: "#4EA8DE" }}
            values={totalTasks.toString()}
          />
          <Status
            title="Concluídas"
            titleStyle={{ color: "#8284FA" }}
            values={`${completedTasks} de ${totalTasks}`}
          />
        </div>

        <div className={styles.tasksBox}>
          {tasks.length === 0 ? (
            <div className={styles.taskBoxContent}>
              <FaRegClipboard size={48} />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          ) :
          (
            tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  isCompleted={task.isCompleted}
                  onDeleteTask={deleteTask}
                  onCheckTask={checkTask}
                />
              );
            })
          )
        }
        </div>
      </div>
    </article>
  );
}
