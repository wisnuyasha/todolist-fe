import React from "react";
import HamburgetMenu from "../../assets/Layouts/Header/HamburgetMenu";

export default function SidebarMenu({ handleClose }) {
  return (
    <>
      {/* mobile responsive */}
      <div className="absolute inset-0 z-20 block h-full w-full rounded-xl bg-bgBar px-4 py-6 lg:hidden">
        <div className="mb-5 flex h-fit w-full items-center justify-between">
          <span className="font-roboto text-2xl font-bold text-textGray">
            Menu
          </span>
          <div className=" cursor-pointer" onClick={handleClose}>
            <HamburgetMenu />
          </div>
        </div>
      </div>
      {/* desktop responsive */}
      <div className="absolute z-20 hidden rounded-xl bg-bgBar px-4 py-6 lg:left-5 lg:top-5 lg:block lg:h-[95%] lg:w-[21%] xl:w-[18%]">
        <div className="mb-5 flex h-fit w-full items-center justify-between">
          <span className="font-roboto text-2xl font-bold text-textGray">
            Menu
          </span>
          <div className=" cursor-pointer" onClick={handleClose}>
            <HamburgetMenu />
          </div>
        </div>
      </div>
    </>
  );
}
