import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Balance, Faqs, Home, OTP, Signup, UserData, Wallet, Winner, BiddingPage, Dashboard, } from "./pages";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { ToastContainer, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <Router>
      <Navbar/>
      <ToastContainer 
          position="top-center"
          autoClose={3000} 
          theme="dark" 
          newestOnTop={true}
          pauseOnFocusLoss
           toastClassName="custom-toast"
           transition={Zoom}
          />
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/winner" element={<Winner />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/user" element={<UserData />} />
            <Route path="/admin/bidding" element={<BiddingPage />} />
            <Route path="/admin/dashborad" element={<Dashboard />} />
          </Routes>
          <Footer/>
    </Router>
  )
}

export default App
