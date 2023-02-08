import { ListBullets } from "phosphor-react";

import styles from "./EmptyTask.module.css";

export function EmptyTask() {
  return (
    <div className={styles.emptyTasksContainer}>
      <ListBullets size={70} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
