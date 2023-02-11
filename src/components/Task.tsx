import { useState } from "react";

import * as Checkbox from "@radix-ui/react-checkbox";
import { Trash, Check } from "phosphor-react";
import { TasksProps } from "./Home";

import styles from "./Task.module.css";

interface TaskProps {
  task: TasksProps;
  removeTask: (id: number) => void;
}

export function Task({ task, removeTask }: TaskProps) {
  const [done, setDone] = useState(task.done);

  function handleRemoveTask(id: number) {
    removeTask(id);
  }

  return (
    <div className={styles.taskContainer}>
      <Checkbox.Root
        defaultChecked={done}
      >
        <div className={styles.taskCheckbox}>
          <Checkbox.Indicator>
            <Check size={20} color="white" />
          </Checkbox.Indicator>
        </div>
      </Checkbox.Root>
      <p>{task.description}</p>
      <button title="Deletar comentário">
        <Trash size={20} onClick={() => handleRemoveTask(task.id)} />
      </button>
    </div>
  );
}
