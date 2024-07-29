import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, OTP, Signup, Wallet, Winner } from "./pages";
function App() {

  return (
    <Router>
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/winner" element={<Winner />} />
          </Routes>
    </Router>
  )
}

export default App
