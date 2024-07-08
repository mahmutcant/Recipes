import TopNavBar from "./layout/TopNavBar";
import FoodInfo from "./layout/FoodInfo";
import FoodDescription from "./layout/FoodDescription";
import Search from "./layout/Search";
function App() {
  return (
    <>
      <TopNavBar />
      <div className="flex justify-center items-baseling">
        <FoodInfo />
        <FoodDescription />
        <div className="m-10 w-2/12">
          <Search />
          <div className="bg-[#fff] text-white rounded-2xl mt-5">
            <div
              className="w-full h-[100px] bg-clip-padding z-[2] rounded-t-xl"
              style={{
                backgroundImage: `url("https://t3.ftcdn.net/jpg/06/72/45/22/360_F_672452282_37w8WlNXxxgY0hxCNKEMTTj03IQE5ong.jpg")`,
              }}
            ></div>
            <div className="text-black m-3">
              <div className="flex justify-center font-semibold text-[14px]">
                <span>SUBSCRIBE TODAY</span>
              </div>
              <div className="flex justify-center font-bold text-[18px]">
                <span>Never miss a repice</span>
              </div>
              <div className="w-full border border-[#F1D3D0] rounded-lg my-3 p-2">
                <input
                  className="text-black w-full h-full focus:shadow-2xl focus:outline-none"
                  type="text"
                  placeholder="Your email address"
                />
                
              </div>
              <button className="border w-full my-3 rounded-lg h-1/3 py-3 text-white bg-[#F55951] hover:shadow-lg hover:shadow-[#F1D3D0]">
                  <span className="">Subscribe</span>
                </button>
                <div className="w-full my-3 p-4 font-semibold">
                  <span className="flex items-center justify-center">We won't send you spam.</span>
                  <span className="flex items-center justify-center">Unsubscribe at any time.</span>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
