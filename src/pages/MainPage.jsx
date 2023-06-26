import React from "react";
import Header from "../components/Layouts/Header";
import TodoMain from "../components/Todo/TodoMain";

export default function MainPage() {
  return (
    <div className="flex max-h-full min-h-screen w-full flex-col gap-6 bg-bgWhite px-5 pt-6">
      <Header />
      <TodoMain />
    </div>
  );
}
