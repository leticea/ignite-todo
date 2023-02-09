import { Trash } from "phosphor-react";

import styles from "./Tasks.module.css";

export function Tasks() {
  return (
    <div className={styles.taskContainer}>
      <input className={styles.taskCheckbox} type="checkbox" />
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button title="Deletar comentário">
        <Trash size={20}  />
      </button>
    </div>
  );
}
