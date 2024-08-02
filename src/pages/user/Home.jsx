import { useEffect, useState } from "react";
import HeroImg from "../../assets/HomeHero.png";
import { SensexValue, TradingViewWidget, UserTable } from "../../components";
import { placeBid } from "../../utils/Axios";

const data2 = Array(7).fill({
  code: "1",
  value1: "2x",
  value2: "One",
  value3: "$1",
});

const Home = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [key, setKey] =useState(1);
  const [placeBidData, setPlaceBidData] = useState({
    minimumBid:"",
    bidNo:""
  })

  function formatDateTime() {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  
    const now = new Date();
    const month = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 || 12;
  
    return `${month} ${day} ${year}, ${hour12}:${minutes}:${seconds} ${ampm}`;
  }
  
          function isTimeBetween9And11AM() {
    // Get the current time in IST
    const currentIST = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    const dateIST = new Date(currentIST);
  
    // Get the current hours and minutes in IST
    const hours = dateIST.getHours();
    const minutes = dateIST.getMinutes();
  
    // Check if the time is between 9:00 AM and 11:00 AM
    if (hours >= 9 && hours < 11) {
      return true;
    } else if (hours === 11 && minutes === 0) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(()=>{
    const checkTime = () => {
      const isWithinTime = isTimeBetween9And11AM();
      setButtonDisabled(isWithinTime);
    };

    checkTime();
  },[])

  const handleChange = (event, keyNumber) => {
    setKey(keyNumber);
    const { name, value } = event.target;
    setPlaceBidData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handlePlaceBid=async()=>{
    if(!buttonDisabled){
      console.log("hfshdfg")
      return ;
    }
    const apiData = await placeBid(placeBidData);
    console.log(apiData);
  }

  console.log(placeBidData)

  return (
    <div className="px-24 bg-black min-h-screen">
      <div className="pt-8">
        <img src={HeroImg} alt="heroImg-luckystar" className="w-full" />
      </div>

      {/* Chart */}
      <div className="flex flex-row items-start justify-between space-x-6 bg-white rounded-lg px-4 pt-6 pb-12 mt-6">

        {/* Integrate chart here */}
        <div className="w-3/4 h-[500px]">
        <TradingViewWidget/>
        </div>
        <div className="w-1/4">
        <SensexValue/>
          <div >
           
            <p className="text-lg text-[#4D4D4D] -mt-8 pb-6">{formatDateTime()}</p>
          </div>
       
        </div>
      </div>
      <button
        type="button"
        className="bg-gradient-to-r from-[#FF4B00] to-[#CFC800] text-xl py-3 px-4 w-full text-center font-bold rounded-lg text-white focus:outline-none my-8"
      >
        Smart Contract Gaming Plateform
      </button>
      <div className="flex items-center justify-center">
  <div className="flex items-center justify-center space-x-6 bg-white w-1/3 rounded-xl py-1">
    <p className="py-3 px-4 text-center text-xl font-bold text-black">
      Time: 9AM to 11AM
    </p>
    <p className={`${buttonDisabled?"bg-green-50 text-green-800":"text-red-600 bg-red-50"} rounded-md py-1 px-4 text-2xl font-bold live-indicator`}>{buttonDisabled?"LIVE":"CLOSED"}</p>
  </div>
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
              <div className="flex flex-row items-center space-x-6">
                <div className="w-full flex flex-col sm:flex-row items-center justify-between py-[14px] bg-white rounded-lg my-3">
                  <p className="w-full sm:w-[25%] pl-8 text-center sm:text-left truncate">
                    1
                  </p>
                  <p className="w-full sm:w-[25%] bg-[#f1f1f1] border-[2px] border-[#e4e3e3] rounded text-gray-400 font-semibold text-center py-1">2x</p>
                  <p className="w-full sm:w-[25%] text-center">One</p>
                  <input className="w-full sm:w-[25%] text-center bg-[#f1f1f1] border-[2px] border-[#e4e3e3] focus:outline-[#a3a1a1] rounded-md font-medium py-1"
                          name="minimumBid"
                          value={key===1 ? placeBidData.minimumBid:""}
                          onChange={(e)=>handleChange(e,1)}
                  placeholder="$1"/>
                     <input className="w-full sm:w-[25%] text-center bg-[#f1f1f1] border-[2px] border-[#e4e3e3] focus:outline-[#a3a1a1] rounded-md font-medium ml-6 mr-4 py-1"
                        name="bidNo"
                        value={key===1 ? placeBidData.bidNo:""}
                        onChange={(e)=>handleChange(e,1)}
                  placeholder="*"/>
                </div>
                <button
                  type="button"
                  className={`font-semibold text-xl py-3 px-2 w-[20%] text-center rounded-lg focus:outline-none 
                    ${buttonDisabled?"bg-[#F3FFF4] text-[#107407] cursor-pointer":"bg-gray-300 text-gray-500 cursor-not-allowed "}`}
                    disabled={buttonDisabled}
                    onClick={handlePlaceBid}
                >
                  Bet
                </button>
              </div>

              <div className="flex flex-row items-center space-x-6">
                <div className="w-full flex flex-col sm:flex-row items-center justify-between py-[14px] bg-white rounded-lg my-3">
                  <p className="w-full sm:w-[25%] pl-8 text-center sm:text-left truncate">
                    2
                  </p>
                  <p className="w-full sm:w-[25%] bg-[#f1f1f1] border-[2px] border-[#e4e3e3] rounded text-gray-400 font-semibold text-center py-1">5x</p>
                  <p className="w-full sm:w-[25%] text-center">Two</p>
                  <input className="w-full sm:w-[25%] text-center bg-[#f1f1f1] border-[2px] border-[#e4e3e3] focus:outline-[#a3a1a1] rounded-md font-medium py-1"
                          name="minimumBid"
                          value={key===2 ? placeBidData.minimumBid:""}
                          onChange={(e)=>handleChange(e,2)}
                  placeholder="$1"/>
                     <input className="w-full sm:w-[25%] text-center bg-[#f1f1f1] border-[2px] border-[#e4e3e3] focus:outline-[#a3a1a1] rounded-md font-medium ml-6 mr-4 py-1"
                        name="bidNo"
                        value={key===2 ? placeBidData.bidNo:""}
                        onChange={(e)=>handleChange(e,2)}
                  placeholder="**"/>
                </div>
                <button
                  type="button"
                  className={`font-semibold text-xl py-3 px-2 w-[20%] text-center rounded-lg focus:outline-none 
                    ${buttonDisabled?"bg-[#F3FFF4] text-[#107407] cursor-pointer":"bg-gray-300 text-gray-500 cursor-not-allowed "}`}
                    disabled={buttonDisabled}
                >
                  Bet
                </button>
              </div>

              <div className="flex flex-row items-center space-x-6">
                <div className="w-full flex flex-col sm:flex-row items-center justify-between py-[14px] bg-white rounded-lg my-3">
                  <p className="w-full sm:w-[25%] pl-8 text-center sm:text-left truncate">
                  3
                  </p>
                  <p className="w-full sm:w-[25%] bg-[#f1f1f1] border-[2px] border-[#e4e3e3] rounded text-gray-400 font-semibold text-center py-1">10x</p>
                  <p className="w-full sm:w-[25%] text-center">Three</p>
                  <input className="w-full sm:w-[25%] text-center bg-[#f1f1f1] border-[2px] border-[#e4e3e3] focus:outline-[#a3a1a1] rounded-md font-medium py-1"
                          name="minimumBid"
                          value={key === 3 ? placeBidData.minimumBid:""}
                          onChange={(e)=>handleChange(e,3)}
                  placeholder="$1"/>
                     <input className="w-full sm:w-[25%] text-center bg-[#f1f1f1] border-[2px] border-[#e4e3e3] focus:outline-[#a3a1a1] rounded-md font-medium ml-6 mr-4 py-1"
                        name="bidNo"
                        value={key === 3 ? placeBidData.bidNo:""}
                        onChange={(e)=>handleChange(e,3)}
                  placeholder="***"/>
                </div>
                <button
                  type="button"
                  className={`font-semibold text-xl py-3 px-2 w-[20%] text-center rounded-lg focus:outline-none 
                    ${buttonDisabled?"bg-[#F3FFF4] text-[#107407] cursor-pointer":"bg-gray-300 text-gray-500 cursor-not-allowed "}`}
                    disabled={buttonDisabled}
                >
                  Bet
                </button>
              </div>

              <div className="flex flex-row items-center space-x-6">
                <div className="w-full flex flex-col sm:flex-row items-center justify-between py-[14px] bg-white rounded-lg my-3">
                  <p className="w-full sm:w-[25%] pl-8 text-center sm:text-left truncate">
                    4
                  </p>
                  <p className="w-full sm:w-[25%] bg-[#f1f1f1] border-[2px] border-[#e4e3e3] rounded text-gray-400 font-semibold text-center py-1">20x</p>
                  <p className="w-full sm:w-[25%] text-center">Four</p>
                  <input className="w-full sm:w-[25%] text-center bg-[#f1f1f1] border-[2px] border-[#e4e3e3] focus:outline-[#a3a1a1] rounded-md font-medium py-1"
                          name="minimumBid"
                          value={key === 4 ? placeBidData.minimumBid:""}
                          onChange={(e)=>handleChange(e,4)}
                  placeholder="$1"/>
                     <input className="w-full sm:w-[25%] text-center bg-[#f1f1f1] border-[2px] border-[#e4e3e3] focus:outline-[#a3a1a1] rounded-md font-medium ml-6 mr-4 py-1"
                        name="bidNo"
                        value={key === 4 ? placeBidData.bidNo:""}
                        onChange={(e)=>handleChange(e,4)}
                  placeholder="****"/>
                </div>
                <button
                  type="button"
                  className={`font-semibold text-xl py-3 px-2 w-[20%] text-center rounded-lg focus:outline-none 
                    ${buttonDisabled?"bg-[#F3FFF4] text-[#107407] cursor-pointer":"bg-gray-300 text-gray-500 cursor-not-allowed "}`}
                    disabled={buttonDisabled}
                >
                  Bet
                </button>
              </div>

              <div className="flex flex-row items-center space-x-6">  
                <div className="w-full flex flex-col sm:flex-row items-center justify-between py-[14px] bg-white rounded-lg my-3">
                  <p className="w-full sm:w-[25%] pl-8 text-center sm:text-left truncate">
                    5
                  </p>
                  <p className="w-full sm:w-[25%] bg-[#f1f1f1] border-[2px] border-[#e4e3e3] rounded text-gray-400 font-semibold text-center py-1">50x</p>
                  <p className="w-full sm:w-[25%] text-center">Five</p>
                  <input className="w-full sm:w-[25%] text-center bg-[#f1f1f1] border-[2px] border-[#e4e3e3] focus:outline-[#a3a1a1] rounded-md font-medium py-1"
                          name="minimumBid"
                          value={key===5 ? placeBidData.minimumBid:""}
                          onChange={(e)=>handleChange(e,5)}
                  placeholder="$1"/>
                     <input className="w-full sm:w-[25%] text-center bg-[#f1f1f1] border-[2px] border-[#e4e3e3] focus:outline-[#a3a1a1] rounded-md font-medium ml-6 mr-4 py-1"
                        name="bidNo"
                        value={key===5 ? placeBidData.bidNo:""}
                        onChange={(e)=>handleChange(e,5)}
                  placeholder="*****"/>
                </div>
                <button
                  type="button"
                  className={`font-semibold text-xl py-3 px-2 w-[20%] text-center rounded-lg focus:outline-none 
                    ${buttonDisabled?"bg-[#F3FFF4] text-[#107407] cursor-pointer":"bg-gray-300 text-gray-500 cursor-not-allowed "}`}
                    disabled={buttonDisabled}
                >
                  Bet
                </button>
              </div>
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
                Bidding Amount
              </p>
              <p className="w-full sm:w-[25%] text-center font-semibold">
                Bidding No.
              </p>
              <p className="w-full sm:w-[25%] text-center font-semibold">
                Digit
              </p>
            </div>

            {/* Table Data */}
            <div className="w-full text-black">
              {data2.map((item, index) => (
                <div
                  key={index}
                  className={`w-full flex flex-col sm:flex-row items-center justify-between py-[13.5px] ${
                    index % 2 !== 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <p className="w-full sm:w-[25%] pl-8 text-center sm:text-left truncate">
                    {item.code}
                  </p>
                  <p className="w-full sm:w-[25%] text-center">{item.value3}</p>
                  <p className="w-full sm:w-[25%] text-center">{item.value3}</p>
                  <p className="w-full sm:w-[25%] text-center">{item.value3}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Today Winner and Yesterday Winner */}
      <div className=" py-8">
        <div className="w-full">
          <button
            type="button"
            className="bg-gradient-to-r from-[#FF4B00] to-[#CFC800] text-xl py-3 px-4 w-full text-center font-bold rounded-lg text-white focus:outline-none"
          >
            Yesterday Winner
          </button>
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
