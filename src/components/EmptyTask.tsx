import { ListBullets } from "phosphor-react";

import styles from "./EmptyTask.module.css";

export function EmptyTask() {
  return (
    <div className={styles.emptyTasksContainer}>
      <div className={styles.emptyTasksInfo}>
        <ListBullets size={70} />
        <p className={styles.firstLine}>Você ainda não tem tarefas cadastradas</p>
        <p className={styles.secondLine}>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
