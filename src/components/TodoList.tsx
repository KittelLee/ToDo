import { useState } from "react";
import SubList from "../components/SubList";
import TodoAdd from "../components/TodoAdd";
import "../styles/TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = (todoText: string) => {
    setTodos((prevTodos) => [...prevTodos, todoText]);
  };

  return (
    <div className="list-wrap">
      <TodoAdd onAddTodo={handleAddTodo} />
      <div className="subList-container">
        {todos.map((todo, index) => (
          <SubList key={index} text={todo} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
