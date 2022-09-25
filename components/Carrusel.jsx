import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carrusel = () => {
  return (
    <div className="h-[30rem] w-full ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
      >
        <SwiperSlide>
          <img className="h-[30rem] w-full " src="/Images/vela1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[30rem] w-full " src="/Images/vela2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[30rem] w-full " src="/Images/vela3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[30rem] w-full " src="/Images/vela4.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carrusel;
