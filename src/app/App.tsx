import { lazy, Suspense } from "react";
import Clients from "./sections/clients/Clients";
import Header from "./components/header/Header";
import SmallHeader from "./components/smallheader/SmallHeader";
import ScrollAnimation from "./components/scrollanimation/ScrollAnimation";
import Loading from "./components/loading/Loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "./App.css";
import { useDevices } from "./utils";

const Home = lazy(() => import("./sections/home/Home"));
const Services = lazy(() => import("./sections/services/Services"));
const About = lazy(() => import("./sections/about/About"));
const Footer = lazy(() => import("./components/footer/Footer"));

export default function App() {
  const { isMobile } = useDevices();

  return (
    <div className="background-dgtaliza">
      {isMobile ? <SmallHeader /> : <Header />}

      <ScrollAnimation>
        <Suspense key="home" fallback={<Loading />}>
          <Home />
        </Suspense>
        <Suspense key="services" fallback={<Loading />}>
          <Services />
        </Suspense>
        <Suspense key="clients" fallback={<Loading />}>
          <Clients />
        </Suspense>
        <Suspense key="about" fallback={<Loading />}>
          <About />
        </Suspense>
      </ScrollAnimation>
      <Footer />
    </div>
  );
}
