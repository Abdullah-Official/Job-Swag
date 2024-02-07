import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      </Routes>
     </div>
     <Footer />
    </Router>
    </>
  );
}
export default App;