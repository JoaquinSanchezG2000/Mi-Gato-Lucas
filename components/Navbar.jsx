import React, { useContext, useState } from "react";
import Link from "next/link";
import Cart from "./Cart";
import Usermenu from "./Usermenu";
import { useRouter } from "next/router";
import { Context } from "../Context/menuContext";

const Navbar = () => {
  const router = useRouter();
  const { handleSwitchMenuOpen, movilMenuIsOpen } = useContext(Context);

  return (
    <div className="flex h-[7rem] w-full items-center justify-around bg-green-600 text-white ">
      <div className="flex h-full items-center ">
        <img className="mr-3 h-[5rem] " src="/Images/icon.png" />
        <p className="font text-2xl ">Mi gato lucas</p>
      </div>
      <div className="h-full">
        <ul className="tewhite hidden h-full items-center text-[1.1rem] lg:flex ">
          <Link href="/">
            <li
              className={`m-5 cursor-pointer hover:border-b-[1.5px] hover:border-white hover:pb-2 ${
                router.pathname == "/" ? "border-b-[1.5px] border-white pb-2" : ""
              }`}
            >
              Inicio
            </li>
          </Link>
          <Link href="/tienda">
            <li
              className={`m-5 cursor-pointer hover:border-b-[1.5px] hover:border-white hover:pb-2 ${
                router.pathname == "/tienda" ? "border-b-[1.5px] border-white pb-2" : ""
              }`}
            >
              Catalogo
            </li>
          </Link>
          <Link href="/preguntas">
            <li
              className={`m-5 cursor-pointer hover:border-b-[1.5px] hover:border-white hover:pb-2 ${
                router.pathname == "/preguntas" ? "border-b-[1.5px] border-white pb-2" : ""
              }`}
            >
              Preguntas Frecuentes
            </li>
          </Link>

          <Link href="/contacto">
            <li
              className={`m-5 cursor-pointer hover:border-b-[1.5px] hover:border-white hover:pb-2 ${
                router.pathname == "/contacto" ? "border-b-[1.5px] border-white pb-2" : ""
              }`}
            >
              Contacto
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <div className=" hidden items-center text-white lg:flex ">
          <Cart />

          <Link href="/log-in">
            <p
              className={`mx-3 cursor-pointer hover:border-b-[1.5px] hover:border-white hover:pb-2 ${
                router.pathname == "/log-in" ? "border-b-[1.5px] border-white pb-2" : ""
              }`}
            >
              Log in / Register
            </p>
          </Link>
        </div>

        {/* MENU MOVIL------------------------------------------------------------------------ */}

        <div className="lg:hidden ">
          <div className=" ">
            <Cart />
          </div>
          <img onClick={handleSwitchMenuOpen} className="h-[4rem]" src="/Images/menu.png" alt="" />

          {movilMenuIsOpen && (
            <div id="menu-movil border border-black">
              <span className="fixed inset-x-0 inset-y-0 z-10 bg-black opacity-40  "></span>
              <div className=" fixed inset-y-0 right-0 left-[180px] z-10 bg-white opacity-90  ">
                <ul className="z-20 mt-10 text-green-600  ">
                  <Link href="/">
                    <li className="m-5  cursor-pointer hover:border-b-[1.5px] hover:border-green-600 hover:pb-2">
                      Inicio
                    </li>
                  </Link>
                  <Link href="/tienda">
                    <li className="m-5 cursor-pointer hover:border-b-[1.5px] hover:border-green-600 hover:pb-2">
                      Catalogo
                    </li>
                  </Link>
                  <Link href="/preguntas">
                    <li className="m-5 cursor-pointer hover:border-b-[1.5px] hover:border-green-600 hover:pb-2">
                      Preguntas Frecuentes
                    </li>
                  </Link>

                  <Link href="/contacto">
                    <li className="m-5 cursor-pointer hover:border-b-[1.5px] hover:border-green-600 hover:pb-2 ">
                      Contacto
                    </li>
                  </Link>
                  <Link href="/register">
                    <li className="m-5 cursor-pointer hover:border-b-[1.5px] hover:border-green-600 hover:pb-2  ">
                      Log in / Register
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
