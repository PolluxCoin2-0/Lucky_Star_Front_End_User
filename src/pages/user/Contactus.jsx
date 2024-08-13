import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { postContactForm } from '../../utils/Axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const ContactUs = () => {
  const walletAddress = useSelector((state) => state.wallet.address);
  const token = useSelector((state)=>state.wallet.token);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '',
    subject: '',
    message: ''
  });

  const handleChange = (value, country) => {
    setFormData({
      ...formData,
      phone: value,
      countryCode: country?.dialCode || ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
  await postContactForm(walletAddress, formData, token)
  toast.success("Query sent successfully");
    // Resetting form data by setting it back to the initial state
    setFormData({
      name: '',
      email: '',
      phone: '',
      countryCode: '',
      subject: '',
      message: ''
    });
  };


  return (
    <section className="py-24 bgimage bg-black text-white flex items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl px-0 sm:px-6 lg:px-8 shadow-lg bg-white rounded-lg">
        <div className="p-8 w-full flex justify-center">
          <div className="w-full">
            <h2 className="text-black font-serif text-4xl font-semibold leading-10 mb-9 lg:text-left text-center">Raise Your Query</h2>
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 w-full">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full h-14 shadow-sm text-black placeholder-gray-400 text-lg font-normal leading-7 rounded-lg border border-gray-300 bg-gray-200 focus:outline-none focus:border-yellow-500 py-2 px-4"
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-14 shadow-sm text-black placeholder-gray-400 text-lg font-normal leading-7 rounded-lg border border-gray-300 bg-gray-200 focus:outline-none focus:border-yellow-500 py-2 px-4"
                  placeholder="Email"
                />
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 w-full contactus">
                <PhoneInput
                  country={"us"}
                  value={formData.phone}
                  onChange={handleChange}
                  inputStyle={{
                    backgroundColor: '#e5e7eb',
                    color: 'black',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    width: '100%',
                    height:"55px"
                  }}
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full h-14 shadow-sm text-black placeholder-gray-400 text-lg font-normal leading-7 rounded-lg border border-gray-300 bg-gray-200 focus:outline-none focus:border-yellow-500 py-2 px-4"
                  placeholder="Subject"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full h-48 shadow-sm resize-none text-black placeholder-gray-400 text-lg font-normal leading-7 rounded-lg border border-gray-300 bg-gray-200 focus:outline-none focus:border-yellow-500 px-4 py-4"
                placeholder="Message"
              />
              <button type="submit" className="w-full h-12 text-center text-white text-lg font-semibold leading-6 rounded-lg bg-gradient-to-r from-[#FF4B00] to-[#CFC800] shadow transition-all duration-700">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
