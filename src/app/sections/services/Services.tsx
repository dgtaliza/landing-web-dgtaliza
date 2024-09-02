import CarouselServices from "../../components/carouselservices/CarouselServices";

function Services() {
  return (
    <div id="services" className="py-20 px-8 xl:px-40">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-extrabold text-center mt-12 z-40">
        Nuestros servicios
      </h2>
      <div className="container-spinnings absolute right-[70%] top-[25%]">
        <div className="hero-circle">
          <div className="hero-rotate" id="circle">
            <div className="planet" />
            <div className="planet" />
            <div className="planet" />
            <div className="planet" />
          </div>
        </div>
      </div>
      <CarouselServices />
    </div>
  );
}

export default Services;
