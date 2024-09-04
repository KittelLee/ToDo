import "../styles/TodoList.css";
import trash from "../assets/icons/trash.svg";
import modify from "../assets/icons/modify.svg";

function TodoList() {
  return (
    <div className="list-wrap">
      <div className="sub-list">
        <input type="checkbox" />
        <p>블로그 올리기</p>
        <img src={modify} alt="수정아이콘" />
        <img src={trash} alt="삭제아이콘" />
      </div>
      <div className="sub-list">
        <input type="checkbox" />
        <p>휴대폰 바꾸기</p>
        <img src={modify} alt="수정아이콘" />
        <img src={trash} alt="삭제아이콘" />
      </div>
      <div className="sub-list">
        <input type="checkbox" />
        <p>과제하기</p>
        <img src={modify} alt="수정아이콘" />
        <img src={trash} alt="삭제아이콘" />
      </div>
      <div className="sub-list">
        <input type="checkbox" />
        <p>씻기</p>
        <img src={modify} alt="수정아이콘" />
        <img src={trash} alt="삭제아이콘" />
      </div>
      <div className="sub-list">
        <input type="checkbox" />
        <p>놀기</p>
        <img src={modify} alt="수정아이콘" />
        <img src={trash} alt="삭제아이콘" />
      </div>
      <div className="sub-list">
        <input type="checkbox" />
        <p>코딩하기</p>
        <img src={modify} alt="수정아이콘" />
        <img src={trash} alt="삭제아이콘" />
      </div>
      <div className="sub-list">
        <input type="checkbox" />
        <p>밥먹기</p>
        <img src={modify} alt="수정아이콘" />
        <img src={trash} alt="삭제아이콘" />
      </div>
    </div>
  );
}

export default TodoList;
