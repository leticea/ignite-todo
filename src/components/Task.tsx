import { Trash } from "phosphor-react";
import { useState } from "react";

import styles from "./Task.module.css";

interface TaskProps {
  description: string;
  done: boolean;
}

export function Task({ done, description }: TaskProps) {

  const [tasks, setTasks] = useState("");


  return (
    <div className={styles.taskContainer}>
      <input className={styles.taskCheckbox} type="checkbox" />
      <p>
        {description}
      </p>
      <button title="Deletar comentário">
        <Trash size={20}  />
      </button>
    </div>
  );
}
