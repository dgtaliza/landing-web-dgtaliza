import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const storiesData = [
  {
    id: 1,
    image: "experiencie",
    backgroundColorType: "#6588FE",
    title: "Experiencia",
    description:
      "Contamos con más de 5 años de experiencia en el desarrollo de soluciones tecnológicas.",
  },
  {
    id: 2,
    image: "inovation",
    backgroundColorType: "#E7CD45",
    title: "Innovación",
    description:
      "Implementamos las últimas tecnologías para mantener a nuestros clientes a la vanguardia.",
  },
  {
    id: 3,
    image: "quality",
    backgroundColorType: "#52D9EF",
    title: "Calidad",
    description:
      "Nos comprometemos a entregar productos y servicios de la más alta calidad.",
  },
  {
    id: 4,
    image: "support",
    backgroundColorType: "#6588FE",
    title: "Soporte",
    description:
      "Ofrecemos soporte 24/7 para asegurar que tu negocio nunca se detenga.",
  },
];

export default function CarouselAbout() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      speed={300}
      navigation
      loop
      autoplay
      draggable={false}
      breakpoints={{
        1024: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        320: {
          slidesPerView: 1,
        },
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      <div>
        {storiesData.map((item) => (
          <SwiperSlide
            key={item.id}
            className="swiper-slide-two my-10 rounded-xl flex justify-center items-center flex-col gap-10 mt-20"
            data-hash={`slide${item.id}`}
          >
            <div className="flex justify-center items-center px-60">
              <div className="flex flex-col justify-center items-center h-full w-full px-20">
                <div
                  className="relative w-[200px] md:w-[420px] h-[120px] md:h-[220px] flex justify-center items-center rounded-t-lg"
                  style={{ backgroundColor: item.backgroundColorType }}
                >
                  <img
                    className="w-20 md:w-40 mb-10 rounded-t-lg object-cover object-center "
                    src={`${import.meta.env.VITE_DIST_IMGS}/about/${
                      item.image
                    }.webp`}
                    loading="lazy"
                    alt="image"
                  />
                </div>
                <div className="p-2 md:p-4 rounded-xl flex flex-col items-center bg-white z-10 justify-center w-full -mt-10 h-[140px] md:h-[200px]">
                  <p className="text-[#0F1352] font-bold text-xs sm:text-xl md:text-xl text-center font-extrabold uppercase">
                    {item.title}
                  </p>
                  <p className="text-[#717171] text-xs sm:text-lg text-center px-8 w-full md:w-4/5 pt-2 md:pt-8 font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
}
