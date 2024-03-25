import React, { useState } from "react";
import { useQueryClient } from "react-query";
import createTodoRequest from "../api/createTodoRequest";
import { useMutation } from "react-query";

export const CreateTodoForm = () => {
  const [text, setText] = useState("");
  const queryClient = useQueryClient();

  const { mutate: createTodo } = useMutation(
    (newTodo) => createTodoRequest(newTodo),

    {
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ["todos"] });
      },
    }
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!text) return;
        createTodo({
          text,
        });
        setText(""); // Clearing the input field after submitting
      }}
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button type="submit">Create</button>
    </form>
  );
};
