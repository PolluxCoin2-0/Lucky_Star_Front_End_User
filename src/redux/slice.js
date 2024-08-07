import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    address: "",
    Network: "",
    login: false,
    signup: false,
    balanceUSDX: "",
    token: "",
    email: "XYZ@GMAIL.COM",
    phoneNo: "123456789",
    city: "QWERTY",
    state: "QWERTY",
    pincode: "123456",
    referralBy: "LUCKYSTAR",
    referralCode:"USER123"
  },
  reducers: {
    setWalletAddress: (state, action) => {
      state.address = action.payload;
    },
    setNetwork: (state, action) => {
      state.Network = action.payload;
    },
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setSignup: (state, action) => {
      state.signup = action.payload;
    },
    setBalanceUSDX: (state, action) => {
      state.balanceUSDX = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phoneNo = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setState: (state, action) => {
      state.state = action.payload;
    },
    setPincode: (state, action) => {
      state.pincode = action.payload;
    },
    setReferralBy: (state, action) => {
      state.referralBy = action.payload;
    },
    setReferralCode: (state, action) => {
      state.referralCode = action.payload;
    },
  },
});

export const {
  setWalletAddress,
  setNetwork,
  setLogin,
  setSignup,
  setBalanceUSDX,
  setToken,
  setEmail,
  setPhone,
  setCity,
  setState,
  setPincode,
  setReferralBy,
  setReferralCode,
} = walletSlice.actions;
export default walletSlice.reducer;
