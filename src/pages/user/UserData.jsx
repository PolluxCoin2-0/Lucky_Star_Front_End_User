import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserData = () => {
  const userData = useSelector((state)=>state.wallet);

  return (
    <div className="bgimage bg-black text-white min-h-screen px-6 md:px-24 py-12 flex flex-col items-center">
      <div className="w-full md:w-full lg:w-3/5 xl:w-3/5 2xl:w-3/5">
        <p className="font-bold text-2xl tracking-wider pb-8 text-center">
          PERSONAL INFORMATION
        </p>

        <div className="bg-white rounded-xl px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="mb-4">
              <p className="font-semibold text-black text-xl pb-2">Email</p>
              <p className="text-[#a5a5a5] font-medium border-2 border-[#c2c2c2] px-6 py-2 rounded-lg">
                {userData.email}
              </p>
            </div>

            <div className="mb-4">
              <p className="font-semibold text-black text-xl pb-2">Phone No</p>
              <p className="text-[#a5a5a5] font-medium border-2 border-[#c2c2c2] px-6 py-2 rounded-lg">
                {userData.phoneNo}
              </p>
            </div>

            <div className="mb-4">
              <p className="font-semibold text-black text-xl pb-2">City</p>
              <p className="text-[#a5a5a5] font-medium border-2 border-[#c2c2c2] px-6 py-2 rounded-lg">
                {userData.city}
              </p>
            </div>

            <div className="mb-4">
              <p className="font-semibold text-black text-xl pb-2">State</p>
              <p className="text-[#a5a5a5] font-medium border-2 border-[#c2c2c2] px-6 py-2 rounded-lg">
                {userData.state}
              </p>
            </div>

            <div className="mb-4">
              <p className="font-semibold text-black text-xl pb-2">Pincode</p>
              <p className="text-[#a5a5a5] font-medium border-2 border-[#c2c2c2] px-6 py-2 rounded-lg">
                {userData.pincode}
              </p>
            </div>

            <div className="mb-4">
              <p className="font-semibold text-black text-xl pb-2">Referral</p>
              <p className="text-[#a5a5a5] font-medium border-2 border-[#c2c2c2] px-6 py-2 rounded-lg">
                {userData.referralBy}
              </p>
            </div>

            <div className="col-span-1 sm:col-span-2 mb-4">
              <p className="font-semibold text-black text-xl pb-2">Wallet Address</p>
              <p className="text-[#a5a5a5] font-medium border-2 border-[#c2c2c2] px-6 py-2 rounded-lg break-words">
                {userData.address}
              </p>
            </div>

            <div className="col-span-1 sm:col-span-2 mb-4">
              <p className="font-semibold text-black text-xl pb-2">Referral Code</p>
              <p className="text-[#a5a5a5] font-medium border-2 border-[#c2c2c2] px-6 py-2 rounded-lg break-words">
                {userData.referralCode}
              </p>
            </div>
          </div>
        </div>

<Link to="/" className='text-center'>
        <button
          type="button"
          className="bg-gradient-to-r from-[#FF4B00] to-[#CFC800] py-3 px-4 text-center whitespace-nowrap font-bold rounded-xl text-xl text-white focus:outline-none my-6 w-full"
        >
         Go Home
        </button>
        </Link>
      </div>
    </div>
  );
};

export default UserData;
