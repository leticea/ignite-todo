import { Trash } from "phosphor-react";
import styles from "./Task.module.css";
import { TasksProps } from "./Home";

interface TaskProps {
  task: TasksProps;
  removeTask: (id: number) => void;
}

export function Task({ task, removeTask }: TaskProps) {

  function handleRemoveTask(id: number) {
    removeTask(id);
    console.log("deu")
  }

  return (
    <div className={styles.taskContainer}>
      <input
        className={styles.taskCheckbox}
        type="checkbox"
        defaultChecked={done}
      />
      <p>{description}</p>
      <button title="Deletar comentário" >
        <Trash size={20} onClick={handleRemoveTask(id)} />
      </button>
    </div>
  );
}
