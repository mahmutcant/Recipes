import { useFoods } from '../store/food/hooks';
import starIcon from "../assets/star-icon.svg";
import { numFormat } from "../utils/format";
const FoodDescription = () => {
    const food = useFoods();
  return (
    <div className="m-10 w-4/12 h-64 bg-white border rounded-lg flex items-center">
          <img
            className="w-1/3 h-5/6 m-3 rounded-lg"
            src={food.selectedFood.imgSrc}
            alt=""
          />
          <div className="w-1/2">
            <h1 className="font-bold mb-4">{food.selectedFood.text}</h1>
            <span className="">
              Simple recipe for a weeknight or a celebration table. I promise it
              is one of the easiest salads you will ever make
            </span>
            <span className="flex mt-2 items-center">
              {Array(5)
                .fill(1)
                .map((i) => (
                  <img key={i} src={starIcon} width={20} height={20} alt="" />
                ))}
              <span className="ml-3 text-[#878893]">
                {numFormat(food.selectedFood.favCount)}
              </span>
            </span>
          </div>
        </div>
  )
}

export default FoodDescription