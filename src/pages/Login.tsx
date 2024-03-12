import LoginBg from "@/assets/images/login-bg.png";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="mb-20 flex flex-col md:flex-row">
      <div className="md:w-[65%] lg:w-[75%] w-full">
        <img
          src={LoginBg}
          className="w-full md:w-[90%] 2xl:h-[948px] "
          alt=""
        />
      </div>
      <div className="flex justify-center md:-ml-60 2xl:-ml-96 2xl:mt-20">
        <div className="bg-white w-[550px] 2xl:w-[742px] h-fit mt-20 mx-4 md:mx-0 form_box_shadow flex flex-col gap-y-5 rounded-[30px] p-7  md:p-12  ">
          <div>
            <h1 className="text-heading 2xl:!text-[50px]">Log In</h1>
            <p className="text-[#888888] text-[14px]  2xl:text-[18px] pt-3">
              Lorem ipsum dolor sit amet consectetur adipiscing
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6 w-full ">
            <div className="flex flex-col gap-2 col-span-12  ">
              <Label
                className="text-[#4E4E4E] font-[400] 2xl:text-[18px] text-[14px]"
                htmlFor="email"
              >
                Email Address
              </Label>
              <Input
                type="email"
                placeholder="Johndavid89@gmail.com"
                id="email"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-2 col-span-12 ">
              <Label
                className="text-[#4E4E4E] font-[400] 2xl:text-[18px] text-[14px]"
                htmlFor="password"
              >
                Password
              </Label>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="xxxxxxxxxxxxxx"
                className="w-full"
                icon={showPassword ? <EyeOff onClick={() => setShowPassword(!showPassword)} className="text-[#474747] cursor-pointer" size={18} /> : <Eye onClick={() => setShowPassword(!showPassword)} className="text-[#474747] cursor-pointer" size={18} />}
              />
            </div>
            <div className="flex justify-between  col-span-12">
              <div className="w-full flex  gap-2 ">
                <Checkbox
                  className="h-5 w-5 bg-[#ffff] border-[#C6C6C6]"
                  id="terms"
                />
                <Label
                  htmlFor="terms"
                  className="text-[#7C7C7C] font-[450] text-[13px]"
                >
                  Remember me
                </Label>
              </div>
              <div className="w-full flex justify-end ">
                <p className="text-[#7C7C7C] font-[450] text-[13px]">
                  Forgot Password
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col gap-y-6 items-center mt-5 w-full ">
            <Button className="w-full 2xl:py-6 2xl:text-[18px]">Log In</Button>
            <p className="text-[#7C7C7C] text-md 2xl:!text-[16px] font-[400]">
              Don’t have an account,{" "}
              <span className="text-main_green"><Link to={"/create-acc"}> Create Account </Link></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
