import React from "react";
import Link from "next/link";

const Item = ({ itemName , itemImage ,itemId }) => {
  

  
  
  return (
    <Link href={`/tienda/item/${itemId}`}>
      <div className="cursor-pointer border-[2px] border-green-500       bg-green-200 text-gray-500 duration-300 ease-in hover:scale-125 ">
        <img className="h-[45%] w-full  border " src={itemImage} alt="" />
        <div className="w-full p-4">
          <p className="p-1 text-center text-[20px]  ">{itemName} </p>
        </div>
      </div>
    </Link>
  );
};
export default Item;
