import { AppBar } from "@mui/material";
import logoWhite from "../../assets/img/logo-dgtaliza-white.png";

function Header() {
  return (
    <AppBar
      className="flex flex-row justify-between items-center px-32 py-4 bg-transparent backdrop-blur-xl"
      elevation={0}
      color="transparent"
      position="fixed"
    >
      <a href="/">
        <img src={logoWhite} alt="logo-dgtaliza-white" className="w-40 pt-3" />
      </a>
      <a
        href="#home"
        className="text-base hover:text-[#719EFF] transition duration-300 text-white font-bold uppercase"
      >
        Inicio
      </a>
      <a
        href="#services"
        className="text-base hover:text-[#719EFF] transition duration-300 text-white font-bold uppercase"
      >
        Servicios
      </a>
      <a
        href="#clients"
        className="text-base hover:text-[#719EFF] transition duration-300 text-white font-bold uppercase"
      >
        Clientes
      </a>
      <a
        href="#about"
        className="text-base hover:text-[#719EFF] transition duration-300 text-white font-bold uppercase"
      >
        Nosotros
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=573225331967"
        target="_blank"
      >
        <p className="text-base text-white font-bold uppercase bg-[#719EFF] border border-[#719EFF] hover:border-white hover:bg-transparent px-8 py-4 rounded-md transition duration-300">
          Contácto
        </p>
      </a>
    </AppBar>
  );
}

export default Header;
