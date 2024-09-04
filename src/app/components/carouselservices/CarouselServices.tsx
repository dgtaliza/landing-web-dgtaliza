import Slider, { Settings } from "react-slick";
import ArrowServicesRight from "../arrowservicesright/ArrowServicesRight";
import ArrowServicesLeft from "../arrowservicesleft/ArrowServicesLeft";

const services = [
  {
    id: 1,
    image: "web-develop",
    title: "Desarrollo Web",
    description: "Creación de sitios y aplicaciones web modernas.",
  },
  {
    id: 2,
    image: "app-development",
    title: "Aplicaciones Móviles",
    description: "Desarrollo de apps para Android e iOS.",
  },
  {
    id: 3,
    image: "technologies-at-the-forefront",
    title: "Tecnologías",
    description: "Soluciones tecnológicas innovadoras.",
  },
  {
    id: 4,
    image: "ui-designs",
    title: "Diseño de Interfaces",
    description: "Diseño de interfaces de usuario modernas.",
  },
  {
    id: 5,
    image: "technology-consulting",
    title: "Consultoría",
    description: "Asesoría en soluciones tecnológicas.",
  },
  {
    id: 6,
    image: "custom-software-development",
    title: "Software a la Medida",
    description: "Desarrollo de software a medida.",
  },
  {
    id: 7,
    image: "performance-optimization",
    title: "Optimización de Rendimiento",
    description: "Optimización de rendimiento de software.",
  },
  {
    id: 8,
    image: "project-management",
    title: "Gestión de Proyectos",
    description: "Gestión de proyectos de software.",
  },
];

const settings: Settings = {
  infinite: true,
  lazyLoad: "ondemand",
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  centerMode: true,
  centerPadding: "0px",
  nextArrow: <ArrowServicesRight />,
  prevArrow: <ArrowServicesLeft />,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
};

export default function CarouselServices() {
  return (
    <div className="mt-12">
      <Slider {...settings} draggable={false} autoplay>
        {services.map((item) => (
          <div key={item.id}>
            <div className="flex justify-center items-center mx-2">
              <div className="flex flex-col justify-center items-center h-full w-full">
                <div className="relative w-full sm:w-[200px] md:w-[300px] lg:w-[316px] h-[160px] sm:h-[200px] md:h-[220px] lg:h-[244px]">
                  <img
                    className="w-full h-full rounded-lg object-cover object-center brightness-75"
                    src={`${import.meta.env.VITE_DIST_IMGS}/services/${
                      item.image
                    }.webp`}
                    alt={item.title}
                    loading="lazy"
                  />
                </div>
                <div className="p-2 rounded-xl flex flex-col justify-center items-center bg-white z-10 w-[200px] sm:w-[280px] md:w-[280px] lg:w-[280px] h-[100px] sm:h-[120px] md:h-[160px] text-center -mt-20">
                  <p className="text-[#0F1352] font-bold text-xs sm:text-base md:text-lg lg:text-2xl font-extrabold uppercase self-center">
                    {item.title}
                  </p>
                  <p className="text-[#717171] text-xs sm:text-sm md:text-base text-center pt-2 font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
