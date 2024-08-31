import CarouselClients from "../../components/carouselclients/CarouselClients";

export default function Clients() {
  return (
    <div id="clients" className="py-20 px-0 xl:px-32 relative">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#EAF3FF] uppercase font-extrabold text-center mt-12 z-10 relative">
        Nuestros Clientes
      </h2>
      <CarouselClients />
    </div>
  );
}
