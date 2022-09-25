import { useState } from "react";
import Carrusel from "../components/Carrusel";
import Head from "next/head";
import Layout from "../components/Wrappers/Layout";

export default function Home() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const handleSwitchCartOpen = () => {
    setCartIsOpen(previousState => !previousState);
  };

  const number = 1;
  const handleCartClose = () => {
    setCartIsOpen(false);
  };

  return (
    <div onClick={handleCartClose} className="w-full h-full">
      <Head>
        <title>Mi Gato Lucas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Carrusel />
        <div className="flex flex-col items-center ">
          <div className=" w-full text-center flex items-center justify-center   ">
            <div className="flex flex-col lg:flex-row lg:w-[80%] w-full  mt-[8rem] justify-between  ">
              <div className="lg:w-[40%] w-full mb-10 lg:mb-0 p-4  ">
                <h3 className="text-2xl text-green-600 m-5">Quienes Somos ?</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam dignissimos
                  hic, reprehenderit eveniet laudantium, inventore molestiae quis magni velit odio
                  similique officiis eum aperiam deleniti ex nobis consectetur aliquid fugit!
                </p>
              </div>
              <div className="lg:w-[40%] w-full mb-10 lg:mb-0 p-4 ">
                <h3 className="text-2xl text-green-600 m-5">Que Ofrecemos ?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa, et magnam
                  quas, sapiente numquam tempore id voluptate soluta aliquam optio ab atque,
                  excepturi repudiandae dolorem voluptatem odit. Nesciunt, eveniet.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center w-[60%] my-10 ">
            <h3 className="text-2xl text-green-600 m-5">A que nos dedicamos ?</h3>
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
