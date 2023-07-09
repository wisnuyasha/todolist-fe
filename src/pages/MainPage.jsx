import React, { useState } from "react";
import Header from "../components/Layouts/Header";
import TodoMain from "../components/Todo/TodoMain";
import SidebarMenu from "../components/Layouts/SidebarMenu";

export default function MainPage() {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <div className="relative min-h-screen w-full bg-bgMain ">
      <div className="flex min-h-screen w-full flex-col gap-6 px-5 pt-6 lg:px-12">
        {/* {showMenu ? <SidebarMenu handleClose={handleShowMenu} /> : null} */}
        <Header handleShow={handleShowMenu} showState={showMenu} />
        <TodoMain showMenu={showMenu} />
      </div>
    </div>
  );
}
