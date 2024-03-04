import React from "react";

export const TodoItem = ({ todo }) => {
  return (
    <div>
      <div>
        {todo.text}
        {`${todo.completed}`}
      </div>
    </div>
  );
};
