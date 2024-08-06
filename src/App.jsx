import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Balance,
  Faqs,
  Home,
  OTP,
  Signup,
  UserData,
  Wallet,
  Winner,
  BiddingPage,
  Dashboard,
  Contactus,
} from "./pages";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Navbar />
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
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/contactus" element={<Contactus />} />
          </Routes>
          <Footer />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
