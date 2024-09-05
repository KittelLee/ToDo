import { useState } from "react";
import SubList from "../components/SubList";
import TodoAdd from "../components/TodoAdd";
import "../styles/TodoList.css";

interface Todo {
  text: string;
  isChecked: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todoText: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { text: todoText, isChecked: false },
    ]);
  };

  const handleCheckboxChange = (index: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  return (
    <div className="list-wrap">
      <TodoAdd onAddTodo={handleAddTodo} />
      <div className="subList-container">
        {todos.map((todo, index) => (
          <SubList
            key={index}
            text={todo.text}
            isChecked={todo.isChecked}
            onCheckboxChange={() => handleCheckboxChange(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
