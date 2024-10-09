import CarouselTeam from "../../components/carouselteam/CarouselTeam";

export default function Team() {
  return (
    <div id="team" className="py-20 px-8 xl:px-40 pt-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-white uppercase font-extrabold text-center pt-32 sm:pt-12 z-40">
        Nuestro equipo
      </h2>
      <CarouselTeam />
    </div>
  );
}
