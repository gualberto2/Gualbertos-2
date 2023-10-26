import React, { useState } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

interface CarouselProps {
  items: JSX.Element[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="flex flex-row justify-between items-center w-screen">
      <button onClick={prevSlide} className="text-5xl">
        <BiChevronLeft className="bg-green-900 text-white rounded-full " />
      </button>
      <div className="w-full px-2">{items[currentIndex]}</div>
      <button onClick={nextSlide} className="text-5xl">
        <BiChevronRight className="bg-green-900 text-white rounded-full " />
      </button>
    </div>
  );
};

export default Carousel;
