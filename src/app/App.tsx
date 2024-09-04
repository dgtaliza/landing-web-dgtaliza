import { Suspense, lazy } from "react";
import { useDevices } from "./utils";
import Clients from "./sections/clients/Clients";
import Header from "./components/header/Header";
import Services from "./sections/services/Services";
import About from "./sections/about/About";
import Footer from "./components/footer/Footer";
import SmallHeader from "./components/smallheader/SmallHeader";
import ScrollAnimation from "./components/scrollanimation/ScrollAnimation";
import Loading from "./components/loading/Loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "./App.css";

const Home = lazy(() => import("./sections/home/Home"));


function App() {
  const { isMobile } = useDevices();

  return (
    <div className="bg-main">
      {isMobile ? <SmallHeader /> : <Header />}

      <ScrollAnimation>
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
        <Services />
        <Clients />
        <About />
      </ScrollAnimation>
      <Footer />
    </div>
  );
}

export default App;
