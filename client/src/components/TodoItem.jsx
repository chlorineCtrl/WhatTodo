import React from "react";
import { useQueryClient, useMutation, QueryClient } from "react-query";
import updateTodoRequest from "../api/updateTodoRequest";

export const TodoItem = ({ todo }) => {
  const queryClient = useQueryClient();

  const { mutate: toggleCompletion } = useMutation(
    () => {
      return updateTodoRequest({ ...todo, completed: !todo.completed });
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ["todos"] });
      },
    }
  );

  return (
    <div>
      <div>
        <input
          checked={todo.completed}
          type="checkbox"
          onChange={toggleCompletion}
        />
        {todo.text}
        {`${todo.completed}`}
      </div>
    </div>
  );
};
