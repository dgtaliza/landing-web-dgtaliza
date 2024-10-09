import { useState } from "react";
import Slider, { Settings } from "react-slick";
import devStiven from "../../assets/img/team/devstiven.jpg";
import codeLeo from "../../assets/img/team/codeleo.jpg";
import leon from "../../assets/img/team/leon.jpg";
import ArrowRight from "../arrowright/ArrowRight";
import ArrowLeft from "../arrowleft/ArrowLeft";

const teamIntegrants = [
  { image: devStiven, link: "https://devstiven.netlify.app/" },
  { image: codeLeo, link: "https://codeleo.vercel.app/" },
  { image: leon, link: "https://github.com/Leon-Flor" },
  { image: devStiven, link: "https://devstiven.netlify.app/" },
  { image: codeLeo, link: "https://codeleo.vercel.app/" },
  { image: leon, link: "https://github.com/Leon-Flor" },
];

export default function CarouselTeam() {
  const [imageIndex, setImageIndex] = useState(0);

  const settings: Settings = {
    infinite: true,
    lazyLoad: "ondemand",
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    beforeChange: (_current: number, next: number) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings} draggable={false} autoplay>
        {teamIntegrants.map((item, idx) => (
          <div
            key={idx}
            className={idx === imageIndex ? "slideOne activeSlide" : "slideOne"}
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="container noselect my-24">
                <div className="canvas">
                  <div className="tracker tr-1"></div>
                  <div className="tracker tr-2"></div>
                  <div className="tracker tr-3"></div>
                  <div className="tracker tr-4"></div>
                  <div className="tracker tr-5"></div>
                  <div className="tracker tr-6"></div>
                  <div className="tracker tr-7"></div>
                  <div className="tracker tr-8"></div>
                  <div className="tracker tr-9"></div>
                  <div className="tracker tr-10"></div>
                  <div className="tracker tr-11"></div>
                  <div className="tracker tr-12"></div>
                  <div className="tracker tr-13"></div>
                  <div className="tracker tr-14"></div>
                  <div className="tracker tr-15"></div>
                  <div className="tracker tr-16"></div>
                  <div className="tracker tr-17"></div>
                  <div className="tracker tr-18"></div>
                  <div className="tracker tr-19"></div>
                  <div className="tracker tr-20"></div>
                  <div className="tracker tr-21"></div>
                  <div className="tracker tr-22"></div>
                  <div className="tracker tr-23"></div>
                  <div className="tracker tr-24"></div>
                  <div className="tracker tr-25"></div>
                  <div id="card">
                    <img
                      className="rounded-3xl"
                      src={item.image}
                      alt={`Slide ${idx}`}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}
