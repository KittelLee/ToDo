import { useState } from "react";
import trash from "../assets/icons/trash.svg";
import modify from "../assets/icons/modify.svg";
import "../styles/SubList.css";

interface SubListProps {
  text: string;
}

function SubList({ text }: SubListProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="sub-list">
      <input
        type="checkbox"
        id="cbx"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="cbx" className="check">
        <svg viewBox="0 0 18 18">
          <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z" />
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </label>
      {isChecked ? <del>{text}</del> : <p>{text}</p>}
      <img src={modify} alt="수정아이콘" />
      <img src={trash} alt="삭제아이콘" />
    </div>
  );
}

export default SubList;
