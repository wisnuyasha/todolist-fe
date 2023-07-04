import React from "react";
import PlusIcon from "../../assets/Layouts/Header/PlusIcon";

export default function TodoBar({ handleShowAdd }) {
  return (
    <div
      onClick={handleShowAdd}
      className="flex cursor-pointer items-center gap-x-5 rounded-xl border-[1.6px] border-outlineGray px-5 py-5"
    >
      <PlusIcon />
      <span className=" text-[1.2rem] font-medium text-allGray">
        Add New Task
      </span>
    </div>
  );
}
