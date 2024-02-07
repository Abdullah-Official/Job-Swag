import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

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
    </Router>
    </>
  );
}
export default App;