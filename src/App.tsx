import { TodoMain } from "./components/TodoMain";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <TodoMain />
    </>
  );
}

export default App;
