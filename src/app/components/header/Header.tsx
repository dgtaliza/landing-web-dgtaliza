import { memo } from "react";
import { AppBar } from "@mui/material";
import logoWhite from "../../assets/img/logo-dgtaliza-white.png";

export default memo(function Header() {
  return (
    <AppBar
      className="flex flex-row justify-between items-center px-32 py-4  bg-transparent backdrop-blur-md"
      elevation={0}
      color="transparent"
      position="fixed"
    >
      <a href="/">
        <img src={logoWhite} alt="logo-dgtaliza-white" className="w-40 pt-3" />
      </a>
      <div className="flex flex-row items-center gap-8">
        <a
          href="#home"
          className="text-sm hover:text-[#6588FF] transition duration-300 text-white font-bold uppercase"
        >
          Inicio
        </a>
        <a
          href="#services"
          className="text-sm hover:text-[#6588FF] transition duration-300 text-white font-bold uppercase"
        >
          Servicios
        </a>
        <a
          href="#clients"
          className="text-sm hover:text-[#6588FF] transition duration-300 text-white font-bold uppercase"
        >
          Clientes
        </a>
        <a
          href="#about"
          className="text-sm hover:text-[#6588FF] transition duration-300 text-white font-bold uppercase"
        >
          Nosotros
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=573225331967"
          target="_blank"
        >
          <p className="text-sm text-white font-bold uppercase bg-[#6588FF] border border-[#6588FF] hover:border-white hover:bg-transparent px-4 py-2 rounded-md transition duration-300">
            Contácto
          </p>
        </a>
      </div>
    </AppBar>
  );
});
