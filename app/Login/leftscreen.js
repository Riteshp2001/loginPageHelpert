import svgArray from "../logs/svgLogs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function LeftScreen() {
  return (
    <div className="hidden md:block w-[50%] h-screen overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-screen"
      >
        {svgArray.map((elem, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="w-full h-full bg-blue-700 flex flex-col justify-center items-center">
                <div className="w-1/2 flex flex-col justify-center items-center">
                  <div dangerouslySetInnerHTML={{ __html: elem.svg }}></div>
                </div>
                <div className="flex flex-col justify-center items-center w-[60%] gap-10 h-full">
                  <div className="text-3xl  font-extrabold whitespace-nowrap">
                    {elem.title}
                  </div>
                  <div className="text-xl  text-center">{elem.subtitle}</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
