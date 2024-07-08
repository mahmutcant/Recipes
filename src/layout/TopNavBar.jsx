import { useState } from "react";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import classNames from "classnames";
import { useFoods } from "../store/food/hooks";
import { setSelectedFood } from "../store/food/actions";

const TopNavBar = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 4;
  const food = useFoods()
  

  const handleNext = () => {
    if (startIndex + itemsToShow < food.foods.length - 1) {
      setStartIndex(startIndex + 1);
    }
  };
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-5/6 bg-white mt-12 rounded-lg h-[200px] shadow-xl shadow-[#F1D3D0] flex items-center justify-between overflow-hidden relative">
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
            {food.foods.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedFood(item)}
                className={classNames("flex-shrink-0 w-1/6 h-auto p-2 text-center items-center justify-center mx-6 box-border hover:border-2 hover:rounded-lg hover:border-[#FAF2F0]", {
                    "border-2 rounded-lg border-[#FAF2F0]": item.id === food.selectedFood.id
                })}
              >
                <div className="flex items-center justify-center">
                  <img
                    className="rounded-full w-[50px] h-[50px]"
                    src={item.imgSrc}
                    
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
