import React from "react";

const Contact = () => {
  return (
    <div className=" w-full  flex justify-center bg-image bg-cover bg-no-repeat  lg:p-10     ">
      <div className="w-full lg:w-[80%] flex flex-col lg:flex-row p-5 lg:p-10 ">
        <div className="w-full flex flex-col items-center  ">
          <h2 className="text-2xl text-white mb-5 ">Dejanos tu Mensaje!!</h2>
          <input
            className="mt-5 w-[80%] p-1 outline  outline-green-600 "
            type="text "
            name="Nombre"
            placeholder="Nombre*"
          />
          <br />
          <input
            className="mt-5 w-[80%] p-1 outline outline-green-600"
            type="text"
            name="Email"
            placeholder="Email*"
          />
          <br />
          <textarea
            className="w-[80%] mt-5 p-1 outline outline-green-600 "
            placeholder="Tu mensaje"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <button className=" ease-in duration-300 bg-white text-green-600 hover:text-white bg-green-600  mt-4 p-2  w-[80%] hover:bg-green-700 ">
            Enviar
          </button>
        </div>
        <div className="flex flex-col w-full p-10 text-center  items-center text-white  justify-center  ">
          <h1 className="text-2xl ">Contactanos</h1>
          <p className="mt-10 ">No dudes en contactarnos por cualquier consulta </p>
          <div className="flex justify-around w-full mt-10">
            <a href="https://www.instagram.com/migatolucas50/" target="_blank">
              <img
                className="ease-in duration-300 hover:scale-125  h-[4rem] mb-10 cursor-pointer "
                src="/Images/instagram.png"
                alt=""
              />
            </a>

            <a href="https://walink.co/d950bd" target="_blank">
              <img
                className="ease-in duration-300 hover:scale-125 h-[4rem] mb-10 cursor-pointer "
                src="/Images/whatsapp.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex">
            <img className="w-[2rem] mr-2 " src="/Images/email.png" alt="" />
            <p className="mt-1">email@hotmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
