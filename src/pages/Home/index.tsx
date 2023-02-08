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
          <p>Tarefas criadas</p>
          <span>Concluídas</span>
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

