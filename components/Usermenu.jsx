import React from "react";
import Link from "next/link";

const Usermenu = () => {
    function hiddenUserMenu() {
        const menu = document.getElementById("user-menu")
        menu.classList.toggle("hidden")
  }

  return (
    <div onClick={hiddenUserMenu}>
      <img
        className=" ease-in duration-300 hover:scale-125 rounded-[50%] cursor-pointer  h-[2.5rem] bg-white "
        src="/Images/user.png"
        alt=""
      />

      <div
        id="user-menu"
        className="hidden z-20 fixed bg-white h-[10rem] w-[12rem] opacity-80 right-1 top-[5.5rem] text-green-600 p-4   "
      >
        <Link href="">
          <p className="mt-3 hover:border-b-[2px] w-[7rem] cursor-pointer border-green-600">
            Mis Pedidos
          </p>
        </Link>
        <Link href="">
          <p className="mt-3 hover:border-b-[2px] w-[7rem] cursor-pointer border-green-600">
            Mis Preguntas
          </p>
        </Link>

        <p className="mt-3 hover:border-b-[2px] w-[7rem] cursor-pointer border-green-600">
          Cerrar session
        </p>
      </div>
    </div>
  );
};

export default Usermenu;
export {

}
