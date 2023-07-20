import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

// typescript momentos
// type formVal = {
//     task: String,
//     desc: String
// }
// const { todoEdit, control, handleSubmit } = useForm<formVal>();
// const onSubmit = (addTodo: formVal) => {

export default function rctfrm() {
  const form = useForm({
    defaultValues: async () => {
      const res = axios.get("http://localhost:5000/todos/" + todoId);
      const data = res.data.data;
      return {
        task: res.todo,
        desc: res.desc,
      };
    },
  });
  const { todoEdit, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (addTodo) => {
    try {
      const res = await axios.put("http://localhost:5000/todos/" + todoId, {
        todo: addTodo.task,
        description: addTodo.desc,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/*  noValidate ada untuk menghindari validasi dari browser */}
        <input
          className="mb-3 w-full rounded-xl border-[1.6px] border-outlineGray bg-transparent px-5 py-5 text-lg font-medium text-allGray placeholder-allGray outline-none"
          type="text"
          placeholder="Add New Task"
          {...todoEdit("task", {
            required: { value: true, message: "task is required" },
          })}
        />
        <p>{errors.task?.message}</p>
        <input
          className="w-full rounded-xl border-[1.6px] border-outlineGray bg-transparent px-5 py-5 pb-28 text-lg font-medium text-allGray placeholder-allGray outline-none"
          type="text"
          placeholder="Description"
          {...todoEdit("desc", {
            required: { value: true, message: "description is required" },
          })}
        />
        <p>{errors.desc?.message}</p>
      </form>
      <DevTool control={control} />
      {/* 
      touched = mengindikasi apakah field sudah diinteraksi
      dirty = mengindikasi apakah value field berubah
      */}
    </>
  );
}
