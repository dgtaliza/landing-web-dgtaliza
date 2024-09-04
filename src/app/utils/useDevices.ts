import { useMediaQuery } from "@mui/material";

export const useDevices = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return {
    isMobile,
  };
};
