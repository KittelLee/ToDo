import "../styles/TodoAdd.css";

function TodoAdd() {
  return (
    <div className="register-wrap">
      <div className="register-inner">
        <input type="text" placeholder="할일을 입력하세요" />
        <button>등록하기</button>
      </div>
    </div>
  );
}

export default TodoAdd;
