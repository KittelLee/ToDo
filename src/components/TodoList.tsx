import { useState, useEffect, useRef, useCallback } from "react";
import SubList from "../components/SubList";
import TodoAdd from "../components/TodoAdd";
import "../styles/TodoList.css";

interface Todo {
  text: string;
  isChecked: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const isInitialMount = useRef(true);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      try {
        const parsedTodos = JSON.parse(storedTodos);
        if (Array.isArray(parsedTodos)) {
          setTodos(parsedTodos);
          console.log("로컬 스토리지에서 로드된 작업관리:", parsedTodos);
        } else {
          console.warn("로컬스토리지의 데이터 형식이 잘못되었습니다.");
        }
      } catch (error) {
        console.error("로컬스토리지의 작업을 분석하지 못했습니다.", error);
        alert("할 일 목록을 로드하는 데 실패했습니다.");
      }
    } else {
      console.log("로컬 스토리지에서 할 일을 찾을 수 없습니다.");
    }
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      try {
        const todosString = JSON.stringify(todos);
        localStorage.setItem("todos", todosString);
        console.log("할 일 목록을 로컬 스토리지에 저장했습니다:", todosString);
      } catch (error) {
        console.error("로컬 스토리지 저장 실패:", error);
        alert("할 일 목록을 저장하는 데 실패했습니다.");
      }
    }
  }, [todos]);

  const handleAddTodo = useCallback((todoText: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { text: todoText, isChecked: false },
    ]);
  }, []);

  const handleCheckboxChange = useCallback((index: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  }, []);

  const handleEdit = useCallback((index: number, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, text: newText } : todo
      )
    );
  }, []);

  const handleDelete = useCallback((index: number) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((_, i) => i !== index);
      return updatedTodos;
    });
  }, []);

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
            onEdit={(newText) => handleEdit(index, newText)}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
