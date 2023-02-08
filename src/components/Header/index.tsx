import { HeaderContainer } from "./styles";

import logoTodo from "../../assets/logo-todo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoTodo} alt="" />
    </HeaderContainer>
  );
}
