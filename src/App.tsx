import { Header } from "./components/Header";
import { Home } from "./components/Home";

import "./global.css";

const tasks = [
  {
    id: 1,
    description: "Molhar as plantas",
    done: true
  },
  {
    id: 2,
    description: "Ir ao mercado",
    done: false
  },
  {
    id: 1,
    description: "Fazer exercício",
    done: false
  }
]

export function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>

  );
}
