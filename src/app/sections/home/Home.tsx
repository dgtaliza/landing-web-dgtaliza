import { memo } from "react";
import Sectionseparator from "../../components/sectionseparator/Sectionseparator";

export default memo(function Home() {
  return (
    <div id="home" className="min-h-screen flex flex-col justify-between">
      <div className="flex flex-col xl:flex-row justify-between md:text-center text-left items-center xl:items-start mx-8 xl:mx-40 pt-32 xl:pt-[200px]">
        <div className="flex flex-col gap-8" data-aos="fade-up">
          <h1 className="text-2xl xl:text-5xl text-white leading-relaxed text-center xl:text-left font-extrabold">
            TRANSFORMAMOS TUS IDEAS EN{" "}
            <span className="text-[#6588FF]">
              DESARROLLO SIMPLE Y EFICIENTE
            </span>
          </h1>
          <p className="text-white text-sm xl:text-lg text-justify xl:text-left w-full md:w-11/12 font-sans">
            Desarrollamos soluciones innovadoras para impulsar tu éxito en un
            mundo cada vez más digital.
          </p>
          <button className="text-base text-white font-bold uppercase bg-[#6588FF] border border-[#6588FF] hover:border-white hover:bg-transparent px-8 py-4 mt-2 rounded-md w-auto xl:w-[30%] transition">
            Conoce más
          </button>
        </div>
        <div className="flex justify-center w-full" data-aos="zoom-in">
          <img
            src={`${import.meta.env.VITE_DIST_IMGS}/home/home.webp`}
            alt="coding-editing-interface"
            loading="lazy"
            className="w-[60%] w-auto animate-pulse"
          />
        </div>
      </div>
      <Sectionseparator />
    </div>
  );
});
