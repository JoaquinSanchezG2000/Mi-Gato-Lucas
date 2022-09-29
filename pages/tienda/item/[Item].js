import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../../components/Wrappers/Layout";

const item = () => {
  const router = useRouter();
  const [itemInfo, setItemInfo] = useState({});

  const getItem = () => {
    fetch("/stock.json")
      .then(Response => Response.json())
      .then(data => {
        const item = data.find(item => item.id == router.query.Item);
        console.log(item);

        setItemInfo(previousState => item);
      });
  };
  useEffect(() => {
    if (router.isReady) {
      getItem();
    }
  }, [router.isReady]);

  return (
    <Layout>
      <div className="flex justify-center ">
        <div className="flex h-[40rem] w-10/12 ">
          <div className="w-[55%] border-2 border-green-400 ">
            <div>
              <img src="" alt="" />
            </div>
          </div>
          <div className="w-[40%] border-2 border-red-300 p-10 text-center">
            <h2>{itemInfo.name}</h2>
            <p>{itemInfo.description} </p>
            <p>{itemInfo.price} </p>
            <div>
              <img src="/Images/icon-minus.svg" alt="" />
              <p></p>
              <img src="/Images/icon-plis.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default item;
