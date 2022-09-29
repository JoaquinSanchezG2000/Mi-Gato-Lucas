import React, { useEffect, useState } from "react";
import Item from "./Item";

const Catalogo = () => {
  const [stock, setStock] = useState([]);
  const getStock = () => {
    fetch("/stock.json")
      .then(Response => Response.json())
      .then(data => {
        setStock(previousState => data);
      });
  };

  useEffect(() => {
    getStock();
  }, []);
  const number = 1;

  return (
    <div className="flex w-full flex-col border-[2px] border-black lg:flex-row lg:p-10 ">
      <div className="h-[20%] w-full border-[3px] border-black bg-white p-3 lg:h-full lg:w-[30%]">
        <h3 className="text-2xl text-green-600">Categorias</h3>
      </div>
      <div className="grid h-full  w-full grid-cols-2 items-center justify-center gap-4 p-10 sm:grid-cols-3 ">
        {stock.map((item, index) => (

          <Item key={index} itemName={item.name} itemImage={item.img} itemId={item.id} ></Item>
        )
        )}
        
      </div>
    </div>
  );
};
export default Catalogo;
