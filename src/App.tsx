import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";

function App() {
  return (
    <>
    <Router>
        <Navbar />
     <div className="pt-[8rem]">
     <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/how"
          element={<HowItWorks />}
        />
      </Routes>
     </div>
     <Footer />
    </Router>
    </>
  );
}
export default App;