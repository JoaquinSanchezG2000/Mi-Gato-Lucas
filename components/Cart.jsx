import React, { useEffect, useState } from "react";

const Cart = () => {
  return (
    <div className="lg:mr-8">
      <img
        onClick={() => console.log("nisman")}
        className="ease-in duration-300 h-[2.2rem] fixed  lg:static  ml-8 lg:ml-0  lg:bg-transparent bg-green-600 rounded bg-opacity-50 lg:mt-0 mt-[5rem] hover:scale-125 cursor-pointer "
        src="/Images/cart.png"
        alt=""
      />

      <div
        id="cart"
        className="  absolute right-1 w-full lg:w-[28rem] h-[25rem] bg-white opacity-90 z-40    "
      >
        <h2 className="text-center text-green-600 text-[20px] p-1">Cart</h2>
        <div className="border border-black w-full h-[5rem] flex items-center p-3 bg-gray-300 justify-between ">
          <img className="h-[3rem] " src="/Images/vela1.jpg" alt="" />
          <p className=" w-[5rem] ">vela de nisman</p>
          <p className="">price</p>
          <div className="flex items-center bg-white p-1 rounded-lg">
            <img className="h-[4px] " src="/Images/icon-minus.svg" alt="" />
            <p className="mx-2 text-green-600">2</p>
            <img className="h-[10px] " src="/Images/icon-plus.svg" alt="" />
          </div>
          <img src="/Images/icon-delete.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
