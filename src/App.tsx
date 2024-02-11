import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Blog from "./pages/Blog";
import Advertise from "./pages/Advertise";
import FeatureJobs from "./pages/FeaturedJobs";
import Contact from "./pages/Contact";

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
        <Route
          path="/blog"
          element={<Blog />}
        />
        <Route
          path="/advertise"
          element={<Advertise />}
        />
        <Route
          path="/featured-jobs"
          element={<FeatureJobs />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
     </div>
     <Footer />
    </Router>
    </>
  );
}
export default App;