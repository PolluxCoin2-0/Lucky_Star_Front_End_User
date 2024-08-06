import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const ManageFAQPage = () => {
  // Initialize state for FAQs
  const [faqs, setFaqs] = useState([{ question: '', answer: '' }]);

  // Handler for input changes
  const handleInputChange = (index, field, value) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  // Handler for adding new FAQ form
  const handleAddFaqForm = () => {
    setFaqs([...faqs, { question: '', answer: '' }]);
  };

  // Handler for deleting an FAQ
  const handleDeleteFaq = (index) => {
    const newFaqs = faqs.filter((_, i) => i !== index);
    setFaqs(newFaqs);
  };

  return (
    <div>

      <p className="text-xl font-semibold text-white mt-7">Manage FAQ'S</p>
      {/* Render FAQ Input Forms */}
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-xl shadow-xl mt-5 p-5 pb-8">

          <div className="flex flex-row justify-between">
            <p className="text-black text-lg font-bold">FAQ {index + 1}</p>
            <button onClick={() => handleDeleteFaq(index)}>
              <RxCross1 size={24} />
            </button>
          </div>
          <div className="mt-3">
            <p className="text-lg font-semibold">Question:</p>
            <input
              type="text"
              value={faq.question}
              onChange={(e) => handleInputChange(index, 'question', e.target.value)}
              placeholder="What is Lucky Star?"
              className="mt-2 bg-[#F3F3F3] w-full outline-none rounded-md py-3 p-2"
            />
          </div>
          <div className="mt-3">
            <p className="text-lg font-semibold">Answer:</p>
            <input
              type="text"
              value={faq.answer}
              onChange={(e) => handleInputChange(index, 'answer', e.target.value)}
              placeholder="Cryptocurrency lending platforms are like intermediaries that connect lenders to borrowers. Lenders deposit their crypto into high-interest lending"
              className="mt-2 bg-[#F3F3F3] w-full outline-none rounded-md py-3 p-2"
            />
          </div>
        </div>
      ))}
      <div className="flex justify-center">
        <button
          className="px-14 py-3 font-semibold mt-12 bg-white text-black rounded-lg hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={handleAddFaqForm}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ManageFAQPage;
