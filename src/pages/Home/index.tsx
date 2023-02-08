import { ListBullets, PlusCircle } from "phosphor-react";
import {
  CreateTaskButton,
  EmptyContainer,
  HomeContainer,
  InfoContainer,
  SearchContainer,
  TaskContainer,
  TaskInput,
} from "./styles";

export function Home() {
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

        <EmptyContainer>
          <ListBullets size={70} />
          <p>Você ainda não tem tarefas cadastradas</p>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </EmptyContainer>
      </TaskContainer>
    </HomeContainer>
  );
}
