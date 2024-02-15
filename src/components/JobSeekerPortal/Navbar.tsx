import { Link } from "react-router-dom";
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
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavbarJobSeeker = () => {
  return (
    <div className=" w-full fixed !z-50">
      <header className="bg-[#1B4C81] p-2 flex items-center justify-center">
        <p className="text-xs sm:text-sm text-white text-center">
          Join Our Online Immigration Community For Free &nbsp; | &nbsp; High
          Quality Academic Services &nbsp; | &nbsp; Jaymeous Designs - Brand
          Your Business &nbsp; | &nbsp; BEE A Honey BEE Childrens Book
        </p>
      </header>
      <nav className="p-5 container border-0 border-b-2 bg-[#fafafa] ">
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
            <div className="flex gap-x-3">
              <div className="bg-[#E7E7E7] w-[33px] h-[33px] flex items-center justify-center rounded-md cursor-pointer">
                <img
                  src={BellIcon}
                  className="object-contain w-[13px]"
                  alt="BellIcon"
                />
              </div>
              <div className="bg-[#E7E7E7] w-[33px] h-[33px] flex items-center justify-center rounded-md cursor-pointer">
                <img
                  src={MsgIcon}
                  className="object-contain w-[13px]"
                  alt="MsgIcon"
                />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="bg-[#E7E7E7] w-[33px] h-[33px] flex items-center justify-center rounded-md cursor-pointer">
                    <img
                      src={ProfileIcon}
                      className="object-contain w-[13px]"
                      alt="ProfileIcon"
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-72 shadow_dropdown rounded-lg">
                  <DropdownMenuLabel className="text-[#5D6A7B] text-xs">Johndavid89@gmail.com</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Keyboard className="mr-2 h-4 w-4" />
                      <span>Keyboard shortcuts</span>
                      <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Users className="mr-2 h-4 w-4" />
                      <span>Team</span>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <UserPlus className="mr-2 h-4 w-4" />
                        <span>Invite users</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            <span>Email</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MessageSquare className="mr-2 h-4 w-4" />
                            <span>Message</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            <span>More...</span>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                      <Plus className="mr-2 h-4 w-4" />
                      <span>New Team</span>
                      <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Github className="mr-2 h-4 w-4" />
                    <span>GitHub</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    <span>Support</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem disabled>
                    <Cloud className="mr-2 h-4 w-4" />
                    <span>API</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
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
