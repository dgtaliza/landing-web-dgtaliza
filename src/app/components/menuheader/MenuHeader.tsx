import { Button, Drawer, IconButton, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import logoWhite from "../../assets/img/logo-dgtaliza-white.png";
import logoBlack from "../../assets/svg/dgtaliza-iso-black.svg";

interface MenuDrawerProps {
  open: boolean;
  toggleMenuDrawer: () => void;
}

export default function MenuDrawer({
  open,
  toggleMenuDrawer,
}: MenuDrawerProps) {
  return (
    <Drawer anchor="right" open={open} onClick={toggleMenuDrawer}>
      <Paper
        sx={{
          width: 320,
          height: "100%",
          borderRadius: 0,
          padding: 2
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
          <div>
            <img src={logoBlack} alt="logo" />
          </div>
          <IconButton onClick={toggleMenuDrawer}>
            <CloseIcon sx={{ color: "black" }} fontSize="large" />
          </IconButton>
        </div>
        <div className="flex flex-col items-start">
          <Button
            sx={{
              color: "black",
          
              fontSize: 16,
            }}
            href="#home"
          >
            Inicio
          </Button>
          <div
            style={{
              color: "black",
              width: "100%",
              borderBottom: "2px solid",
            }}
          />
          <Button
            sx={{
              color: "black",
          
              fontSize: 16,
            }}
            href="#services"
          >
            Servicios
          </Button>
          <div
            style={{
              color: "black",
              width: "100%",
              borderBottom: "2px solid",
            }}
          />
          <Button
            sx={{
              color: "black",
          
              fontSize: 16,
            }}
            href="#clients"
          >
            Clientes
          </Button>
          <div
            style={{
              color: "black",
              width: "100%",
              borderBottom: "2px solid",
            }}
          />
          <Button
            sx={{
              color: "black",
          
              fontSize: 16,
            }}
            href="#about"
          >
            Nosotros
          </Button>
          <div
            style={{
              color: "black",
              width: "100%",
              borderBottom: "2px solid",
            }}
          />
          <Button
            sx={{
              color: "black",
          
              fontSize: 16,
            }}
            href="#footer"
          >
            Contáctanos
          </Button>
        </div>
        <div className="flex justify-center mt-auto mb-4">
          <img src={logoWhite} className="w-80" alt="icon" />
        </div>
      </Paper>
    </Drawer>
  );
}
