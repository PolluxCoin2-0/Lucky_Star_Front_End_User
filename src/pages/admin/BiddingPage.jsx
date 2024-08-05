import Calender from "../../components/Calender";
import Search from "../../components/Search";

const BiddingPage = () => {
  return (
    <div className="px-24 bg-black min-h-screen">
      <div>
        <Search />
      </div>

      <div>
        <p className="text-white text-xl font-semibold">Start Bidding</p>
      </div>

      <div className="flex flex-row justify-between items-center  bg-white rounded-xl p-10 mt-5 ">
        <div className="flex flex-row items-center space-x-10">
          <div>
            <p className="text-lg font-semibold text-slate-500">Start Time</p>
            <div className="mt-4">
            
              <Calender />
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold text-slate-500">End Time</p>
            <div className="mt-4">
            
              <Calender />
            </div>
          </div>
        </div>
        <div>
          <button className="w-96 py-3 font-semibold mt-12 bg-black text-white rounded-md hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Start Bidding
          </button>
        </div>
      </div>

      <div>
        <button className="group bg-gradient-to-r from-[#FF4B00] to-[#CFC800] rounded-lg w-full mt-16 mb-8 py-4 text-xl font-bold text-white ">
          End Bidding
        </button>
      </div>

      <div className="mt-5 pb-10">
        <p className="text-white text-xl font-semibold">Submit Winning No</p>
      </div>
      
      <div  className=" items-center  bg-white rounded-xl p-10 mt-5 ">
        <div className="flex flex-row items-center space-x-10">
            <div>
                <p className="text-lg font-semibold text-slate-500">Winning No</p>
                <div className="mt-4">
              <input
                type="number"
                id="exampleInput"
                className="w-96 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
                placeholder=""
              />
            </div>
            </div>

            <div>
            <button className="w-96 py-3 font-semibold mt-10 bg-black text-white rounded-md hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Start Bidding
          </button>
            </div>
        </div>
      </div>

    </div>
  );
};

export default BiddingPage;
