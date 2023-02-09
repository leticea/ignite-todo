import { useState } from "react";

import { Trash } from "phosphor-react";
import styles from "./Task.module.css";
import { TasksProps } from "./Home";

interface TaskProps {
  task: TasksProps;
  removeTask: (id: number) => void;
}

export function Task({ task, removeTask }: TaskProps) {
  const [ done, setDone ] = useState(task.done);

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
      <p>{task.description}</p>
      <button title="Deletar comentário">
        <Trash size={20} onClick={() => handleRemoveTask(task.id)} />
      </button>
    </div>
  );
}
