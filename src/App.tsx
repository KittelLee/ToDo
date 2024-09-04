import Clock from "./components/Clock";
import "./App.css";
import TodoAdd from "./components/TodoAdd";

function App() {
  return (
    <div className="todo-wrap">
      <Clock />
      <TodoAdd />
    </div>
  );
}

export default App;
