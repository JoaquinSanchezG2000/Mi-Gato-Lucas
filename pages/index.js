import { useContext, useState } from "react";
import Carrusel from "../components/Carrusel";
import Head from "next/head";
import Layout from "../components/Wrappers/Layout";
import Navbar from "../components/Navbar";


export default function Home() {


  return (
    <div className="h-full w-full">
      <Head>
        <title>Mi Gato Lucas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Carrusel />
        <div className="flex flex-col items-center ">
          <div className=" flex w-full items-center justify-center text-center   ">
            <div className="mt-[8rem] flex w-full flex-col justify-between  lg:w-[80%] lg:flex-row  ">
              <div className="mb-10 w-full p-4 lg:mb-0 lg:w-[40%]  ">
                <h3 className="m-5 text-2xl text-green-600">Quienes Somos ?</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam dignissimos
                  hic, reprehenderit eveniet laudantium, inventore molestiae quis magni velit odio
                  similique officiis eum aperiam deleniti ex nobis consectetur aliquid fugit!
                </p>
              </div>
              <div className="mb-10 w-full p-4 lg:mb-0 lg:w-[40%] ">
                <h3 className="m-5 text-2xl text-green-600">Que Ofrecemos ?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa, et magnam
                  quas, sapiente numquam tempore id voluptate soluta aliquam optio ab atque,
                  excepturi repudiandae dolorem voluptatem odit. Nesciunt, eveniet.
                </p>
              </div>
            </div>
          </div>
          <div className="my-10 w-[60%] text-center ">
            <h3 className="m-5 text-2xl text-green-600">A que nos dedicamos ?</h3>
            <p>
              hace años que hacemos lo mismo , si estabas buscando calidad y confianza quedate
              tranquilo , ya Nos encontraste Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Maiores ducimus cum minima sequi quas harum, asperiores earum nihil? Deleniti,
              incidunt dignissimos cumque repudiandae error suscipit? Iure repellat ea rem beatae.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}
