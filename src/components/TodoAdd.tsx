import { useState } from "react";
import "../styles/TodoAdd.css";

interface TodoAddProps {
  onAddTodo: (todo: string) => void;
}

function TodoAdd({ onAddTodo }: TodoAddProps) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onAddTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="register-wrap">
      <div className="register-inner">
        <input
          type="text"
          placeholder="할일을 입력하세요"
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>등록하기</button>
      </div>
    </div>
  );
}

export default TodoAdd;
