import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import BellIcon from "../../assets/images/bell-icon.png";
import MsgIcon from "../../assets/images/msg-icon.png";
import ProfileIcon from "../../assets/images/profile-icon.png";
import LogOutIcon from "../../assets/images/logout.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navDropdownData } from "@/utils/dropdownData";

const NavbarJobSeeker = () => {
  return (
    <div className=" w-full fixed !z-50">
      <header className="bg-[#1B4C81] p-2.5 2xl:p-4 flex items-center justify-center">
        <p className="text-xs sm:text-xs font-[400] 2xl:text-[18px] text-white 2xl:w-[1600px] text-center">
          Join Our Online Immigration Community For Free &nbsp; | &nbsp; High
          Quality Academic Services &nbsp; | &nbsp; Jaymeous Designs - Brand
          Your Business &nbsp; | &nbsp; BEE A Honey BEE Childrens Book
        </p>
      </header>
      <nav className="p-5 container lg:w-[1400px] bg-white 2xl:w-[1600px] border-0 border-b-2 ">
        <div className="container  flex justify-between gap-x-3 items-center">
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
            </div>
            <div className="flex gap-x-6">
              <NavLink
                to="/notifications"
                className="bg-[#E7E7E7] w-[35px] h-[35px] flex items-center justify-center rounded-md cursor-pointer"
              >
                <img
                  src={BellIcon}
                  className="object-contain w-[15px]"
                  alt="BellIcon"
                />
              </NavLink>
              <NavLink
                to="/messages"
                className="bg-[#E7E7E7] w-[35px] h-[35px] flex items-center justify-center rounded-md cursor-pointer"
              >
                <img
                  src={MsgIcon}
                  className="object-contain w-[15px]"
                  alt="MsgIcon"
                />
              </NavLink>

              <DropdownMenu>
                <DropdownMenuTrigger asChild className="!border-none ">
                  <div className="bg-[#E7E7E7] hover:bg-[#fff] w-[35px] h-[35px] flex items-center justify-center rounded-md cursor-pointer">
                    <img
                      src={ProfileIcon}
                      className="object-contain w-[15px]"
                      alt="ProfileIcon"
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-auto lg:min-w-[300px] mr-10 mt-4 2xl:min-w-[351px]  px-3  py-3 shadow_dropdown rounded-xl">
                  <DropdownMenuLabel className="text-[#5D6A7B] text-sm font-[600] mb-1">
                    Johndavid89@gmail.com
                  </DropdownMenuLabel>
                  <DropdownMenuGroup className="my-2">
                    {navDropdownData.map((n, i) => (
                      <DropdownMenuItem key={i}>
                        <NavLink
                          className="flex items-center gap-1 my-1.5"
                          to={`/${n.nav}`}
                        >
                          <img
                            src={n.icon}
                            className="mr-2  w-[18px] h-[18px] object-contain"
                          />
                          <span className="text-sm font-[500] text-[#7C7C7C]">
                            {n.title}
                          </span>
                        </NavLink>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator className="border-1 border-[#C6C6C6]" />
                  <DropdownMenuItem>
                    <NavLink
                      className="flex items-center gap-1 my-1.5"
                      to={`/`}
                    >
                      <img
                        src={LogOutIcon}
                        className="mr-2  w-[20px] h-[20px] object-contain"
                      />
                      <span className="text-sm text-[#55A7A6] font-[600]">
                        Log out
                      </span>
                    </NavLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarJobSeeker;
