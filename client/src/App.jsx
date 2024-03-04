import { useEffect, useState } from "react";
import "./App.css";
import readTodosRequest from "./api/readTodosRequest";
import { useQuery } from "react-query";
import ClipLoader from "react-spinners/ClipLoader";
import { TodoItem } from "./components/TodoItem";

function App() {
  const { isLoading, data: todos } = useQuery("todos", readTodosRequest);

  return (
    <div>
      {isLoading ? (
        <ClipLoader size={50} />
      ) : (
        todos.map((todo) => <TodoItem todo={todo} key={todo._id} />)
      )}
    </div>
  );
}

export default App;
