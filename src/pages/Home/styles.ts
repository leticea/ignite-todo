import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchContainer = styled.div`
  position: absolute;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const TaskInput = styled.input`
  background: ${(props) => props.theme["gray-500"]};
  color: ${(props) => props.theme["gray-300"]};
  width: 39.875rem;
  height: 3.375rem;
  border-radius: 8px;
  padding-left: 1rem;
  border: 1px solid ${(props) => props.theme["gray-700"]};

  ::placeholder {
    color: ${(props) => props.theme["gray-300"]};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["gray-400"]};
  }
`;

export const CreateTaskButton = styled.button`
  width: 5.625rem;
  height: 3.25rem;
  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background: ${(props) => props.theme["blue-dark"]};

  color: ${(props) => props.theme["gray-100"]};
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }
`;

export const TaskContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  justify-content: center;
  position: absolute;
  width: 736px;
  height: 287px;
  left: calc(50% - 736px / 2 + 16px);
  top: 294px;

  //border: 1px solid red;
`;

export const InfoContainer = styled.div`
  font-size: 19px;
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .createdTasks {
    color: ${(props) => props.theme.blue};
  }

  .createdTasksCounter {
    color: ${(props) => props.theme["gray-200"]};
    background: ${(props) => props.theme["gray-400"]};
    padding: 2px 12px;
    width: 2.3rem;
    height: 1.69rem;
    border-radius: 62.43rem;
    display: flex;
    justify-content: center;

    //border: 1px solid red;
  }

  .completedTasks {
    color: ${(props) => props.theme.purple};
  }

  .completedTasksCounter {
    color: ${(props) => props.theme["gray-200"]};
    background: ${(props) => props.theme["gray-400"]};
    padding: 2px 12px;
    width: 2.3rem;
    height: 1.69rem;
    border-radius: 62.43rem;
    display: flex;
    justify-content: center;
  }

  //border: 1px solid red;
`;

export const EmptyContainer = styled.div`
  width: 100%;
  height: 15.25rem;

  margin-top: 2.6rem;

  border-top: 1px solid ${(props) => props.theme["gray-400"]};
  border-radius: 8px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  position: absolute;

  p {
    color: ${(props) => props.theme["gray-300"]};
    font-weight: bold;
    margin-top: 10px;
  }

  span {
    color: ${(props) => props.theme["gray-300"]};
  }
`;
