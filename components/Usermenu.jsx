import React, { useContext } from "react";
import Link from "next/link";
import { Context } from "../Context/menuContext";

const Usermenu = () => {
  const {userMenuIsOpen, handleSwitchMenuOpen, handleMenuClose} = useContext(Context);

  return (
    <div>
      <img
        onClick={handleSwitchMenuOpen}
        className=" h-[2.5rem] cursor-pointer rounded-[50%] bg-white duration-300  ease-in hover:scale-125 "
        src="/Images/user.png"
        alt=""
      />

      {userMenuIsOpen && (
        <div
          id="user-menu"
          className={`absolute   right-1 top-[5.5rem]  z-20  h-[10rem] w-[12rem] bg-white p-4 text-green-600 opacity-80 ${
            userMenuIsOpen ? "" : "translate-x-[200px]"
          }`}
        >
          <Link href="">
            <p className="mt-3 w-[7rem] cursor-pointer border-green-600 hover:border-b-[2px]">
              Mis Pedidos
            </p>
          </Link>
          <Link href="">
            <p className="mt-3 w-[7rem] cursor-pointer border-green-600 hover:border-b-[2px]">
              Mis Preguntas
            </p>
          </Link>

          <p className="mt-3 w-[7rem] cursor-pointer border-green-600 hover:border-b-[2px]">
            Cerrar session
          </p>
        </div>
      )}
    </div>
  );
};

export default Usermenu;
