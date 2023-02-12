import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { EmptyTask } from "./EmptyTask";
import { Task } from "./Task";

import { PlusCircle } from "phosphor-react";
import styles from "./Home.module.css";

export interface TasksProps {
  id: number;
  description: string;
  done: boolean;
}

let tasksDB = [
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
  const [tasks, setTasks] = useState<TasksProps[]>(tasksDB);

  const [newTask, setNewTask] = useState("");

  const [tasksNumber, setTasksNumber] = useState(tasks.length);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const lastId = tasks[tasks.length - 1].id;

    const newTasks = [
      ...tasks,
      {
        id: lastId + 1,
        description: newTask,
        done: false,
      },
    ];

    setTasks(newTasks);
    setNewTask("");

    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "{}");
    if (tasks) {
     setTasks(tasks);
    }
  }, []);

  function updateNewTaskValue(event: ChangeEvent<HTMLInputElement>) {
    const filteredTasks = tasks.filter((task) => task.description.toLowerCase().includes(newTask))
    setTasks(filteredTasks)

    setNewTask(event.target.value);
  }

  function removeTask(id: number) {
    const undeletedTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(undeletedTasks);
  }

  useEffect(() => {
    setTasksNumber(tasks.length);
  }, [tasks]);

  return (
    <div className={styles.container}>
      <form className={styles.searchContainer} onSubmit={handleCreateNewTask}>
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          name="newTask"
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
          <div className={styles.createdTasksCounter}>{tasksNumber}</div>

          <div className={styles.completedTasks}>Concluídas</div>
          <div className={styles.completedTasksCounter}>de {tasksNumber}</div>
        </div>
        {/*<EmptyTask />*/}

        {tasks.map((task) => {
          return <Task key={task.id} task={task} removeTask={removeTask} />;
        })}
      </div>
    </div>
  );
}
