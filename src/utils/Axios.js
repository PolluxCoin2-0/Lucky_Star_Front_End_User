import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// SIGNUP
export const postSignup = async(formData)=>{
    try {
        const res = await axios.post(BASE_URL +"/signup",{
            "email": formData.email,
            "referredBy": formData.referral,
            "phone": formData.phone,
            "countryCode": formData.countryCode,
            "city": formData.city,
            "state": formData.state,
            "zipCode": formData.zipCode,
            "walletAddress": formData.walletAddress
        })
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

// VERIFY OTP
export const verifyOtp = async(email, otp)=>{
    try {
        const res = await axios.post(BASE_URL +"/VerifyOtp",{
            "email": email,
            "otp": otp
        })
        return res.data;
    }
    catch (error) {
        console.log(error);
    }
}

// LOGIN
export const connectWallet = async(walletAddress)=>{
    console.log(   walletAddress)
    try {
        const res = await axios.post(BASE_URL +"/login",{
            "walletAddress":walletAddress
        })
        return res.data;
    }
    catch (error) {
        console.log(error);
    }
}

// BET >> PLACE BID
export const placeBid = async(placeBidData)=>{
    try {
        const res = await axios.post(BASE_URL +"/placeBidMethod",{
            "amount": placeBidData?.minimumBid,
            "number": placeBidData?.bidNo
        })
        return res?.data
    } catch (error) {
        console.log(error);
    }
}

// SENSEX CHART API
export const sensexChartData = async()=>{
    try {
        const res = await axios.get("http://localhost:3001/proxy")
        return res?.data;
    } catch (error) {
     console.log(error);   
    }
}

