import { useEffect } from "react";
import "./App.css";
import readTodosRequest from "./api/readTodosRequest";

function App() {
  useEffect(() => {
    readTodosRequest().then((allTodos) => {
      console.log(allTodos);
    });
  }, []);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default App;
