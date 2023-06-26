import React from "react";
import HamburgetMenu from "../../assets/Layouts/HamburgetMenu";

export default function Header() {
  return (
    <div className="flex items-center">
      <HamburgetMenu />
      <h1 className=" ml-7 font-roboto text-3xl font-bold">To-do</h1>
      <div className="ml-4 rounded-xl border-[1px] border-outlineGray px-3 py-1">
        {/* <span className=" text-xl font-medium">5</span> */}
      </div>
    </div>
  );
}
