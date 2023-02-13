import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import uuid from 'react-uuid';

import { EmptyTask } from "./EmptyTask";
import { Task } from "./Task";

import { PlusCircle } from "phosphor-react";
import styles from "./Home.module.css";

export interface TasksProps {
  id: number;
  description: string;
  done: boolean;
}



export function Home() {
  const [tasksDB, setTasksDB] = useState<TasksProps[]>(getLocalStorage());
  const [tasks, setTasks] = useState<TasksProps[]>(getLocalStorage());
  const [newTask, setNewTask] = useState("");

  const [tasksNumber, setTasksNumber] = useState(tasks.length);

  const [tasksCompleteNumber, setTasksCompleteNumber] = useState(countTasks());

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasksDB(getLocalStorage());

    if (tasksDB.length > 0) {

      const newTasks = [
        ...getLocalStorage(),
        {
          id: uuid(),
          description: newTask,
          done: false,
        },
      ];
      setTasksDB(newTasks);
      console.log("ggg - ", getLocalStorage())
      console.log("ggg - ", tasksDB)
      console.log("ggg - ", newTasks)
    } else {
      const newTasks = [
        {
          id: uuid(),
          description: newTask,
          done: false,
        },
      ];

      console.log("ppp - ", tasksDB)
      setTasksDB(newTasks);
    }


    setLocalStorage();
    setNewTask("");
    setTasks(tasksDB);
    console.log("ttt", tasksDB)
    console.log("uuu", tasks)
  }

  function setLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasksDB));
  }

  function getLocalStorage() {
    return JSON.parse(localStorage.getItem("tasks") || "{}");
  }

  useEffect(() => {

    /*const tasksDB = getLocalStorage();
    if (tasksDB.length > 0) {

     setTasks(tasksDB);
    }*/
  }, [newTask == '']);

  function updateNewTaskValue(event: ChangeEvent<HTMLInputElement>) {
    /* if (tasks.length > 0) {
      const filteredTasks = tasks.filter((task) => task.description.toLowerCase().includes(newTask))
    setTasks(filteredTasks)
     } */


    setNewTask(event.target.value);
  }

  function removeTask(id: number) {
    const undeletedTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    //localStorage.removeItem("id");
    setTasks(undeletedTasks);
  }



  function countTasks() {
    if (tasksDB.length > 0) {
      const tasksCompleteCount = tasksDB.filter(task => task.done);
      return tasksCompleteCount.length;
    }

  }

  function handleChangeComplete(id: number) {

    if (tasksDB.length > 0) {
      tasks.map(task => (task.id === id) ? task.done = !task.done : task.done);
      setTasksCompleteNumber(countTasks());
    }

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
          <div className={styles.completedTasksCounter}>{tasksCompleteNumber} de {tasksNumber}</div>
        </div>
        {/*<EmptyTask />*/}
        {
        tasks.length > 0
          ? tasks.map((task) => {
              return (
              <Task
                key={task.id}
                task={task}
                removeTask={removeTask}
                handleChangeComplete={handleChangeComplete}
                />
              )
            })
            : []
          }

      </div>
    </div>
  );
}
