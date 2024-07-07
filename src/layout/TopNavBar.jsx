import { useState } from "react";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import classNames from "classnames";

const TopNavBar = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedFood, setSelectedFood] = useState(0);
  const itemsToShow = 4;

  const handleNext = () => {
    if (startIndex + itemsToShow < sliders.length - 1) {
      setStartIndex(startIndex + 1);
    }
  };
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  const sliders = [
    {
      id: 1,
      text: "Crispy Crouton Salad",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkWoAOWKlHD-TZW2ZcfKgNGDV8z1olV25y9A&s",
    },
    {
      id: 2,
      text: "Pancake with Yoghurt",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-nC9f-oC0KpAkjTsnVXwWTgxj3DRiTkjIQ&s",
    },
    {
      id: 3,
      text: "Spinach Salad",
      imgSrc:
        "https://cdn.loveandlemons.com/wp-content/uploads/2023/11/spinach-salad.jpg",
    },
    {
      id: 4,
      text: "3 Crouton Salad",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkWoAOWKlHD-TZW2ZcfKgNGDV8z1olV25y9A&s",
    },
    {
      id: 5,
      text: "4 Crouton Salad",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkWoAOWKlHD-TZW2ZcfKgNGDV8z1olV25y9A&s",
    },
    {
      id: 6,
      text: "5 Crouton Salad",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkWoAOWKlHD-TZW2ZcfKgNGDV8z1olV25y9A&s",
    },
  ];
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-4/6 bg-white mt-12 rounded-lg h-[230px] flex items-center justify-between overflow-hidden relative">
        <button
          onClick={handlePrev}
          className="rounded-full bg-[#FAF2F0] w-[50px] h-[50px] flex items-center justify-center ml-5"
        >
          <img src={arrowLeft} width={18} height={18} />
        </button>
        <div className="items-center justify-between w-full overflow-hidden px-5">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(startIndex * 100) / itemsToShow}%)`,
            }}
          >
            {sliders.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedFood(item.id)}
                className={classNames("flex-shrink-0 w-1/6 h-auto p-2 text-center mx-6 box-border", {
                    "border-2 rounded-lg border-[#FAF2F0]": item.id === selectedFood
                })}
              >
                <div className="flex items-center justify-center">
                  <img
                    className="rounded-full"
                    src={item.imgSrc}
                    width={50}
                    height={50}
                    alt={item.alt}
                  />
                </div>
                <span className="m-3">{item.text}</span>
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="rounded-full bg-[#FAF2F0] w-[50px] h-[50px] flex items-center justify-center mr-5"
        >
          <img src={arrowRight} width={18} height={18} />
        </button>
      </div>
    </div>
  );
};

export default TopNavBar;
