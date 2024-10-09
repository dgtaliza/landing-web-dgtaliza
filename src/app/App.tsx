import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useDevices } from "./utils";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SmallHeader from "./components/smallheader/SmallHeader";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import ScrollAnimation from "./components/scrollanimation/ScrollAnimation";
import Loading from "./components/loading/Loading";
import ClientDetails from "./sections/clientdetails/ClientDetails";
import Services from "./sections/services/Services";
import Team from "./sections/team/Team";
import Clients from "./sections/clients/Clients";
import About from "./sections/about/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "./App.css";

const Home = lazy(() => import("./sections/home/Home"));

function App() {
  const { isMobile } = useDevices();

  return (
    <Router>
      <div className="bg-main">
        {isMobile ? <SmallHeader /> : <Header />}
        <ScrollAnimation>
          <ScrollToTop />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/#services" element={<Services />} />
              <Route path="/#team" element={<Team />} />
              <Route path="/#clients" element={<Clients />} />
              <Route path="/#about" element={<About />} />

              <Route path="/clientsdetails/:id" element={<ClientDetails />} />
            </Routes>
          </Suspense>
        </ScrollAnimation>
        <Routes>
          <Route path="/clientsdetails/:id" element={null} />
          <Route path="*" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
