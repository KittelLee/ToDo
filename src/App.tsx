import Clock from "./components/Clock";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="todo-wrap">
      <Clock />
      <TodoAdd />
      <TodoList />
    </div>
  );
}

export default App;
