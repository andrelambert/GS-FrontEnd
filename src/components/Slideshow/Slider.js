import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Button } from "../Button/Button"
import { Link } from "react-router-dom";
import "./Slider.css";

// Importando  e definindo Slides 
import Slide2 from './images/HomeSlide2.jpg';
import Slide4 from './images/HomeSlide4.jpg';
import Slide3 from './images/HomeSlide3.jpg';

export const sliderData = [
    {
      image: Slide4,
      title: "Te ajudamos a cuidar de São Paulo",
      text: "Vamos ajudar a cidade reciclando nosso lixo? Aprenda mais com a gente",
      path: "/aprenda"
    },
    {
      image: Slide2,
      title: "Onde jogar meu lixo?",
      text: "Veja onde tem um ponto de reciclagem próximo a você",
      path: "/mapa"
    },
    {
      image: Slide3,
      title: "Sobre nós",
      text: "Conheça mais sobre o nosso projeto",
      path: "/sobre"
    },

  ];


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 6000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt="slide" className="image" />
                <div className="content">
                  <h2>{slide.title}</h2>
                  <p>{slide.text}</p>
                  <hr />
                  <Link to={slide.path}>
                    <Button $primary>Saiba mais</Button>
                  </Link>  
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;