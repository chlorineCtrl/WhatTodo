import { useEffect, useState } from "react";
import "./App.css";
import readTodosRequest from "./api/readTodosRequest";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    readTodosRequest().then(setTodos);
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          {todo.text}
          {`${todo.completed}`}
        </div>
      ))}
    </div>
  );
}

export default App;
