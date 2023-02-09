import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  description: string;
  done: boolean;
}

export function Task({ done, description }: TaskProps) {

  return (
    <div className={styles.taskContainer}>
      <input value={id} className={styles.taskCheckbox} type="checkbox" checked={done} />
      <p>
        {description}
      </p>
      <button title="Deletar comentário">
        <Trash size={20}  />
      </button>
    </div>
  );
}
