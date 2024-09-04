import "../styles/TodoList.css";
import SubList from "../components/SubList";

function TodoList() {
  return (
    <div className="list-wrap">
      <SubList />
      <SubList />
      <SubList />
      <SubList />
      <SubList />
      <SubList />
    </div>
  );
}

export default TodoList;
