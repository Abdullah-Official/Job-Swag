import { Link } from "react-router-dom";
import Logo from "@/assets/images/Logo-white.png";
import YtIcon from "@/assets/images/yt-footer.png";
import SocialIcon from "@/assets/images/social-footer.png";
import FbIcon from "@/assets/images/fb-footer.png";

const Footer = () => {
  return (
    <div className="bg-[#1B4C81] text-white px-10 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-6 lg:gap-x-16 lg:gap-y-0">
      <div className="space-y-4 text-[12px] flex flex-col">
        <div>
          <img
            src={Logo}
            width={160}
            height={160}
            alt="job_swag_logo"
            className="object-contain "
          />
          <p className="pt-4">Find your dream job!</p>
        </div>
        <div className="space-y-3">
          <p>© Copyrights 2024. All rights reserved to VE LLC DBA Job Swag.</p>
          <div className="flex gap-x-4 items-center">
            <img
              src={FbIcon}
              width={23}
              height={23}
              alt="fb"
              className="object-contain cursor-pointer "
            />
            <img
              src={SocialIcon}
              width={20}
              height={20}
              alt="social"
              className="object-contain cursor-pointer "
            />
            <img
              src={YtIcon}
              width={28}
              height={28}
              alt="yt"
              className="object-contain cursor-pointer "
            />
          </div>
        </div>
      </div>
      <div className="space-y-4 flex flex-col">
        <h1 className="font-bold text-[24px] ">Job Seekers</h1>
        <ul className="text-[12px] space-y-2">
          <li>
            <Link to={"/job-seeker"}>Find a Job</Link>
          </li>
          <li>
            <Link to={"/my-jobs"}>My Jobs</Link>
          </li>
          <li>
            <Link to={"/my-account"}>My Account</Link>
          </li>
          <li>
            <Link to={"/"}>Create a Job Alert</Link>
          </li>
          <li>
            <Link to={"/create-resume"}>Create a Resume</Link>
          </li>
          <li>
            <Link to={"/"}>Career Tools</Link>
          </li>
          <li>
            <Link to={"/messages"}>My Messages</Link>
          </li>
          <li>
            <Link to={"/"}>My Statistics</Link>
          </li>
        </ul>
      </div>
      <div className="space-y-4 flex flex-col">
        <h1 className="font-bold text-[24px] ">Employers</h1>
        <ul className="text-[12px] space-y-2">
          <li>
            <Link to={"/"}>Post A Job</Link>
          </li>
          <li>
            <Link to={"/my-jobs"}>My Jobs</Link>
          </li>
          <li>
            <Link to={"/applicants"}>My Applicants</Link>
          </li>
          <li>
            <Link to={"/my-account"}>My Account</Link>
          </li>
          <li>
            <Link to={"/analytics"}>My Advertisements</Link>
          </li>
          <li>
            <Link to={"/"}>Become an Influencer</Link>
          </li>
          <li>
            <Link to={"/"}>Professional Services</Link>
          </li>
          <li>
            <Link to={"/messages"}>My Messages</Link>
          </li>
          <li>
            <Link to={"/"}>My Statistics</Link>
          </li>
        </ul>
      </div>
      <div className="space-y-4 flex flex-col">
        <h1 className="font-bold text-[24px] ">Influencers</h1>
        <ul className="text-[12px] space-y-2">
          <li>
            <Link to={"/my-account"}>My Account</Link>
          </li>
          <li>
            <Link to={"/messages"}>My Messages</Link>
          </li>
          <li>
            <Link to={"/analytics"}>My Advertisements</Link>
          </li>
          <li>
            <Link to={"/"}>Professional Services</Link>
          </li>
          <li>
            <Link to={"/"}>My Statistics</Link>
          </li>
        </ul>
      </div>
      <div className="space-y-4 flex flex-col">
        <h1 className="font-bold text-[24px] ">Quick Links</h1>
        <ul className="text-[12px] space-y-2">
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/featured-jobs"}>Job Categories</Link>
          </li>
          <li>
            <Link to={"/"}>Sponsors</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/featured-jobs"}>Featured Jobs</Link>
          </li>
          <li>
            <Link to={"/how"}>How It Works</Link>
          </li>
          <li>
            <Link to={"/advertise"}>Advertise</Link>
          </li>
          <li>
            <Link to={"/"}>Become an Influencer</Link>
          </li>
          <li>
            <Link to={"/"}>FAQs</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/"}>Terms & Conditions</Link>
          </li>
          <li>
            <Link to={"/"}>VE LLC</Link>
          </li>
          <li>
            <Link to={"/"}>Branding Solution</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
