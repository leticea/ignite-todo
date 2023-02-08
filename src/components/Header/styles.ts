import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12rem;
  background: ${props => props.theme["gray-700"]};
`;