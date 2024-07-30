import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Balance, Faqs, Home, OTP, Signup, UserData, Wallet, Winner } from "./pages";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
function App() {

  return (
    <Router>
      <Navbar/>
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/winner" element={<Winner />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/user" element={<UserData />} />
          </Routes>
          <Footer/>
    </Router>
  )
}

export default App
