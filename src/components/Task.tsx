import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  description: string;
  done: boolean;
  removeTask: (id: number) => void;
}

export function Task({ done, description, removeTask }: TaskProps) {

  function handleRemoveTask(id: number) {
    removeTask(id);
  }

  return (
    <div className={styles.taskContainer}>
      <input
        className={styles.taskCheckbox}
        type="checkbox"
        defaultChecked={done}
      />
      <p>{description}</p>
      <button title="Deletar comentário" onClick={handleRemoveTask}>
        <Trash size={20}  />
      </button>
    </div>
  );
}
