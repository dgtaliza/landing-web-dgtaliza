import { Typography } from "@mui/material";
import CarouselAbout from "../../components/carouselabout/CarouselAbout";
import arrowButtonIcon from "../../assets/svg/arrow-button.svg";

export default function About() {
  return (
    <div id="about" className="py-20">
      <div className="flex flex-col xl:flex-row justify-between items-center">
        <div className="flex flex-col items-center xl:items-start gap-4 w-full md:w-11/12 xl:w-[60%] pl-8 pr-8 md:pl-0 md:pr-0 lg:pl-20 lg:pr-20 xl:pl-32 xl:pr-0">
          <h2 className="text-2xl md:text-4xl text-white uppercase font-extrabold text-center xl:text-left">
            Estamos aquí para desarrollar tu próximo proyecto
          </h2>
          <Typography className="text-white text-justify z-40">
            Somos una empresa de software apasionada por transformar las ideas
            de nuestros clientes en realidad. Nuestro equipo de expertos en
            tecnología se dedica a desarrollar soluciones innovadoras y a
            medida, impulsando el éxito de nuestros clientes en un mundo cada
            vez más digital.
          </Typography>
        </div>
        <div className="w-full xl:w-[55%]">
          <CarouselAbout />
        </div>
      </div>
      <div className="container-spinnings absolute left-[70%] top-[55%]">
        <div className="hero-circle">
          <div className="hero-rotate" id="circle">
            <div className="planet" />
            <div className="planet" />
            <div className="planet" />
            <div className="planet" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-40">
        <h2 className="text-4xl xl:text-6xl w-full xl:w-[70%] text-white uppercase font-extrabold text-center leading-tight">
          ¡Quiero hacer realidad mi proyecto!
        </h2>
        <a
          href="https://api.whatsapp.com/send?phone=573225331967"
          target="_blank"
          className="flex flex-row items-center gap-2 text-base text-white font-bold uppercase bg-[#719EFF] border border-[#719EFF] hover:border-white hover:bg-transparent px-8 py-4 mt-8 rounded-md transition duration-300"
        >
          Contáctanos
          <img src={arrowButtonIcon} alt="arrow" />
        </a>
      </div>
    </div>
  );
}
