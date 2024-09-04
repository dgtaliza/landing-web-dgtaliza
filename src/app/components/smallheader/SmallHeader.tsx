import { useState } from "react";
import { AppBar, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import logoWhite from "../../assets/img/logo-dgtaliza-white.png";
import MenuDrawer from "../menuheader/MenuHeader";

export default function SmallHeader() {
  const [openMenuDrawer, setOpenMenuDrawer] = useState(false);

  const handleOpenMenuDrawer = () => {
    setOpenMenuDrawer(!openMenuDrawer);
  };

  return (
    <AppBar
      className="px-8 xl:px-20 py-4 xl:py-10 backdrop-blur-xl"
      position="fixed"
      color="transparent"
      elevation={0}
    >
      <div className="flex justify-between items-center">
        <a href="/">
          <img src={logoWhite} className="w-40 pt-2" alt="icon" />
        </a>
        <div>
          <MenuDrawer
            open={openMenuDrawer}
            toggleMenuDrawer={handleOpenMenuDrawer}
          />
          <IconButton onClick={handleOpenMenuDrawer}>
            <MenuIcon sx={{ color: "white" }} fontSize="large" />
          </IconButton>
        </div>
      </div>
    </AppBar>
  );
}
