import { useEffect, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
// import { getSearchData } from "../utils/axios/SearchApi";

const Search = ({ setDataFromSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       if(query.length>0){
//         try {
//           const searchData = await getSearchData(query);
//           setDataFromSearch(searchData);
//         } catch (error) {
//           console.log(error);
//         }
//       }
//     };
//     fetchData();
//   }, [query]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative mx-auto text-gray-600 py-6 md:py-8 lg:py-8 xl:py-8 2xl:py-8">
      <div className="relative flex items-center">
        <svg
          className="absolute left-3 h-4 w-4 fill-light-gray"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56.966 56.966"
        >
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 
            s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 
            c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  
            s-17-7.626-17-17S14.61,6,23.984,6z"
          />
        </svg>
        <input
          className="bg-white h-12 w-full pl-10 pr-12 rounded-xl text-sm focus:outline-none placeholder:text-light-gray "
          type="search"
          name="search"
          placeholder="Search By Token/ Account/ Contract/ Pox Hash/ Block"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
          <div className=" flex flex-row relative  text-left">
            <div className="hidden md:block bg-light-mid-gray w-6 h-6 rounded-md pl-2 mt-1 text-white">
              /
            </div>
            <div className="hidden md:block text-2xl text-light-mid-gray pl-4">
              |
            </div>
            <div>
              <button
                type="button"
                className="inline-flex justify-center items-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-light-gray hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                onClick={toggleDropdown}
              >
                All{" "}
                <HiOutlineChevronDown
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </button>
            </div>
            {isOpen && (
              <div
                className="origin-top-right absolute right-0 top-10 mt-2 w-56 rounded-md shadow-lg
               bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Daily
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Weekly
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Monthly
                  </a>
                </div>
              </div>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default Search;
