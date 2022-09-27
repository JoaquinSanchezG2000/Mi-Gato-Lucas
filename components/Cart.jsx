import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/menuContext";

const Cart = () => {
  const { cartIsOpen, handleSwitchCartOpen } = useContext(Context);
  const [quantityCartItems, setQuantityCartItems] = useState(1);

  const sumQuantityCartItems = () => {
    if (quantityCartItems == 10) return;
    setQuantityCartItems(PreviousState => PreviousState + 1);
  };
  const restQuantityCartItems = () => {
    if (quantityCartItems == 0) return;
    setQuantityCartItems(PreviousState => PreviousState - 1);
  };
  console.log(quantityCartItems);

  return (
    <div className="lg:mr-8">
      <img
        onClick={e => {
          handleSwitchCartOpen();
          console.log(e);
        }}
        className="fixed ml-8 mt-[5rem] h-[2.2rem]  cursor-pointer  rounded bg-green-600  bg-opacity-50 duration-300 ease-in hover:scale-125 lg:static lg:ml-0 lg:mt-0 lg:bg-transparent "
        src="/Images/cart.png"
        alt=""
      />
      {cartIsOpen && (
        <div
          onClick={e => {
            e.stopPropagation();
          }}
          id="cart"
          className="  absolute right-1 z-40 h-[25rem] w-full bg-white opacity-90 lg:w-[28rem]    "
        >
          <h2 className="p-1 text-center text-[20px] text-green-600">Cart</h2>
          <div className="flex h-[5rem] w-full items-center justify-between border border-black bg-gray-300 p-3 ">
            <img className="h-[3rem] " src="/Images/vela1.jpg" alt="" />
            <p className=" w-[5rem] ">vela de nisman</p>
            <p className="">price</p>
            <div className="flex items-center rounded-lg bg-white p-1">
              <img
                onClick={restQuantityCartItems}
                className="h-[4px] cursor-pointer hover:scale-125 "
                src="/Images/icon-minus.svg"
                alt=""
              />
              <p className="mx-2 text-green-600">{quantityCartItems} </p>
              <img
                onClick={sumQuantityCartItems}
                className="h-[10px] cursor-pointer hover:scale-125 "
                src="/Images/icon-plus.svg"
                alt=""
              />
            </div>
            <img src="/Images/icon-delete.svg" alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
