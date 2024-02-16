import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
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
      <nav className="p-5 bg-white ">
        <div className="container md:px-10 flex justify-between gap-x-3 items-center">
          <div>
            <Link to={"/"}>
              <img
                src={Logo}
                width={150}
                height={150}
                alt="job_swag_logo"
                className="object-contain"
              />
            </Link>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <div className="flex items-center cursor-pointer lg:hidden">
                <Menu />
              </div>
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle>
                  <Link to={"/"}>
                    <img
                      src={Logo}
                      width={150}
                      height={150}
                      alt="job_swag_logo"
                      className="object-contain"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="my-10">
                <div className="flex flex-col gap-y-6 justify-center  w-full font-medium">
                  <Link className="text-main text-sm" to="/">
                    Home
                  </Link>
                  <Link className="text-main text-sm" to="/about">
                    About
                  </Link>
                  <Link className="text-main text-sm" to="/how">
                    How It Works
                  </Link>
                  <Link className="text-main text-sm" to="/featured-jobs">
                    Featured Jobs
                  </Link>
                  <Link className="text-main text-sm" to="/advertise">
                    Advertise
                  </Link>
                  <Link className="text-main text-sm" to="/blog">
                    Blog
                  </Link>
                  <Link className="text-main text-sm" to="/contact">
                    Contact
                  </Link>
                  <Link className="text-main text-sm" to="/emp-portal">
                    Employee Portal
                  </Link>
                </div>
                <div className="flex gap-4 mt-5">
                  <Link to="/login">
                    <Button
                      className="text-main_green hover:text-main_green"
                      variant="outline"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to={"/create-acc"}>
                    <Button>Create Account</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className=" hidden lg:flex gap-x-10">
            <div className="flex gap-x-8 items-end   w-full font-medium">
              <Link className="text-main text-sm" to="/">
                Home
              </Link>
              <Link className="text-main text-sm" to="/about">
                About
              </Link>
              <Link className="text-main text-sm" to="/how">
                How It Works
              </Link>
              <Link className="text-main text-sm" to="/featured-jobs">
                Featured Jobs
              </Link>
              <Link className="text-main text-sm" to="/advertise">
                Advertise
              </Link>
              <Link className="text-main text-sm" to="/blog">
                Blog
              </Link>
              <Link className="text-main text-sm" to="/contact">
                Contact
              </Link>
              <Link className="text-main text-sm" to="/emp-portal">
                Employee Portal
              </Link>
            </div>
            <div className="flex gap-x-4">
              <Link to="/login">
                <Button
                  className="text-main_green hover:text-main_green"
                  variant="outline"
                >
                  Login
                </Button>
              </Link>
              <Link to={"/create-acc"}>
                <Button>Create Account</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
