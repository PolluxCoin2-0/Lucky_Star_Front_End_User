import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// SIGNUP
export const postSignup = async (formData) => {
  try {
    const res = await axios.post(BASE_URL + "/signup", {
      email: formData.email,
      referredBy: formData.referral,
      phone: formData.phone,
      countryCode: formData.countryCode,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
      walletAddress: formData.walletAddress,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// VERIFY OTP
export const verifyOtp = async (email, otp) => {
  try {
    const res = await axios.post(BASE_URL + "/VerifyOtp", {
      email: email,
      otp: otp,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// LOGIN
export const connectWallet = async (walletAddress) => {
  try {
    const res = await axios.post(BASE_URL + "/login", {
      walletAddress: walletAddress,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// BET >> PLACE BID
export const placeBid = async (placeBidData, walletAddress, token) => {

  try {
    const res = await axios.post(BASE_URL + "/placeBidMethod", {
      walletAddress: walletAddress,
      amount: placeBidData?.minimumBid,
      number: placeBidData?.bidNo,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

// SENSEX CHART API
export const sensexChartData = async (today, yesterday) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/proxy?today=${today}&yesterday=${yesterday}`
    );
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

// GET WINNING BALANCE OF THE USER
export const getWinningBalance = async (walletAddress, token) => {
  try {
    const res = await axios.post(
      BASE_URL + "/getTotalWinning",
      {
        walletAddress: walletAddress,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

//  SIGNOUT
export const signout = async (token) => {
  try {
    const res = await axios.get(BASE_URL + "/logout", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

// GET FAQs LIST
export const getFAQsList = async () => {
  try {
    const res = await axios.get(BASE_URL + "/getFaq");
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

// GET APPROVAL
export const getApproval = async (walletAddress, amount) => {
  try {
    const res = await axios.post(BASE_URL + "/approvalUSDX", {
      walletAddress: walletAddress,
      amount: amount,
    });
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

// GET TOTAL WINNING COUNT
export const getWinningCount = async()=>{
  try {
    const res = await axios.get(BASE_URL + "/getWinnerCountMethod");
    return res?.data;
  } catch (error) {
    console.log(error);
  }
}

// GET WINNERS BY INDEX
export const getWinnersByIndex = async(index)=>{
  try {
    const res = await axios.get(BASE_URL + `getWinners/${index}`)
    return res?.data;
  } catch (error) {
    console.log(error)
  }
}

// GET CURRENY BIDDING LIST
export const getBiddingList = async()=>{
  try {
    const res = await axios.get(BASE_URL + "/getCurrentBidding");
    return res?.data;
  } catch (error) {
    console.log(error)
  }
}
