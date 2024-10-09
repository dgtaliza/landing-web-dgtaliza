import Sectionseparator from "../../components/sectionseparator/Sectionseparator";
import codingInterface from "../../assets/img/coding-rditing-interface.png";
import Services from "../services/Services";
import Team from "../team/Team";
import Clients from "../clients/Clients";
import About from "../about/About";

export default function Home() {
  return (
    <div id="home" className="min-h-screen flex flex-col justify-between">
      <div className="flex flex-col xl:flex-row justify-between md:text-center text-left items-center xl:items-start mx-8 xl:mx-40 pt-32 xl:pt-[200px]">
        <div
          className="flex flex-col items-center xl:items-start gap-8"
          data-aos="fade-up"
        >
          <h1 className="text-2xl xl:text-5xl text-white leading-relaxed text-center xl:text-left font-extrabold">
            TRANSFORMAMOS TUS IDEAS EN{" "}
            <span className="text-[#6588FF]">
              DESARROLLO SIMPLE Y EFICIENTE
            </span>
          </h1>
          <p className="text-white text-sm xl:text-lg xl:text-left w-full md:w-11/12 font-sans">
            Te ayudamos a desarrollar soluciones innovadoras que impulsan tu
            éxito en un mundo cada vez más digital.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=573225331967"
            target="_blank"
            className="text-base text-white font-bold uppercase bg-[#719EFF] border border-[#719EFF] hover:border-white hover:bg-transparent px-8 py-4 mt-8 rounded-md transition duration-300"
          >
            Conoce más
          </a>
        </div>
        <div
          className="flex justify-center w-full py-8 md:py-0"
          data-aos="zoom-in"
        >
          <img
            src={codingInterface}
            alt="coding-editing-interface"
            loading="lazy"
            className="w-[60%] w-auto animate-pulse"
          />
        </div>
      </div>
      <Sectionseparator />
      <Services />
      <Team />
      <Clients />
      <About />
    </div>
  );
}
