import React, { useState } from "react";
import CancelIcon from "../../assets/Todo/CancelIcon";

export default function TodoEdit({ handleClose, todo }) {
  const [updatedTodo, setUpdatedTodo] = useState("");
  const [updatedDesc, setUpdatedDesc] = useState("");

  const handleTodoChange = (e) => {
    setUpdatedTodo(e.target.value);
  };

  const handleDescChange = (e) => {
    setUpdatedDesc(e.target.value);
  };

  const handleDeleteTask = () => {
    // fungsi buat delete task
  }

  const handleSaveTask = async () => {
    // fungsi buat update task
    console.log(updatedTodo + updatedDesc);
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
        placeholder="Add New Task"
        value={"todo"}
        onChange={handleTodoChange}
      />
      <input
        className="w-full rounded-xl border-[1.6px] border-outlineGray bg-transparent px-5 py-5 pb-28 text-lg font-medium text-allGray placeholder-allGray outline-none"
        placeholder="Description"
        value={"desc"}
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
          onClick={handleSaveTask}
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
