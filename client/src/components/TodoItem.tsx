// src/components/TodoItem.tsx

import { FC } from "react";

import { deleteTodo, Todo } from "../stores/todo";

type Props = {
  todo: Todo;
};

const TodoItem: FC<Props> = ({ todo }) => {
  const removeItem = () => {
    deleteTodo(todo.id); // todo 제거
    // remove
  };

  return (
    <div>
      <input type="checkbox" />
      <span>{todo.content}</span>
      <span onClick={removeItem}> ❌</span>
    </div>
  );
};

export default TodoItem;
