import React from "react";
import Header from "../components/Layouts/Header";
import TodoMain from "../components/Todo/TodoMain";

export default function MainPage() {
  return (
    <div className="relative w-full min-h-screen bg-bgMain ">
      <div className="flex w-full min-h-screen flex-col gap-6 px-5 pt-6 lg:px-12">
        <Header />
        <TodoMain />
      </div>
    </div>
  );
}
