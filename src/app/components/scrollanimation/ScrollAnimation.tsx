import { useEffect, ReactNode, memo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface ScrollAnimationProps {
  children: ReactNode;
}

export default memo(function ScrollAnimation({
  children,
}: ScrollAnimationProps) {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 2000,
      easing: "ease",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return <>{children}</>;
});
