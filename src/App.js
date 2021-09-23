import { TodoProvider } from "./TodoContext";
import Todo from "./Todo";

function App() {
  return (
    <TodoProvider>
      <Todo />
    </TodoProvider>
  );
}

export default App;
