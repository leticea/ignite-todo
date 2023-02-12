import { useState } from "react";

import * as Checkbox from "@radix-ui/react-checkbox";
import { Trash, Check } from "phosphor-react";
import { TasksProps } from "./Home";

import styles from "./Task.module.css";

interface TaskProps {
  task: TasksProps;
  removeTask: (id: number) => void;
  handleChangeComplete: (id: number) => void;
}

export function Task({ task, handleChangeComplete, removeTask }: TaskProps) {
  const [done, setDone] = useState(task.done);
  const [checked, setChecked] = useState(done);

  function handleRemoveTask(id: number) {
    removeTask(id);
  }

  function handleOnChangeDoneCheckbox(id: number) {
    setChecked(!checked);
    handleChangeComplete(id);
  }

  return (
    <div className={styles.taskContainer}>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => handleOnChangeDoneCheckbox(task.id)}
          id={task.id.toString()}
          name="tasks"
          value={task.id}
        />
        <span className={styles.checked}>
          {checked ? <Check size={14} color="#F2F2F2" /> : ""}
        </span>
      </label>
      <p>{task.description}</p>
      <button title="Deletar comentário">
        <Trash size={20} onClick={() => handleRemoveTask(task.id)} />
      </button>
    </div>
  );
}
