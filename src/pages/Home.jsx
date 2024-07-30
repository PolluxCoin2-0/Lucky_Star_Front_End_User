import HeroImg from "../assets/HomeHero.png";
import { Search } from "../components";
import { MdOutlineArrowUpward } from "react-icons/md";

const data = Array(10).fill({
  hash: "1",
  value1: "2x",
  value2: "One",
  value3: "$1",
  value4: "...",
});

const data2 = Array(13).fill({
  code: "1",
  value1: "2x",
  value2: "One",
  value3: "$1",
});

const Home = () => {
  return (
    <div className="px-24 bg-black min-h-screen">
      <Search />
      <div>
        <img src={HeroImg} alt="heroImg-luckystar" />
      </div>

      {/* Chart */}
      <div className="flex flex-row items-center justify-between space-x-6 bg-white rounded-lg px-4 pt-6 pb-12 mt-6">
        <div className="w-3/4">{/* Integrate chart here */}</div>
        <div className="w-1/4">
          <div className="border-b-[2px] border-[#B3B3B3]">
            <p className="font-bold text-2xl mb-5">81,000.74</p>
            <div className="flex flex-row items-center space-x-6 mb-5">
              <div className="flex flex-row items-center space-x-2 bg-[#E8F4EB] px-3 py-2 rounded-lg">
                <MdOutlineArrowUpward size={24} color="#107407" />
                <p className="text-xl font-medium text-[#107407]">1.93%</p>
              </div>
              <p className="text-xl font-medium">+1,232.92 Today</p>
            </div>
            <p className="text-lg text-[#4D4D4D]">Jul 26, 3:30:55 PM </p>
            <p className="text-lg text-[#4D4D4D] pb-6">
              UTC+5:30 · INDEXBOM · Disclaimer
            </p>
          </div>
          <div className="pt-6">
            <p className="font-bold text-2xl mb-6">Yestrday Day Rate</p>
            <div className="flex flex-row items-center space-x-10">
              <div>
                <p className="text-xl text-stone-700 font-semibold mb-6">
                  Last High
                </p>
                <span className="text-xl font-medium text-[#107407] bg-[#E8F4EB] px-5 py-3 rounded-3xl">
                  81,000.74
                </span>
              </div>

              <div>
                <p className="text-xl text-stone-700 font-semibold mb-6">
                  Last Low
                </p>
                <span className="text-xl font-medium text-[#DC2430] bg-[#FFBCC1] px-5 py-3 rounded-3xl">
                  81,000.74
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="bg-gradient-to-r from-[#FF4B00] to-[#CFC800] text-xl py-3 px-4 w-full text-center font-bold rounded-lg text-white focus:outline-none my-8"
      >
        Smart Contract Gaming Plateform
      </button>
      <div className="text-center">
        <button
          type="button"
          className="bg-white py-3 px-4 text-center text-xl font-bold rounded-xl text-black focus:outline-none w-1/3"
        >
          Time :- 9am to 11am
        </button>
      </div>

      {/* Bet Table and Current Bidding */}
      <div className="flex flex-row items-start justify-between space-x-6 my-8">
        <div className="w-3/5">
          {/* Table Header */}
          <div className="w-full rounded-lg flex flex-col sm:flex-row items-center justify-between text-black py-3 bg-gray-200 mb-2">
            <p className="w-full sm:w-[16%] pl-8 font-semibold text-center sm:text-left">
              #
            </p>
            <p className="w-full sm:w-[16%] text-center font-semibold">
              Profit
            </p>
            <p className="w-full sm:w-[16%] text-center font-semibold">
              Digits
            </p>
            <p className="w-full sm:w-[16%] text-center font-semibold">
              Minimum Bid
            </p>
            <p className="w-full sm:w-[16%] text-center font-semibold">
              Bid No
            </p>
            <p className="w-full sm:w-[20%] text-center font-semibold">
              Place Bet
            </p>
          </div>

          {/* Table Data */}
          <div className="w-full text-black">
            {data.map((item, index) => (
              <div key={index} className="flex flex-row items-center space-x-6">
                <div className="w-full flex flex-col sm:flex-row items-center justify-between py-3 bg-white rounded-lg my-3">
                  <p className="w-full sm:w-[25%] pl-8 text-center sm:text-left truncate">
                    {item.hash}
                  </p>
                  <p className="w-full sm:w-[25%] text-center">{item.value1}</p>
                  <p className="w-full sm:w-[25%] text-center">{item.value2}</p>
                  <p className="w-full sm:w-[25%] text-center">{item.value3}</p>
                  <p className="w-full sm:w-[25%] text-center">{item.value4}</p>
                </div>
                <button
                  type="button"
                  className="bg-[#F3FFF4] text-[#107407] text-xl py-2 px-2 w-[20%] text-center rounded-lg focus:outline-none"
                >
                  Bet
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Current Bidding */}
        <div className="w-2/5">
          <button
            type="button"
            className="bg-gradient-to-r from-[#FF4B00] to-[#CFC800] text-xl py-3 px-4 w-full text-center font-bold rounded-lg text-white focus:outline-none"
          >
            Current Bidding
          </button>

          <div className="w-full bg-white  rounded-lg overflow-hidden mt-5">
            {/* Table Header */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between text-black py-3 bg-gray-200">
              <p className="w-full sm:w-[25%] pl-8 font-semibold text-center sm:text-left">
                User Address
              </p>
              <p className="w-full sm:w-[25%] text-center font-semibold">
                Bid No
              </p>
              <p className="w-full sm:w-[25%] text-center font-semibold">
                Bid Amount
              </p>
              <p className="w-full sm:w-[25%] text-center font-semibold">
                Winning Amount
              </p>
            </div>

            {/* Table Data */}
            <div className="w-full text-black">
              {data2.map((item, index) => (
                <div
                  key={index}
                  className={`w-full flex flex-col sm:flex-row items-center justify-between py-[12.5px] ${
                    index % 2 !== 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <p className="w-full sm:w-[25%] pl-8 text-center sm:text-left truncate">
                    {item.code}
                  </p>
                  <p className="w-full sm:w-[25%] text-center">{item.value1}</p>
                  <p className="w-full sm:w-[25%] text-center">{item.value2}</p>
                  <p className="w-full sm:w-[25%] text-center">{item.value3}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Today Winner and Yesterday Winner */}
      <div className="flex flex-row items-center justify-between space-x-6 py-8">
        <div className="w-1/2">
          <button
            type="button"
            className="bg-gradient-to-r from-[#FF4B00] to-[#CFC800] text-xl py-3 px-4 w-full text-center font-bold rounded-lg text-white focus:outline-none mb-4"
          >
            Today winner
          </button>

          <div className="w-full bg-white  rounded-lg overflow-hidden mt-0">
            {/* Table Header */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between text-black py-4 bg-gray-200">
              <p className="w-full sm:w-[25%] pl-8 font-semibold text-center sm:text-left">
                User Address
              </p>
              <p className="w-full sm:w-[25%] text-center font-semibold">
                Bid No
              </p>
              <p className="w-full sm:w-[25%] text-center font-semibold">
                Bid Amount
              </p>
              <p className="w-full sm:w-[25%] text-center font-semibold">
                Winning Amount
              </p>
            </div>

            {/* Table Data */}
            <div className="w-full text-black">
              {data2.map((item, index) => (
                <div
                  key={index}
                  className={`w-full flex flex-col sm:flex-row items-center justify-between py-4 ${
                    index % 2 !== 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <p className="w-full sm:w-[25%] pl-8 text-center sm:text-left truncate">
                    {item.code}
                  </p>
                  <p className="w-full sm:w-[25%] text-center">{item.value1}</p>
                  <p className="w-full sm:w-[25%] text-center">{item.value2}</p>
                  <p className="w-full sm:w-[25%] text-center">{item.value3}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <button
            type="button"
            className="bg-gradient-to-r from-[#FF4B00] to-[#CFC800] text-xl py-3 px-4 w-full text-center font-bold rounded-lg text-white focus:outline-none mb-4"
          >
            Yesterday Winner
          </button>

          <div className="w-full bg-white  rounded-lg overflow-hidden mt-0">
            {/* Table Header */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between text-black py-4 bg-gray-200">
              <p className="w-full sm:w-[25%] pl-8 font-semibold text-center sm:text-left">
                User Address
              </p>
              <p className="w-full sm:w-[25%] text-center font-semibold">
                Bid No
              </p>
              <p className="w-full sm:w-[25%] text-center font-semibold">
                Bid Amount
              </p>
              <p className="w-full sm:w-[25%] text-center font-semibold">
                Winning Amount
              </p>
            </div>

            {/* Table Data */}
            <div className="w-full text-black">
              {data2.map((item, index) => (
                <div
                  key={index}
                  className={`w-full flex flex-col sm:flex-row items-center justify-between py-4 ${
                    index % 2 !== 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <p className="w-full sm:w-[25%] pl-8 text-center sm:text-left truncate">
                    {item.code}
                  </p>
                  <p className="w-full sm:w-[25%] text-center">{item.value1}</p>
                  <p className="w-full sm:w-[25%] text-center">{item.value2}</p>
                  <p className="w-full sm:w-[25%] text-center">{item.value3}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
