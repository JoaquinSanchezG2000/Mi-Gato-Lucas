import React from "react";
import Item from "./Item";

const Catalogo = () => {
  return (
    <div className="border-[2px] border-black w-full flex flex-col lg:flex-row lg:p-10 ">
      <div className="w-full h-[20%] lg:h-full lg:w-[30%] border-[3px] border-black p-3 bg-white">
        <h3 className="text-green-600 text-2xl">Categorias</h3>
      </div>
      <div className="w-full h-full  grid grid-cols-2 gap-4 sm:grid-cols-3 p-10 items-center justify-center ">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />

        <Item />
      </div>
    </div>
  );
};
export default Catalogo;
