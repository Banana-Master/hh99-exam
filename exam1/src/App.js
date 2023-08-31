import { useState } from "react";
import "./App.css";

function App() {
  const [inputTodo, setInputTodo] = useState("");

  const inputChange = (event) => {
    setInputTodo(event.target.value);
  };

  const [todoList, setTodoList] = useState([
    { id: 1, todo: "React를 배워봅시다." },
    { id: 2, todo: "useState를 배워봅시다." },
  ]);

  const insertTodo = () => {
    const newTodo = {
      id: todoList.length + 1,
      todo: inputTodo,
    };
    setTodoList([...todoList, newTodo]);
    setInputTodo("");
  };
  return (
    <>
      <div className="input-box"> 
        <input
          type="text"
          onChange={(event) => inputChange(event)}
          value={inputTodo}
        />
        <button onClick={() => insertTodo()}>추가하기</button>
      </div>
      <h1>Todo List</h1>
      <div className="todos-div">
        {todoList.map((x) => (
          <Todo key={x.id} item={x} />
        ))}
      </div>
    </>
  );
}

export default App;

const Todo = ({ item }) => {
  return (<div key={item.id} className="todo-div">
    <p>{item.todo}</p>
    
  </div>);
};
