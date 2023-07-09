import React, { useEffect, useState } from "react";
import axios from "axios";
import HamburgetMenu from "../../assets/Layouts/Header/HamburgetMenu";

export default function Header({ handleShow, showState }) {
  const [totalTodo, setTotaltodo] = useState(0);
  useEffect(() => {
    const getTodo = async () => {
      try {
        const res = await axios.get("http://localhost:5000/todos");
        setTotaltodo(res.data.data.length);
      } catch (err) {
        console.log(err);
      }
    };
    getTodo();
  }, []);
  return (
    <nav
      className={`mb-4 flex items-center ${
        showState ? "lg:ml-28 xl:ml-44" : ""
      }`}
    >
      <div
        // onClick={handleShow}
        className={`h-fit w-fit cursor-pointer ${showState ? "lg:hidden" : ""}`}
      >
        <HamburgetMenu />
      </div>
      <h1 className=" ml-6 font-roboto text-[1.6rem] font-bold text-titleBlack lg:ml-24 lg:text-4xl xl:text-5xl">
        To-do
      </h1>
      <div className="ml-4 rounded-xl border-[1px] border-outlineGray px-3 py-1 lg:ml-6 xl:ml-9">
        <span className=" text text-xl font-medium lg:text-3xl xl:text-4xl">
          {totalTodo}
        </span>
      </div>
    </nav>
  );
}
