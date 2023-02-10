import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { PlusCircle } from "phosphor-react";
import { EmptyTask } from "./EmptyTask";
import { Task } from "./Task";

import styles from "./Home.module.css";

export interface TasksProps {
  id: number;
  description: string;
  done: boolean;
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
  const [tasks, setTasks] = useState<TasksProps[]>(tasksDB);

  const [newTask, setNewTask] = useState("");

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

  function updateNewTaskValue(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);

    const newTasks = tasks.filter((task) => task.description.includes(newTask));

    if (newTask != "") {
      console.log(1);
      setTasks(newTasks);
      return;
    }

    console.log(2);

    setTasks(tasks);
  }

  function removeTask(id: number) {
    const undeletedTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(undeletedTasks);
  }

  useEffect(() => {

  }, [newTask]);

  return (
    <div className={styles.container}>
      <form className={styles.searchContainer} onSubmit={handleCreateNewTask}>
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          name="searchTask"
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
          return <Task key={task.id} task={task} removeTask={removeTask} />;
        })}
      </div>
    </div>
  );
}
