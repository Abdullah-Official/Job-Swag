import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className=" w-full fixed !z-50">
      <header className="bg-[#1B4C81] p-2 flex items-center justify-center">
        <p className="text-xs sm:text-sm text-white text-center">
          Join Our Online Immigration Community For Free &nbsp; | &nbsp; High
          Quality Academic Services &nbsp; | &nbsp; Jaymeous Designs - Brand
          Your Business &nbsp; | &nbsp; BEE A Honey BEE Childrens Book
        </p>
      </header>
      <nav className="p-5 bg-white">
        <div className="container flex items-center">
          <img
            src={Logo}
            width={150}
            height={150}
            alt="job_swag_logo"
            className="object-contain"
          />
          <div className=" hidden lg:flex flex-1 justify-around ">
            <div className="flex gap-x-6 items-end justify-center  w-full font-medium">
              <Link className="text-main text-sm" to="/">
                Home
              </Link>
              <Link className="text-main text-sm" to="/about">
                About
              </Link>
              <Link className="text-main text-sm" to="/how">
                How It Works
              </Link>
              <Link className="text-main text-sm" to="/">
                Featured Jobs
              </Link>
              <Link className="text-main text-sm" to="/">
                Advertise
              </Link>
              <Link className="text-main text-sm" to="/">
                Blog
              </Link>
              <Link className="text-main text-sm" to="/">
                Contact
              </Link>
            </div>
            <div className="flex gap-x-4">
              <Button
                className="text-main_green hover:text-main_green"
                variant="outline"
              >
                Login
              </Button>
              <Button>Create Account</Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
