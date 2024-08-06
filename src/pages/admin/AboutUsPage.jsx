import { useState } from "react";


const AboutUsPage = () => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
      setText(e.target.value);
    };
  
  return (
    <div className="pb-12">
      <p className="text-xl font-semibold text-white mt-5 mb-5">About Us</p>
      <div className="bg-white rounded-xl p-7" >
      <p className="text-lg font-semibold text-black mb-4">Lucky Star</p>
      <div className="">
      <textarea
      id="message"
      value={text}
      onChange={handleChange}
      rows="24"
      className="w-full p-2 bg-[#F3F3F3] resize-none rounded-lg focus:outline-none "
      placeholder="Type your message here..."
    />
      </div>
      </div>
    </div>
  )
}

export default AboutUsPage

