import React, { useEffect, useState } from "react";
import axios from "axios";
import HamburgetMenu from "../../assets/Layouts/Header/HamburgetMenu";

export default function Header() {
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
    <nav className="mb-4 flex items-center">
      <HamburgetMenu />
      <h1 className=" ml-6 lg:ml-24 font-roboto text-[1.6rem] lg:text-4xl xl:text-5xl font-bold text-titleBlack">
        To-do
      </h1>
      <div className="ml-4 lg:ml-6 xl:ml-9 rounded-xl border-[1px] border-outlineGray px-3 py-1">
        <span className=" text text-xl lg:text-3xl xl:text-4xl font-medium">{totalTodo}</span>
      </div>
    </nav>
  );
}
