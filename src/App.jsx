import { BrowserRouter, Route, Routes } from "react-router-dom";
import CryptoHome from './pages/CryptoHome';
import CryptoDetail from './pages/CryptoDetail';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route
          path="/home"
          element={(
            <>
              <Navbar /> {/* Render Navbar on CryptoHome */}
              <CryptoHome />
            </>
          )}
        />
        <Route
          path="/home/coin/:id"
          element={(
            <>
              <Navbar /> {/* Render Navbar on CryptoDetail */}
              <CryptoDetail />
            </>
          )}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
