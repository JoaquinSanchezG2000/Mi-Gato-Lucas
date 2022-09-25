import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-[5rem] bg-green-600 text-white w-full  border-green-500 p-5 flex items-center justify-around ">
      <img className=" mr-4  h-[5rem] lg:h-[6rem] " src="/Images/icon.png" alt="" />
      <div className=" h-full  w-[33%] hidden lg:block  ">
        <h2 className="text-2xl pb-10">Quienes Somos ? </h2>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatum nam nihil aperiam
          eum harum iure. Fugiat illum dignissimos labore! Ma gnam asperiores odit ducimus ad sunt
          exercitationem quae officia! Dolore.
        </p>
      </div>
      <div className=" h-full  ">
        <ul className="text-gray h-full py-7 ">
          <Link href="/">
            <li className="duration-300 hover:scale-125 p-1  my-1 text-white hover:text-black text-[14px]  cursor-pointer">
              Inicio
            </li>
          </Link>
          <Link href="/Tienda">
            <li className="duration-300 hover:scale-125 p-1  my-1 text-white hover:text-black text-[14px]  cursor-pointer">
              Catalogo
            </li>
          </Link>
          <Link href="/PreguntasFrecuentes">
            <li className="duration-300 hover:scale-125 p-1  my-1 text-white hover:text-black text-[14px]  cursor-pointer">
              Preguntas Frecuentes
            </li>
          </Link>
          <Link href="/Contacto">
            <li className=" duration-300 hover:scale-125 p-1  my-1 text-white hover:text-black text-[14px]  cursor-pointer ">
              Contacto
            </li>
          </Link>
        </ul>
      </div>

      <div>
        <h2 className="text-center text-2xl mb-8">Contactanos!</h2>

        <div className="flex items-center justify-center ease-in  ">
          <a href="https://www.instagram.com/migatolucas50/" target="_blank">
            <img
              className=" cursor-pointer h-[4rem] mx-5  duration-300 hover:scale-125"
              src="Images/instagram.png"
              alt=""
            />
          </a>
          <a href="https://walink.co/d950bd" target="_blank">
            <img
              className=" cursor-pointer h-[4rem] mx-5 duration-300 hover:scale-125 "
              src="Images/whatsapp.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
