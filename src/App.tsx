import {
  Routes,
  Route,
  // useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Blog from "./pages/Blog";
import Advertise from "./pages/Advertise";
import FeatureJobs from "./pages/FeaturedJobs";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import JobSeeker from "./pages/JobSeeker";
import Employeer from "./pages/Employeer";
import EmployeePortalHome from "./pages/EmployeePortal.tsx/EmployeePortalHome";
// import NavbarJobSeeker from "./components/JobSeekerPortal/Navbar";
import Applicants from "./pages/EmployeePortal.tsx/Applicants";
import Analytics from "./pages/EmployeePortal.tsx/Analytics";
import BlogPosts from "./pages/EmployeePortal.tsx/BlogPosts";
import JobPosts from "./pages/EmployeePortal.tsx/JobPosts";
import JobSeekerHome from "./pages/JobSeekerPortal.tsx/JobSeekerHome";
import MyAccount from "./pages/JobSeekerPortal.tsx/MyAccount";
import MyResume from "./pages/JobSeekerPortal.tsx/MyResume";
import JobBlogPost from "./pages/JobSeekerPortal.tsx/JobBlogPost";
import MyJobs from "./pages/JobSeekerPortal.tsx/MyJobs";
import Reviews from "./pages/JobSeekerPortal.tsx/Reviews";
import Notifications from "./pages/JobSeekerPortal.tsx/Notifications";
import SettingsPage from "./pages/JobSeekerPortal.tsx/Settings";
import CreateResume from "./pages/JobSeekerPortal.tsx/CreateResume";
import EditResume from "./pages/JobSeekerPortal.tsx/EditResume";
import Messages from "./pages/JobSeekerPortal.tsx/Messages";

function App() {
  // const location = useLocation();
  return (
    <>
      <Navbar />
      <div className="pt-[8rem]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emp-portal" element={<EmployeePortalHome />} />
          <Route path="/jobseeker-portal" element={<JobSeekerHome />} />
          <Route path="/applicants" element={<Applicants />} />
          <Route path="/about" element={<About />} />
          <Route path="/how" element={<HowItWorks />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/featured-jobs" element={<FeatureJobs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-acc" element={<CreateAccount />} />
          <Route path="/job-seeker" element={<JobSeeker />} />
          <Route path="/employeer" element={<Employeer />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/blog-posts" element={<BlogPosts />} />
          <Route path="/job-posts" element={<JobPosts />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/my-resume" element={<MyResume />} />
          <Route path="/blog-post" element={<JobBlogPost />} />
          <Route path="/my-jobs" element={<MyJobs />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/create-resume" element={<CreateResume />} />
          <Route path="/edit-resume" element={<EditResume />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
export default App;
