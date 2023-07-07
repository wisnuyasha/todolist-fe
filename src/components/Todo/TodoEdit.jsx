import React, { useState, useEffect } from "react";
import axios from "axios";
import CancelIcon from "../../assets/Todo/CancelIcon";

export default function TodoEdit({ handleClose, todoId, handleRender }) {
  const [updatedTodo, setUpdatedTodo] = useState("");
  const [updatedDesc, setUpdatedDesc] = useState("");

  useEffect(() => {
    const getTodo = async () => {
      try {
        const res = await axios.get("http://localhost:5000/todos/" + todoId);
        const response = res.data.data;
        setUpdatedTodo(response.todo);
        setUpdatedDesc(response.description);
      } catch (err) {
        console.log(err);
      }
    };
    getTodo();
  }, []);

  const handleTodoChange = (e) => {
    setUpdatedTodo(e.target.value);
  };

  const handleDescChange = (e) => {
    setUpdatedDesc(e.target.value);
  };

  const handleDeleteTask = async () => {
    try {
      const res = await axios.delete("http://localhost:5000/todos/" + todoId);
      handleRender();
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSaveTask = async () => {
    try {
      const res = await axios.put("http://localhost:5000/todos/" + todoId, {
        todo: updatedTodo,
        description: updatedDesc,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 z-20 h-full w-full bg-bgBar px-4 py-6">
      <div className="mb-5 flex h-fit w-full items-center justify-between">
        <span className="font-roboto text-2xl font-bold text-textGray">
          Task:
        </span>
        <div className=" cursor-pointer" onClick={handleClose}>
          <CancelIcon />
        </div>
      </div>
      <input
        className="mb-3 w-full rounded-xl border-[1.6px] border-outlineGray bg-transparent px-5 py-5 text-lg font-medium text-allGray placeholder-allGray outline-none"
        value={updatedTodo}
        onChange={handleTodoChange}
      />
      <input
        className="w-full rounded-xl border-[1.6px] border-outlineGray bg-transparent px-5 py-5 pb-28 text-lg font-medium text-allGray placeholder-allGray outline-none"
        value={updatedDesc}
        onChange={handleDescChange}
      />
      <div className="mt-8 flex h-fit w-full justify-center gap-x-5">
        <button
          onClick={handleDeleteTask}
          className="h-16 w-full items-center rounded-lg border-[1.6px] border-outlineGray"
        >
          <span className="text-roboto text-lg font-bold text-textGray">
            Delete task
          </span>
        </button>
        <button
          onClick={() => {
            handleSaveTask();
            handleRender();
            handleClose();
          }}
          className="w-full rounded-lg bg-iyellow"
        >
          <span className="text-roboto text-lg font-bold text-titleBlack">
            Save changes
          </span>
        </button>
      </div>
    </div>
  );
}
