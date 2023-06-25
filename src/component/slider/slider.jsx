import React, { useState } from 'react';
import Slide1 from '../../img/slider1.jpg'
import Slide2 from '../../img/slider2.jpg'
import Slide3 from '../../img/slider3.jpg'
import Slide4 from '../../img/slider4.jpg'
import Slide5 from '../../img/slider5.jpg'

export const Slider = () => {
  const slides = [
    {
      id: 1,
      image: Slide1,
      caption: 'Slide 1',
    },
    {
      id: 2,
      image: Slide2,
      caption: 'Slide 2',
    },
    {
      id: 3,
      image: Slide3,
      caption: 'Slide 3',
    },
    {
      id: 4,
      image: Slide4,
      caption: 'Slide 4',
    },
    {
      id: 5,
      image: Slide5,
      caption: 'Slide 5',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  return (

    <div className="flex h-[650px]">
      <div className=" absolute w-[1280px]">

        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img src={slide.image} alt={slide.caption} className="w-full h-[600px]" />
            <div className="absolute bottom-0 p-4 bg-black bg-opacity-50 text-white w-full">
              <p className="text-xl">{slide.caption}</p>
            </div>
          </div>
        ))}

        <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded-l" onClick={prevSlide}>
          {"<"}
        </button>
        <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded-r" onClick={nextSlide}>
          {">"}
        </button>

      </div>
    </div>

  );
};