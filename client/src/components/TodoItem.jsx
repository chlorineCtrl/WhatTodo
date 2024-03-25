import React, { useCallback } from "react";
import { useQueryClient, useMutation, QueryClient } from "react-query";
import updateTodoRequest from "../api/updateTodoRequest";
import deleteTodoRequest from "../api/deleteTodoRequest";
import { debounce } from "lodash";

export const TodoItem = ({ todo }) => {
  const queryClient = useQueryClient();

  const { mutate: updateTodo } = useMutation(
    (updateTodo) => updateTodoRequest(updateTodo),

    {
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ["todos"] });
      },
    }
  );
  const debouncedUpdateTodo = useCallback(debounce(updateTodo, 600), [
    updateTodo,
  ]);
  const { mutate: deleteTodo } = useMutation(
    (updateTodo) => deleteTodoRequest(updateTodo),

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
          onChange={() =>
            updateTodo({
              ...todo,
              completed: !todo.completed,
            })
          }
        />

        <input
          type="text"
          value={todo.text}
          onChange={(e) =>
            debouncedUpdateTodo({
              ...todo,
              text: e.target.value,
            })
          }
        />
        <button onClick={() => deleteTodo(todo)}>delet</button>
      </div>
    </div>
  );
};
