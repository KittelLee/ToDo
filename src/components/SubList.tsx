import { useState, useEffect } from "react";
import trash from "../assets/icons/trash.svg";
import modify from "../assets/icons/modify.svg";
import "../styles/SubList.css";

interface SubListProps {
  text: string;
  isChecked: boolean;
  onCheckboxChange: () => void;
  onEdit: (newText: string) => void;
  onDelete: () => void;
}

function SubList({
  text,
  isChecked,
  onCheckboxChange,
  onEdit,
  onDelete,
}: SubListProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(text);

  useEffect(() => {
    if (isEditing) {
      setInputValue(text);
    }
  }, [isEditing, text]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      onEdit(inputValue);
      setIsEditing(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleModifyClick = () => {
    if (!isChecked) {
      setIsEditing(true);
    } else {
      alert("체크된 항목은 수정이 어렵습니다.");
    }
  };

  return (
    <div className="sub-list">
      <input
        type="checkbox"
        id={`cbx-${text}`}
        checked={isChecked}
        onChange={onCheckboxChange}
        className="hidden-checkbox"
      />
      <label htmlFor={`cbx-${text}`} className="check">
        <svg viewBox="0 0 18 18">
          <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z" />
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </label>
      {isEditing ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyUp={handleKeyPress}
          placeholder="수정하시고 Enter를 눌러주세요."
          autoFocus
        />
      ) : (
        <>
          {isChecked ? <del>{text}</del> : <p>{text}</p>}
          <img
            id="modify-icon"
            src={modify}
            alt="수정아이콘"
            onClick={handleModifyClick}
          />
          <img
            id="delete-icon"
            src={trash}
            alt="삭제아이콘"
            onClick={onDelete}
          />
        </>
      )}
    </div>
  );
}

export default SubList;
