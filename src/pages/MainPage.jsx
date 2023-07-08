import React from "react";
import Header from "../components/Layouts/Header";
import TodoMain from "../components/Todo/TodoMain";

export default function MainPage() {
  return (
    <div className="relative min-h-screen w-full bg-bgMain ">
      <div className="flex min-h-screen w-full flex-col gap-6 px-5 pt-6 lg:px-12">
        <Header />
        <TodoMain />
      </div>
    </div>
  );
}
