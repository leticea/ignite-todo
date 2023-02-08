import { PlusCircle } from "phosphor-react";
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

        </ListContainer>
      </TaskContainer>
    </HomeContainer>
  );
}
