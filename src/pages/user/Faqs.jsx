import { useEffect } from "react";
import { useState } from "react";
import { getFAQsList } from "../../utils/Axios";

const Faqs = () => {
  const [faqList, setFaqList] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      const apiData = await getFAQsList();
      setFaqList(apiData?.data);
    }
    fetchData();
  },[])

  return (
    <div className="bgimage px-6 py-12 bg-black min-h-screen text-white">
      <div className="relative w-full max-w-3xl mx-auto  px-6 pt-10 pb-8 shadow-lg rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold leading-tight text-white">
            FAQ
          </h2>
          <p className="mt-3 text-lg text-gray-400">
            Frequently asked questions
          </p>
        </div>
        <div className="space-y-6">
        {faqList.map((faq) => (
            <div key={faq._id}>
              <details className="group bg-gradient-to-r from-[#FF4B00] to-[#CFC800] rounded-lg">
                <summary className="flex cursor-pointer items-center justify-between p-5 text-lg font-semibold text-white group-open:bg-gradient-to-r from-[#FF4B00] to-[#CFC800] rounded-t-lg">
                  <span>{faq.question}</span>
                  <span className="transition-transform group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="p-5 text-white bg-[#1B1B1B] rounded-b-lg">
                  {faq.answer}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
