import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import TNavbar from "./components/TNavbar";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";
import Sports from "./pages/Sports";

function App() {
 
  return (
     
    <GlobalProvider>
      <Router>
        <TNavbar/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business/>} />
          <Route path="/entertainment" element={<Entertainment/>} />
          <Route path="/sports" element={<Sports/>} />          
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
