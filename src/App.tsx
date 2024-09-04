import Clock from "./components/Clock";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="todo-wrap">
      <Clock />
      <TodoList />
    </div>
  );
}

export default App;
