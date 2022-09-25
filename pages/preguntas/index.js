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
      <div className="flex flex-col items-center justify-center border-red-500">
        <h3 className="py-4 text-2xl">preguntas</h3>
        <div className="w-10/12">
          {preguntas.map((pregunta, index) => (
            <div key={index} className="border-2 border-red-500">
              <div
                className="z-20 flex cursor-pointer items-center justify-between border-2 hover:bg-red-100"
                onClick={() => {
                  handleDropdown(index);
                }}
              >
                <h3 className=" py-2">{pregunta.pregunta}</h3>
                <span className="text-4xl">+</span>
              </div>
              <p
                className={`z-[-10] transition-all duration-300  ${
                  dropdown.index == index ? "my-4" : "h-0 opacity-0"
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
