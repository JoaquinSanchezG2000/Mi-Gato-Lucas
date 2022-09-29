import React, { useState } from "react";
import Layout from "../../components/Wrappers/Layout";

const preguntas = [
  {
    pregunta: "loremadssadsadsadsa?",
    respuesta:
      "loremdsaemdsadsadsadsadsadasdasdsadsadsaadsadsa dsa dsa sa sa dad semdsadsadsadsadsadasdasdsadsadsaadsadsa dsa dsa sa sa dad semdsadsadsadsadsadasdasdsadsadsaadsadsa dsa dsa sa sa dad semdsadsadsadsadsadasdasdsadsadsaadsadsa dsa dsa sa sa dad sdsadsadsadsadasdasdsadsadsaadsadsa dsa dsa sa sa dad s",
  },
  {
    pregunta: "loremadssadsadsadsa?",
    respuesta:
      "loremdsadsemdsadsadsadsadsadasdasdsadsadsaadsadsa dsa dsa sa sa dad semdsadsadsadsadsadasdasdsadsadsaadsadsa dsa dsa sa sa dad semdsadsadsadsadsadasdasdsadsadsaadsadsa dsa dsa sa sa dad semdsadsadsadsadsadasdasdsadsadsaadsadsa dsa dsa sa sa dad sadsadsadsadasdasdsadsadsaadsadsa dsa dsa sa sa dad s",
  },
  {
    pregunta: "loremadssadsadsadsa?",
    respuesta:
      "loremdsaemdsadsadsadsadsadasdasdsadsadsaadsadsa dsa dsa sa sa dad semdsadsadsadsadsadasdasdsadsadsaadsadsa dsa dsa sa sa dad semdsadsadsadsadsadasdasdsadsadsaadsadsa dsa dsa sa sa dad sdsadsadsadsadasdasdsadsadsaadsadsa dsa dsa sa sa dad s",
  },
  {
    pregunta: "loremadssadsadsadsa?",
    respuesta:
      "loremdsemdsadsadsadsadsadasdasdsadsadsaadsadsa dsa dsa sa sa dad semdsadsadsadsadsadasdasdsadsadsaadsadsa dsa dsa sa sa dad semdsadsadsadsadsadasdasdsadsadsaadsadsa dsa dsa sa sa dad sadsadsadsadsadasdasdsadsadsaadsadsa dsa dsa sa sa dad s",
  },
];
const index = () => {
  const [dropdown, setDropdown] = useState({ index: null });

  const handleDropdown = index => {
    if (dropdown.index === index) {
      setDropdown({ index: null });
    } else {
      setDropdown({ index: index });
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center z-10  ">
        <div className="flex items-center justify-start bg-image-preguntas h-[20rem] w-full bg-cover bg-center bg-no-repeat text-center text-[40px] text-green-600">
          <h3 className=" ml-10 text-white ">Preguntas Frecuentes</h3>
        </div>
        <div className="w-full  text-center  ">
          {preguntas.map((pregunta, index) => (
            <div
              key={index}
              className="my-4 flex h-full flex-col  items-center border-y-2 border-green-600 text-green-600"
            >
              <div
                className=" h-full w-full cursor-pointer  p-4 delay-300 ease-in-out hover:bg-green-600 hover:text-white "
                onClick={() => {
                  handleDropdown(index);
                }}
              >
                <h3 className="w-full text-2xl transition   ">{pregunta.pregunta}</h3>
              </div>
              <p
                className={` text-black w-[80%] transition-all duration-300 p-5 ${
                  dropdown.index == index ? "" : "h-0 translate-x-[100rem]  "
                }`}
              >
                {pregunta.respuesta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default index;
