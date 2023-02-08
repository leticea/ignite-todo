import styles from "./Home.module.css";

import { ListBullets, PlusCircle } from "phosphor-react";

export function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Adicione uma tarefa" />
        <button type="submit">
          Criar <PlusCircle size={20} />
        </button>
      </div>

      <div className={styles.taskContainer}>
        
        <div className={styles.infoContainer}>
          <div className={styles.createdTasks}>Tarefas criadas</div>
          <div className={styles.createdTasksCounter}>0</div>

          <div className={styles.completedTasks}>Concluídas</div>
          <div className={styles.completedTasksCounter}>0</div>
        </div>

        <div className={styles.emptyContainer}>
          <ListBullets size={70} />
          <p>Você ainda não tem tarefas cadastradas</p>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </div>

    </div>
  );
}
