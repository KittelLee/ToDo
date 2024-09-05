import { useState, useEffect } from "react";
import SubList from "../components/SubList";
import TodoAdd from "../components/TodoAdd";
import "../styles/TodoList.css";

interface Todo {
  text: string;
  isChecked: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      try {
        const parsedTodos = JSON.parse(storedTodos);
        if (Array.isArray(parsedTodos)) {
          setTodos(parsedTodos);
          console.log("Loaded todos from localStorage:", parsedTodos);
        } else {
          console.warn("Invalid data format in localStorage");
        }
      } catch (error) {
        console.error("Failed to parse todos from localStorage", error);
      }
    } else {
      console.log("No todos found in localStorage");
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      try {
        const todosString = JSON.stringify(todos);
        localStorage.setItem("todos", todosString);
        console.log("할 일 목록을 로컬 스토리지에 저장했습니다:", todosString);
      } catch (error) {
        console.error("로컬 스토리지 저장 실패:", error);
      }
    }
  }, [todos]);

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
