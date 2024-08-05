import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const ManageFAQPage = () => {

    // Initialize state for input value
  const [inputValue, setInputValue] = useState('');

  // Handler for input change
  const handleChange = (event) => {
    setInputValue(event.target.value); // Update state with input value
  };

  return (
    <div>
<div className="bg-white rounded-xl shadow-xl mt-10 p-5 pb-6">
      <div className="flex flex-row  justify-between ">
      <p className="text-black text-lg font-bold ">FAQ's</p>
      <p><RxCross1 size={24} /></p>
      </div>

      <div className="mt-3">
      <p className="text-lg font-semibold">Question:</p>
      <input
      type="text"
      value={inputValue}
      onChange={handleChange} // Attach change handler
      placeholder="What is Lucky Star?"
      className="mt-2 bg-[#F3F3F3] w-full outline-none rounded-md py-3 p-2"
    />
      </div>

      <div className="mt-3">
      <p className="text-lg font-semibold">Answer:</p>
      <input
      type="text"
      value={inputValue}
      onChange={handleChange} // Attach change handler
      placeholder=" Cryptocurrency lending platforms are like intermediaries that connect lenders to borrowers. Lenders deposit their crypto into high-interest lending "
      className="mt-2 bg-[#F3F3F3] w-full outline-none rounded-md py-3 p-2"
    />
      </div>
    </div>

    <div className="flex justify-center">
    <button className="px-14 py-3 font-semibold mt-12 bg-white text-black rounded-lg hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
      Add
    </button>
  </div>
    

    </div>
  )
}

export default ManageFAQPage
