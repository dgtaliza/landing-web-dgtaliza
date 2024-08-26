import { memo } from "react";
import logoWhite from "../../assets/img/logo-dgtaliza-white.png";

export default memo(function Footer() {
  return (
    <div className="px-8 xl:px-40 py-20 flex flex-col xl:flex-row justify-between xl:items-start gap-10">
      <div className="flex flex-col items-start">
        <a href="/">
          <img src={logoWhite} alt="logo-dgtaliza-white" className="w-40" />
        </a>
        <p className="text-white pt-8 font-sans">© 2024 Dgtaliza™.</p>
        <p className="text-white font-sans">Todos los derechos reservados</p>
      </div>
      <div className="flex flex-col items-start">
        <h2 className="text-white text-xl xl:text-3xl font-extrabold uppercase">
          Navegación
        </h2>
        <a
          href="#home"
          className="text-base hover:text-[#F5F7FA] transition text-white pt-8"
        >
          <span className="font-sans">Inicio</span>
        </a>
        <a
          href="#services"
          className="text-base hover:text-[#F5F7FA] transition text-white pt-4"
        >
          <span className="font-sans">Servicios</span>
        </a>
        <a
          href="#clients"
          className="text-base hover:text-[#F5F7FA] transition text-white pt-4"
        >
          <span className="font-sans">Clientes</span>
        </a>
        <a
          href="#about"
          className="text-base hover:text-[#F5F7FA] transition text-white pt-4"
        >
          <span className="font-sans">Nosotros</span>
        </a>
      </div>
      <div className="flex flex-col items-start">
        <h2 className="text-white text-xl xl:text-3xl font-extrabold uppercase">
          Escríbenos
        </h2>
        <a
          href="mailto:contacto.dgitaliza@gmail.com"
          className="text-white pt-8 hover:underline"
        >
          <span className="font-sans">contacto.dgitaliza@gmail.com</span>
        </a>
      </div>
    </div>
  );
});
