import { PlusCircle, Trash } from "phosphor-react";
import {
  CreateTaskButton,
  ListContainer,
  HomeContainer,
  InfoContainer,
  SearchContainer,
  TaskContainer,
  TaskInput,
} from "./styles";

export function Tasks() {
  return (
    <HomeContainer>
      <SearchContainer>
        <TaskInput type="text" placeholder="Adicione uma tarefa" />

        <CreateTaskButton type="submit">
          Criar <PlusCircle size={20} />
        </CreateTaskButton>
      </SearchContainer>

      <TaskContainer>
        <InfoContainer>
          <div className="createdTasks">Tarefas criadas</div>
          <div className="createdTasksCounter">0</div>

          <div className="completedTasks">Concluídas</div>
          <div className="completedTasksCounter">0</div>
        </InfoContainer>

        <ListContainer>
          <div className="task">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </div>
          <button title="Deletar comentário">
            <Trash size={20} />
          </button>
        </ListContainer>
      </TaskContainer>
    </HomeContainer>
  );
}
