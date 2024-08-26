import CarouselClients from "../../components/carouselclients/CarouselClients";

export default function Clients() {
  return (
    <div id="clients" className="py-20 px-8 xl:px-40">
      <h2 className="text-xl sm:text-2xl md:text-4xl text-[#EAF3FF] uppercase font-extrabold text-center pt-16">
        Nuestros Clientes
      </h2>
      <CarouselClients />
    </div>
  );
}
