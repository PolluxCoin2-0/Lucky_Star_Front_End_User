import { useEffect, useState } from "react";
import HeroImg from "../../assets/HomeHero.png";
import { SensexValue, UserTable } from "../../components";
import { getApproval, getBiddingList, getWinnersByIndex, getWinningCount, placeBid, sensexChartData } from "../../utils/Axios";
import { FormatNumberWithCommas } from "../../utils/FormatNumberWithCommas";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Home = () => {
  const walletAddress = useSelector((state) => state.wallet.address);
  const token = useSelector((state)=>state.wallet.token)
  const [chartData, setChartData] = useState([]);
  const [metaData, setMetaData] = useState({});
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [key, setKey] = useState(1);
  const [placeBidData, setPlaceBidData] = useState({
    minimumBid: "",
    bidNo: "",
  });
  const [winnerList, setWinnerList] = useState([]);
  const [biddingList, setBiddingList] = useState([]);

  function formatDateTime() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const now = new Date();
    const month = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const hour12 = hours % 12 || 12;

    return `${month} ${day} ${year}, ${hour12}:${minutes}:${seconds} ${ampm}`;
  }

  function isTimeBetween9And11AM() {
    // Get the current time in IST
    const currentIST = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    });
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

  useEffect(() => {
    const checkTime = () => {
      const isWithinTime = isTimeBetween9And11AM();
      setButtonDisabled(isWithinTime);
    };

    checkTime();

    const fetchWinners = async () => {
      try {
        // Get the total count of winners
        const countData = await getWinningCount();
        const winnerCount = countData?.count; // Adjust this based on your actual API response structure

        // Fetch winner details for each index and store them in an array
        const winners = [];
        for (let i = 0; i < winnerCount; i++) {
          const winnerData = await getWinnersByIndex(i);
          winners.push(winnerData);
        }

        // Update the state with the list of winners
        setWinnerList(winners);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWinners();

    const fetchBiddingList = async () => {
      try {
        const biddingListResponse = await getBiddingList();
        const sortedBiddingList = biddingListResponse?.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setBiddingList(sortedBiddingList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBiddingList();
  }, []);

  const handleChange = (event, keyNumber) => {
    const { name, value } = event.target;
  
    setKey(keyNumber);
  
    if (name === "bidNo" && value.length > keyNumber) {
      toast.error(`Bid number must be exactly ${keyNumber} characters long.`);
      return;
    }
  
    if (name === "minimumBid" && parseFloat(value) < 1) {
      toast.error("Minimum bidding amount is $1.");
      return;
    }
  
    setPlaceBidData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handlePlaceBid = async (digit) => {
    if(!placeBidData?.bidNo || !placeBidData?.minimumBid){
      toast.error("Enter both value");
      return;
    }

    if (!buttonDisabled) {
      return ;
    }

    const transaction = await getApproval(
      walletAddress,
      placeBidData?.minimumBid
    );

    const signedTransaction1 = await window.pox.signdata(
      transaction?.data?.transaction
    );

     JSON.stringify(
      await window.pox.broadcast(JSON.parse(signedTransaction1[1]))
    );
    const apiData = await placeBid(placeBidData, walletAddress, token);

    const signedTransaction2 = await window.pox.signdata(
      apiData?.data?.transaction
    );

     JSON.stringify(
      await window.pox.broadcast(JSON.parse(signedTransaction2[1]))
    );

  };

  function getUnixTimestamps() {
    const today = new Date();
    const yesterday = new Date(today);

    // Set today time to 05:00:00 PM
    today.setHours(17, 0, 0, 0);

    // Set yesterday time to 08:00:00 AM
    yesterday.setDate(today.getDate() - 2);
    yesterday.setHours(8, 0, 0, 0);

    const todayTimestamp = Math.floor(today.getTime() / 1000);
    const yesterdayTimestamp = Math.floor(yesterday.getTime() / 1000);

    return {
      today: todayTimestamp,
      yesterday: yesterdayTimestamp,
    };
  }

  useEffect(() => {
    const dataFromChartApi = async () => {
      const dateData = getUnixTimestamps();
      const apiResponse = await sensexChartData(
        dateData?.today,
        dateData?.yesterday
      );
      const result = apiResponse.data?.chart.result[0];
      setMetaData(apiResponse.data.chart.result[0].meta);
      const timestamps = result.timestamp;
      const indicators = result.indicators.quote[0];

      // Create the array of objects
      const data = timestamps.map((timestamp, index) => ({
        time: new Date(timestamp * 1000).toLocaleString(), // Convert timestamp to readable date
        open: indicators.open[index],
        close: indicators.close[index],
        low: indicators.low[index],
        high: indicators.high[index],
        volume: indicators.volume[index],
      }));

      setChartData(data);
    };

    dataFromChartApi();

    // Set up interval to fetch data every minute (30000 ms)
    const intervalId = setInterval(dataFromChartApi, 30000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="px-4 md:px-4 lg:px-4 xl:px-4 2xl:px-24 bgimage bg-black min-h-screen">
      <div className="pt-8">
        <img src={HeroImg} alt="heroImg-luckystar" className="w-full" />
      </div>

      {/* Chart */}
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-start justify-between bg-white rounded-lg px-0 md:px-4 lg:px-4 xl:px-4 2xl:px-4 pt-6 
      pb-4 md:pb-4 lg:pb-4 xl:pb-12 2xl:pb-12 mt-6">
        {/* Integrate chart here */}
        <div className="w-full md:w-4/5 lg:w-4/5 xl:w-4/5 2xl:w-4/5">
          <SensexValue value={chartData} />
        </div>

        <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/4 p-6">
          <div className="border-b-2 border-gray-300 pb-4 mb-4">
            <p className="font-bold text-xl md:text-2xl lg:text-2xl 2xl:text-5xl mb-2 bg-gradient-to-r from-[#FF4B00] to-[#CFC800] bg-clip-text text-transparent">
              ₹{" "}
              {metaData?.regularMarketPrice &&
                FormatNumberWithCommas(metaData?.regularMarketPrice)} 
            </p>
            <p className="text-sm text-gray-400 font-medium mb-1">Source: Yahoo Finance</p>

            <p className="text-lg text-gray-500 mb-2 whitespace-nowrap">{formatDateTime()}</p>
            <div className="space-y-2">
              <p className="text-lg font-medium text-gray-700 whitespace-nowrap">
                Today's High:{" "}
                <span className="text-green-600">
                  ₹
                  {metaData?.regularMarketDayHigh &&
                    FormatNumberWithCommas(metaData?.regularMarketDayHigh)}
                </span>
              </p>
              <p className="text-lg font-medium text-gray-700 whitespace-nowrap">
                Today's Low:{" "}
                <span className="text-red-600">
                  ₹
                  {metaData?.regularMarketDayLow &&
                    FormatNumberWithCommas(metaData?.regularMarketDayLow)}
                </span>
              </p>
              <p className="text-lg font-medium text-gray-700">
                Today's Volume:{" "}
                <span className="text-blue-600">
                  {metaData?.regularMarketVolume &&
                    FormatNumberWithCommas(metaData?.regularMarketVolume)}
                </span>
              </p>
              <p className="text-lg font-medium text-gray-700">
                Day's Range:{" "}
                <span className="text-yellow-600">
                  ₹
                  {metaData?.regularMarketDayHigh &&
                    FormatNumberWithCommas(metaData?.regularMarketDayHigh)}{" "}
                  - ₹
                  {metaData?.regularMarketDayLow &&
                    FormatNumberWithCommas(metaData?.regularMarketDayLow)}
                </span>
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col items-start space-y-8">
              <div className="text-center">
                <p className="text-xl text-gray-700 font-semibold mb-2 pb-2">
                  Yesterday's Close:
                </p>
                <span className="text-xl font-medium text-gray-900 bg-gray-100 px-12 py-3 rounded-lg">
                  ₹
                  {metaData?.chartPreviousClose &&
                    FormatNumberWithCommas(metaData?.chartPreviousClose)}
                </span>
              </div>
              <div className="text-center">
                <p className="text-xl text-gray-700 font-semibold mb-2 pb-2 whitespace-nowrap">
                  Day Before Yesterday:
                </p>
                <span className="text-xl font-medium text-gray-900 bg-gray-100 px-12 py-3 rounded-lg">
                  ₹
                  {metaData?.previousClose &&
                    FormatNumberWithCommas(metaData?.previousClose)}
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

      <div className="flex flex-wrap items-center justify-center p-4">
  <div className="flex flex-wrap items-center justify-center space-x-6 bg-white w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-xl py-1">
    <p className="py-3 px-4 text-center text-xl font-bold text-black w-full md:w-auto">
      Time: 9AM to 11AM
    </p>
    <p
      className={`${
        buttonDisabled
          ? "bg-green-50 text-green-800"
          : "text-red-600 bg-red-50"
      } rounded-md py-1 px-4 text-2xl font-bold live-indicator w-full md:w-auto text-center`}
    >
      {buttonDisabled ? "LIVE" : "CLOSED"}
    </p>
  </div>
</div>


      {/* Bet Table and Current Bidding */}
      <div className="overflow-x-auto flex flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row items-start justify-between 
      space-x-0 md:space-x-0 lg:space-x-0 xl:space-x-6 2xl:space-x-6
      space-y-2 md:space-y-2 lg:space-y-2 xl:space-y-0 2xl:space-y-0
       my-8">
        <div className="min-w-[800px] md:min-w-full lg:min-w-full xl:min-w-0 2xl:min-w-0 md:w-full 
        lg:w-3/5 xl:w-3/5 2xl:w-3/5">
          {/* Table Header */}
          <div className="w-full rounded-lg flex flex-row items-center justify-between text-black py-3 bg-gray-200 mb-2">
            <p className="w-full sm:w-[16%] pl-8 font-semibold text-center sm:text-left">
              #
            </p>
            <p className="w-full sm:w-[16%] text-center font-semibold">
              Profit
            </p>
            <p className="w-full sm:w-[16%] text-center font-semibold">
              Digits
            </p>
            <p className="w-full sm:w-[16%] text-center font-semibold whitespace-nowrap">
              Minimum Bid
            </p>
            <p className="w-full sm:w-[16%] text-center font-semibold whitespace-nowrap">
              Bid No
            </p>
            <p className="w-full sm:w-[20%] text-center font-semibold whitespace-nowrap">
              Place Bet
            </p>
          </div>

          {/* Table Data */}
          <div className="w-full text-black">
            <div className="flex flex-row items-center space-x-6">
              <div className="w-full flex flex-row items-center justify-between py-[14px] bg-white rounded-lg my-3">
                <p className="w-full sm:w-[25%] pl-8 text-center sm:text-left truncate">
                  1
                </p>
                <p className="w-full sm:w-[25%] bg-[#f1f1f1] border-[2px] border-[#e4e3e3] rounded text-gray-400 font-semibold text-center py-1">
                  2x
                </p>
                <p className="w-full sm:w-[25%] text-center">One</p>
                <input
                type="number"
                  className="w-full sm:w-[25%] text-center bg-[#f1f1f1] border-[2px] border-[#e4e3e3] focus:outline-[#a3a1a1] rounded-md font-medium py-1"
                  name="minimumBid"
                  value={key === 1 ? placeBidData.minimumBid : ""}
                  onChange={(e) => handleChange(e, 1)}
                  placeholder="$1"
                />
                <input
                type="number"
                  className="w-full sm:w-[25%] text-center bg-[#f1f1f1] border-[2px] border-[#e4e3e3] focus:outline-[#a3a1a1] rounded-md font-medium ml-6 mr-4 py-1"
                  name="bidNo"
                  value={key === 1 ? placeBidData.bidNo : ""}
                  onChange={(e) => handleChange(e, 1)}
                  placeholder="*"
                />
              </div>
              <button
                type="button"
                className={`font-semibold text-xl py-3 px-2 w-[20%] text-center rounded-lg focus:outline-none 
                    ${
                      buttonDisabled
                        ? "bg-[#F3FFF4] text-[#107407] cursor-pointer"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed "
                    }`}
                disabled={buttonDisabled}
                onClick={() => handlePlaceBid(1)}
              >
                Bet
              </button>
            </div>

            <div className="flex flex-row items-center space-x-6">
              <div className="w-full flex flex-row items-center justify-between py-[14px] bg-white rounded-lg my-3">
                <p className="w-full sm:w-[25%] pl-8 text-center sm:text-left truncate">
                  2
                </p>
                <p className="w-full sm:w-[25%] bg-[#f1f1f1] border-[2px] border-[#e4e3e3] rounded text-gray-400 font-semibold text-center py-1">
                  5x
                </p>
                <p className="w-full sm:w-[25%] text-center">Two</p>
                <input
                type="number"
                  className="w-full sm:w-[25%] text-center bg-[#f1f1f1] border-[2px] border-[#e4e3e3] focus:outline-[#a3a1a1] rounded-md font-medium py-1"
                  name="minimumBid"
                  value={key === 2 ? placeBidData.minimumBid : ""}
                  onChange={(e) => handleChange(e, 2)}
                  placeholder="$1"
                />
                <input
                type="number"
                  className="w-full sm:w-[25%] text-center bg-[#f1f1f1] border-[2px] border-[#e4e3e3] focus:outline-[#a3a1a1] rounded-md font-medium ml-6 mr-4 py-1"
                  name="bidNo"
                  value={key === 2 ? placeBidData.bidNo : ""}
                  onChange={(e) => handleChange(e, 2)}
                  placeholder="**"
                />
              </div>
              <button
                type="button"
                className={`font-semibold text-xl py-3 px-2 w-[20%] text-center rounded-lg focus:outline-none 
                    ${
                      buttonDisabled
                        ? "bg-[#F3FFF4] text-[#107407] cursor-pointer"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed "
                    }`}
                disabled={buttonDisabled}
                onClick={() => handlePlaceBid(2)}
              >
                Bet
              </button>
            </div>

            <div className="flex flex-row items-center space-x-6">
              <div className="w-full flex flex-row items-center justify-between py-[14px] bg-white rounded-lg my-3">
                <p className="w-full sm:w-[25%] pl-8 text-center sm:text-left truncate">
                  3
                </p>
                <p className="w-full sm:w-[25%] bg-[#f1f1f1] border-[2px] border-[#e4e3e3] rounded text-gray-400 font-semibold text-center py-1">
                  10x
                </p>
                <p className="w-full sm:w-[25%] text-center">Three</p>
                <input
                type="number"
                  className="w-full sm:w-[25%] text-center bg-[#f1f1f1] border-[2px] border-[#e4e3e3] focus:outline-[#a3a1a1] rounded-md font-medium py-1"
                  name="minimumBid"
                  value={key === 3 ? placeBidData.minimumBid : ""}
                  onChange={(e) => handleChange(e, 3)}
                  placeholder="$1"
                />
                <input
                type="number"
                  className="w-full sm:w-[25%] text-center bg-[#f1f1f1] border-[2px] border-[#e4e3e3] focus:outline-[#a3a1a1] rounded-md font-medium ml-6 mr-4 py-1"
                  name="bidNo"
                  value={key === 3 ? placeBidData.bidNo : ""}
                  onChange={(e) => handleChange(e, 3)}
                  placeholder="***"
                />
              </div>
              <button
                type="button"
                className={`font-semibold text-xl py-3 px-2 w-[20%] text-center rounded-lg focus:outline-none 
                    ${
                      buttonDisabled
                        ? "bg-[#F3FFF4] text-[#107407] cursor-pointer"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed "
                    }`}
                disabled={buttonDisabled}
                onClick={() => handlePlaceBid(3)}
              >
                Bet
              </button>
            </div>

            <div className="flex flex-row items-center space-x-6">
              <div className="w-full flex flex-row items-center justify-between py-[14px] bg-white rounded-lg my-3">
                <p className="w-full sm:w-[25%] pl-8 text-center sm:text-left truncate">
                  4
                </p>
                <p className="w-full sm:w-[25%] bg-[#f1f1f1] border-[2px] border-[#e4e3e3] rounded text-gray-400 font-semibold text-center py-1">
                  20x
                </p>
                <p className="w-full sm:w-[25%] text-center">Four</p>
                <input
                type="number"
                  className="w-full sm:w-[25%] text-center bg-[#f1f1f1] border-[2px] border-[#e4e3e3] focus:outline-[#a3a1a1] rounded-md font-medium py-1"
                  name="minimumBid"
                  value={key === 4 ? placeBidData.minimumBid : ""}
                  onChange={(e) => handleChange(e, 4)}
                  placeholder="$1"
                />
                <input
                type="number"
                  className="w-full sm:w-[25%] text-center bg-[#f1f1f1] border-[2px] border-[#e4e3e3] focus:outline-[#a3a1a1] rounded-md font-medium ml-6 mr-4 py-1"
                  name="bidNo"
                  value={key === 4 ? placeBidData.bidNo : ""}
                  onChange={(e) => handleChange(e, 4)}
                  placeholder="****"
                />
              </div>
              <button
                type="button"
                className={`font-semibold text-xl py-3 px-2 w-[20%] text-center rounded-lg focus:outline-none 
                    ${
                      buttonDisabled
                        ? "bg-[#F3FFF4] text-[#107407] cursor-pointer"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed "
                    }`}
                disabled={buttonDisabled}
                onClick={() => handlePlaceBid(4)}
              >
                Bet
              </button>
            </div>

            <div className="flex flex-row items-center space-x-6">
              <div className="w-full flex flex-row items-center justify-between py-[14px] bg-white rounded-lg my-3">
                <p className="w-full sm:w-[25%] pl-8 text-center sm:text-left truncate">
                  5
                </p>
                <p className="w-full sm:w-[25%] bg-[#f1f1f1] border-[2px] border-[#e4e3e3] rounded text-gray-400 font-semibold text-center py-1">
                  50x
                </p>
                <p className="w-full sm:w-[25%] text-center">Five</p>
                <input
                type="number"
                  className="w-full sm:w-[25%] text-center bg-[#f1f1f1] border-[2px] border-[#e4e3e3] focus:outline-[#a3a1a1] rounded-md font-medium py-1"
                  name="minimumBid"
                  value={key === 5 ? placeBidData.minimumBid : ""}
                  onChange={(e) => handleChange(e, 5)}
                  placeholder="$1"
                />
                <input
                type="number"
                  className="w-full sm:w-[25%] text-center bg-[#f1f1f1] border-[2px] border-[#e4e3e3] focus:outline-[#a3a1a1] rounded-md font-medium ml-6 mr-4 py-1"
                  name="bidNo"
                  value={key === 5 ? placeBidData.bidNo : ""}
                  onChange={(e) => handleChange(e, 5)}
                  placeholder="*****"
                />
              </div>
              <button
                type="button"
                className={`font-semibold text-xl py-3 px-2 w-[20%] text-center rounded-lg focus:outline-none 
                    ${
                      buttonDisabled
                        ? "bg-[#F3FFF4] text-[#107407] cursor-pointer"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed "
                    }`}
                disabled={buttonDisabled}
                onClick={() => handlePlaceBid(5)}
              >
                Bet
              </button>
            </div>
          </div>
        </div>

        {/* Current Bidding */}
        <div className="min-w-[800px] md:min-w-full lg:min-w-full xl:min-w-0 2xl:min-w-0 md:w-full lg:w-2/5 xl:w-2/5 2xl:w-2/5">
          <button
            type="button"
            className="bg-gradient-to-r from-[#FF4B00] to-[#CFC800] text-xl py-3 px-4 w-full text-center font-bold rounded-lg text-white focus:outline-none"
          >
            Current Bidding
          </button>

          <div className="w-full bg-white  rounded-lg overflow-hidden mt-5">
            {/* Table Header */}
            <div className="w-full flex flex-row items-center justify-between text-black py-3 bg-gray-200">
              <p className="w-full sm:w-[35%] pl-4 font-semibold text-center sm:text-left whitespace-nowrap">
                User Address
              </p>
              <p className="w-full sm:w-[25%] text-center font-semibold whitespace-nowrap">
                Bidding Amount
              </p>
              <p className="w-full sm:w-[25%] text-center font-semibold whitespace-nowrap">
                Bidding No.
              </p>
              <p className="w-full sm:w-[15%] text-center font-semibold">
                Digit
              </p>
            </div>

            {/* Table Data */}
            <div className="w-full text-black">
              {biddingList && biddingList.map((item, index) => (
                <div
                  key={index}
                  className={`w-full flex flex-col sm:flex-row items-center justify-between py-[13.5px] ${
                    index % 2 !== 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <p className="w-full sm:w-[25%] pl-8 text-center sm:text-left truncate">
                    {item.walletAddress && item.walletAddress}
                  </p>
                  <p className="w-full sm:w-[25%] text-center">{item.bidAmount && item.bidAmount}</p>
                  <p className="w-full sm:w-[25%] text-center">{item.bidNumber && item.bidNumber}</p>
                  <p className="w-full sm:w-[25%] text-center">{item.bidDigit && item.bidDigit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Yesterday Winner */}
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
