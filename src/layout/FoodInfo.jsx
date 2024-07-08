import classNames from "classnames";
import { useFoods } from "../store/food/hooks";
import { foodInfo } from "../utils/consts";

const FoodInfo = () => {
  const difficultlyLevels = ["Easy", "Medium", "Hard"];
  const food = useFoods();
  return (
    <div className="my-10 mx-8 w-3/12">
      <div className="bg-white flex justify-evenly border rounded-lg p-5 shadow-[#F1D3D0] shadow-xl">
        {foodInfo.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center font-semibold"
          >
            {item.icon}
            <span className="ml-2">
              {food.selectedFood[item.title]} {item.subTitle}
            </span>
          </div>
        ))}
      </div>
      <div className="bg-white my-10 items-end shadow-xl shadow-[#F1D3D0] border rounded-lg p-5">
        <span className="m-5 font-bold">Difficultly</span>
        <div className="flex justify-between m-5">
          {difficultlyLevels.map((item, index) => (
            <div
              key={index}
              className={classNames(
                "border border-[#EFD7D1] p-3 rounded-full w-1/4 flex justify-center bg-[#FAF2F0]",
                {
                  "bg-[#fc5850] shadow-xl shadow-[#F1D3D0] text-white":
                    item === food.selectedFood.difficultLevel,
                }
              )}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodInfo;
