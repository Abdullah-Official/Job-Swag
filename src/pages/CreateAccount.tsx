import CreateAccBg from "@/assets/images/create-acc-bg.png";
import JobSeeker from "@/assets/images/job-seeker.png";
import Employeer from "@/assets/images/employeer.png";
import Influencer from "@/assets/images/influencer.png";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [accType, setAccType] = useState("");
  const navigate = useNavigate();

  return (
    <div className="mb-20 flex flex-col md:flex-row">
      <div className="md:w-[65%] lg:w-[75%] w-full">
        <img
          src={CreateAccBg}
          className="w-full md:w-[90%] rounded-br-[80px] rounded-tr-[80px]"
          alt=""
        />
      </div>
      <div className="flex justify-center md:-ml-60">
        <div className="bg-white w-full md:w-fit lg:w-[550px] h-fit mt-20 mx-4 md:mx-0 form_box_shadow flex flex-col gap-y-5 rounded-[30px] p-7  md:p-12  ">
          <div>
            <h1 className="text-heading">Create Account</h1>
            <p className="text-[#888888] text-[14px] pt-3">
              Lorem ipsum dolor sit amet consectetur adipiscing
            </p>
          </div>
          {/* // TODO */}
          <div className="grid grid-cols-12 gap-5">
            <label
              onClick={() => setAccType("job-seeker")}
              htmlFor="job-seeker"
              className={`${
                accType === "job-seeker" ? "create_acc_card " : null
              } col-span-12 md:col-span-6  cursor-pointer rounded-lg items-center relative px-5 py-6 w-full border border-[#C6C6C6]`}
            >
              <div className="absolute right-5 top-3">
                <Checkbox
                  className="rounded-full  border-[#C6C6C6] "
                  id="job-seeker"
                  checked={accType === "job-seeker"}
                />
              </div>
              <div className="flex  gap-x-4 items-center">
                <img
                  src={JobSeeker}
                  className="w-[50px] object-contain h-[40px]"
                  alt="JobSeeker"
                />
                <p className="text-[#5D6A7B] font-[500] text-[17px]">
                  Job Seeker
                </p>
              </div>
            </label>
            <label
              onClick={() => setAccType("employeer")}
              htmlFor="employeer"
              className={`${
                accType === "employeer" ? "create_acc_card " : null
              } col-span-12 md:col-span-6  cursor-pointer rounded-lg items-center relative px-5 py-6 w-full border border-[#C6C6C6]`}
            >
              <div className="absolute right-5 top-3">
                <Checkbox
                  className="rounded-full  border-[#C6C6C6] "
                  id="employeer"
                  checked={accType === "employeer"}
                />
              </div>
              <div className="flex  gap-x-4 items-center">
                <img
                  src={Employeer}
                  className="w-[50px] object-contain h-[40px]"
                  alt="Employeer"
                />
                <p className="text-[#5D6A7B] font-[500] text-[17px]">
                  Employeer
                </p>
              </div>
            </label>
            <label
              onClick={() => setAccType("influencer")}
              htmlFor="influencer"
              className={`${
                accType === "influencer" ? "create_acc_card " : null
              } col-span-12 md:col-span-6  cursor-pointer rounded-lg items-center relative px-5 py-6 w-full border border-[#C6C6C6]`}
            >
              <div className="absolute right-5 top-3">
                <Checkbox
                  className="rounded-full  border-[#C6C6C6] "
                  id="influencer"
                  checked={accType === "influencer"}
                />
              </div>
              <div className="flex  gap-x-4 items-center">
                <img
                  src={Influencer}
                  className="w-[50px] object-contain h-[40px]"
                  alt="Influencer"
                />
                <p className="text-[#5D6A7B] font-[500] text-[17px]">
                  Influencer
                </p>
              </div>
            </label>
          </div>
          <div className="flex justify-center flex-col gap-y-6 items-center mt-5 w-full ">
            <Button onClick={() => navigate(`/${accType}`)} className="w-full ">
              Continue
            </Button>
            <p className="text-[#7C7C7C] text-md font-[450]">
              Already have an account,
              <span className="text-main_green"> Log In</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
