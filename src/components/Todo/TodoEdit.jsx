import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import CancelIcon from "../../assets/Todo/CancelIcon";

export default function TodoEdit({ handleClose, todoId, handleRender }) {
  const form = useForm({
    defaultValues: async () => {
      const res = await axios.get("http://localhost:5000/todos/" + todoId);
      const data = res.data.data;
      return {
        task: data.todo,
        desc: data.description,
      };
    },
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const handleDeleteTask = async () => {
    try {
      await axios.delete("http://localhost:5000/todos/" + todoId);
      handleRender();
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async (addTodo) => {
    try {
      await axios.put("http://localhost:5000/todos/" + todoId, {
        todo: addTodo.task,
        description: addTodo.desc,
      });
      handleRender();
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* mobile responsive */}
      <div className="absolute inset-0 z-20 block h-full w-full rounded-xl bg-bgBar px-4 py-6 lg:hidden">
        <div className="mb-5 flex h-fit w-full items-center justify-between">
          <span className="font-roboto text-2xl font-bold text-textGray">
            Task:
          </span>
          <div className=" cursor-pointer" onClick={handleClose}>
            <CancelIcon />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <input
            className="mb-3 w-full rounded-xl border-[1.6px] border-outlineGray bg-transparent px-5 py-5 text-lg font-medium text-allGray placeholder-allGray outline-none"
            type="text"
            {...register("task", {
              required: { value: true, message: "task is required" },
            })}
          />
          <input
            className="w-full rounded-xl border-[1.6px] border-outlineGray bg-transparent px-5 py-5 pb-28 text-lg font-medium text-allGray placeholder-allGray outline-none"
            type="text"
            {...register("desc", {
              required: { value: true, message: "description is required" },
            })}
          />
          <div className="mt-8 flex h-fit w-full justify-center gap-x-5">
            <button
              type="button"
              onClick={handleDeleteTask}
              className="h-16 w-full items-center rounded-lg border-[1.6px] border-outlineGray"
            >
              <span className="text-roboto text-lg font-bold text-textGray">
                Delete task
              </span>
            </button>
            <button type="submit" className="w-full rounded-lg bg-iyellow">
              <span className="text-roboto text-lg font-bold text-titleBlack">
                Save changes
              </span>
            </button>
          </div>
        </form>
      </div>
      {/* desktop responsive */}
      <div className="absolute z-20 hidden rounded-xl bg-bgBar px-4 py-6 lg:right-5 lg:top-5 lg:block lg:h-[95%] lg:w-4/12">
        <div className="mb-5 flex h-fit w-full items-center justify-between">
          <span className="font-roboto text-2xl font-bold text-textGray">
            Task:
          </span>
          <div className=" cursor-pointer" onClick={handleClose}>
            <CancelIcon />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <input
            className="mb-3 w-full rounded-xl border-[1.6px] border-outlineGray bg-transparent px-5 py-5 text-lg font-medium text-allGray placeholder-allGray outline-none"
            type="text"
            {...register("task", {
              required: { value: true, message: "task is required" },
            })}
          />
          <input
            className="w-full rounded-xl border-[1.6px] border-outlineGray bg-transparent px-5 py-5 pb-28 text-lg font-medium text-allGray placeholder-allGray outline-none"
            {...register("desc", {
              required: { value: true, message: "description is required" },
            })}
          />
          <div className="mt-8 flex h-fit w-full justify-center gap-x-5">
            <button
              type="button"
              onClick={handleDeleteTask}
              className="h-16 w-full items-center rounded-lg border-[1.6px] border-outlineGray"
            >
              <span className="text-roboto text-lg font-bold text-textGray">
                Delete task
              </span>
            </button>
            <button type="submit" className="w-full rounded-lg bg-iyellow">
              <span className="text-roboto text-lg font-bold text-titleBlack">
                Save changes
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
