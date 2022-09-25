import React from "react";
import Link from "next/link";

const Item = () => {
  return (
    <Link href="">
      <div className="ease-in duration-300 cursor-pointer       bg-green-200 text-gray-500 border-[2px] border-green-500 hover:scale-125 ">
        <img className="w-full h-[45%]  border " src="/Images/cart.png" alt="" />
        <div className="w-full p-4">
          <p className="text-[20px] text-center p-1  ">Item Name</p>
        </div>
      </div>
    </Link>
  );
};
export default Item;
