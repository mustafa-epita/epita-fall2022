import React, { useRef } from "react";
import { FaTrashAlt } from "react-icons/fa";

import { useGetTodosQuery, usePostTodoMutation, useRemoveTodoMutation } from "../services/todos-rtk";

const TodosRTK = () => {
  const { data, error, isLoading } = useGetTodosQuery();
  const [postTodo] = usePostTodoMutation();
  const [removeTodo] = useRemoveTodoMutation();
  const labelRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (labelRef.current.value == "") {
      return alert("Provide a label");
    }

    postTodo({
      label: labelRef.current.value,
    });

    labelRef.current.value = "";
  };

  const handleRemove = (id) => {
    removeTodo(id)
  }

  return (
    <>
      {isLoading ? <>Loading...</> : (
        <>
          <form
            style={{ marginTop: "40px", marginBottom: "40px" }}
            onSubmit={onSubmitHandler}
          >
            <input type="text" ref={labelRef} placeholder="Enter a label" />
            <input type="submit" value="Save" />
          </form>
          {data.map((todo) => (
            <div style={{ display: "flex", gap: "15px"}}>
              <button style={{ border: "none", background: "none", cursor: "pointer"}} onClick={() => handleRemove(todo._id)}><FaTrashAlt /></button>
              <div key={todo._id}>{todo.label}</div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default TodosRTK;
