import { ChangeEvent, FormEvent, useState } from "react";

import { PlusCircle } from "phosphor-react";
import { EmptyTask } from "./EmptyTask";
import { Task } from "./Task";

import styles from "./Home.module.css";

interface TaskProps {
  description: string;
  done: boolean;
  id: number;
}

const tasksDB = [
  {
    id: 1,
    description: "Molhar as plantas",
    done: true,
  },
  {
    id: 2,
    description: "Ir ao mercado",
    done: false,
  },
  {
    id: 3,
    description: "Fazer exercício",
    done: false,
  },
];

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>(tasksDB);

  const [newTask, setNewTask] = useState("");

  function createNewTask(event: FormEvent) {
    event.preventDefault();

    const lastId = tasks[tasks.length - 1].id;

    const newTasks = [...tasks, {
      id: lastId + 1,
      description: newTask,
      done: false,
     }];

    setTasks(newTasks);
    setNewTask("");
  }

  function updateNewTaskValue(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  return (
    <div className={styles.container}>
      <form className={styles.searchContainer} onSubmit={createNewTask}>
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          name="taskInput"
          value={newTask}
          onChange={updateNewTaskValue}
        />
        <button type="submit">
          Criar <PlusCircle size={20} />
        </button>
      </form>

      <div className={styles.taskContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.createdTasks}>Tarefas criadas</div>
          <div className={styles.createdTasksCounter}>0</div>

          <div className={styles.completedTasks}>Concluídas</div>
          <div className={styles.completedTasksCounter}>0</div>
        </div>
        {/*<EmptyTask />*/}
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              description={task.description}
              done={task.done}
            />
          );
        })}
      </div>
    </div>
  );
}
