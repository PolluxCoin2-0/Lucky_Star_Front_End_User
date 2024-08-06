import { createSlice } from '@reduxjs/toolkit';

const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    address: "",
    Network:"",
    login:false,
    signup:false,
    balanceUSDX:"",
    token:"",
    email:"",
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
  },
});

export const { setWalletAddress,setNetwork, setLogin, setSignup, setBalanceUSDX, setToken, setEmail} = walletSlice.actions;
export default walletSlice.reducer;
