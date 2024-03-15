import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreateResume = () => {
  const navigate = useNavigate();

  return (
    <div className="container !my-14 2xl:!my-32 lg:max-w-[1400px] 2xl:max-w-[1600px]">
      <div className="md:container w-full md:!w-[80%]">
        <div>
          <p className="2xl:text-[20px] text-[17px] text-[#5D6A7B] font-[500]">
            {"My Resumes > Create Resume"}
          </p>
        </div>
        <div className="flex items-center mt-3 2xl:mt-6 w-full justify-center">
          <div className="bg-white space-y-10 mt-8  form_box_shadow rounded-2xl p-7 md:p-12 w-full ">
            <div className="space-y-4">
              <h2 className="text-heading 2xl:!text-[30px]">Create Resume</h2>
              <div className="flex items-center justify-between !mt-6">
                <ArrowLeft
                  onClick={() => navigate(-1)}
                  size={26}
                  className="cursor-pointer text-[#7C7C7C]"
                />
                <p className="text-sm cursor-pointer 2xl:text-[20px] font-[600] text-[#55A7A6]">
                  Save and exit
                </p>
              </div>
              <div className="w-full h-[6px] bg-[#C6C6C6] rounded-full !mt-4">
                <div className="bg-[#55A7A6] rounded-full h-full w-[15%]" />
              </div>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <h4 className="text-[20px] 2xl:text-[24px] text-[#1B4C81] font-[600]">
                  What is your name?
                </h4>
              </div>
              <div className="grid grid-cols-12 gap-6 w-full ">
                <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                  <Label className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]">
                    First Name
                  </Label>
                  <Input
                    type="text"
                    id="mail_add"
                    placeholder="Enter here"
                    className="2xl:text-[18px] font-[400] 2xl:py-7 2xl:pl-5 w-full"
                  />
                </div>
                <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                  <Label className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]">
                    Last Name
                  </Label>
                  <Input
                    type="text"
                    id="app_no"
                    placeholder="Enter here"
                    className="2xl:text-[18px] font-[400] 2xl:py-7 2xl:pl-5 w-full"
                  />
                </div>
              </div>
            </div>
            <hr className="border-t-2 border-gray-300 my-10 border-dashed mb-4" />
            <div className="space-y-5">
              <div className="space-y-2">
                <h4 className="text-[20px] 2xl:text-[24px] text-[#1B4C81] font-[600]">
                  Would you like to add a phone number to your resume?
                </h4>
              </div>
              <div className="grid grid-cols-12 gap-6 w-full ">
                <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                  <Label className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]">
                    Phone Number
                  </Label>
                  <Input
                    type="text"
                    id="mail_add"
                    placeholder="Enter here"
                    className="2xl:text-[18px] font-[400] 2xl:py-7 2xl:pl-5 w-full"
                  />
                </div>
                <div className="col-span-12 flex items-center md:col-span-6 ">
                  <div className="flex  gap-2 sm:mt-7">
                    <Checkbox className="h-5 w-5 bg-[#ffff] border-[#C6C6C6]" />
                    <Label className="text-[#7C7C7C] font-[500] text-[13px] 2xl:text-[16px]">
                      Show my number on Job Swag
                    </Label>
                  </div>
                </div>
              </div>
              <p className="text-[#7C7C7C] text-[12px] 2xl:text-[14px] font-[400] leading-5">
                By submitting the form with this box checked, you confirm that
                you are the primary user and subscriber to the telephone number
                provided, and you agree to receive calls (including using
                artificial or pre-recorded voice), texts, and WhatsApp messages
                from Indeed and employers who use Indeed at the telephone number
                provided above.
              </p>
            </div>
            <div className="space-y-7">
              <div className="space-y-2">
                <h4 className="text-[20px] 2xl:text-[24px] text-[#1B4C81] font-[600]">
                  Where are you located?
                </h4>
                <p className="2xl:text-[18px] text-[15px] text-[#888888] font-[400]">
                  This helps match you with nearby jobs
                </p>
              </div>
              <div className="grid grid-cols-12 gap-6 w-full ">
                <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                  <Label className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]">
                    Mailing Address
                  </Label>
                  <Input
                    type="text"
                    id="mail_add"
                    placeholder="Enter here"
                    className="2xl:text-[18px] font-[400] 2xl:py-7 2xl:pl-5 w-full"
                  />
                </div>
                <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                  <Label className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]">
                    Appartment Number
                  </Label>
                  <Input
                    type="text"
                    id="app_no"
                    placeholder="Enter here"
                    className="2xl:text-[18px] font-[400] 2xl:py-7 2xl:pl-5 w-full"
                  />
                </div>
                <div className="flex flex-col gap-1 col-span-12 md:col-span-4 ">
                  <Label className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]">
                    Country
                  </Label>
                  <Input
                    type="text"
                    id="country"
                    placeholder="Enter here"
                    className="2xl:text-[18px] font-[400] 2xl:py-7 2xl:pl-5 w-full"
                  />
                </div>
                <div className="flex flex-col gap-1 col-span-12 md:col-span-4 ">
                  <Label className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]">
                    State
                  </Label>
                  <Input
                    type="text"
                    id="state"
                    placeholder="Enter here"
                    className="2xl:text-[18px] font-[400] 2xl:py-7 2xl:pl-5 w-full"
                  />
                </div>
                <div className="flex flex-col gap-1 col-span-12 md:col-span-4 ">
                  <Label className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]">
                    City
                  </Label>
                  <Input
                    type="text"
                    id="city"
                    placeholder="Enter here"
                    className="2xl:text-[18px] font-[400] 2xl:py-7 2xl:pl-5 w-full"
                  />
                </div>
                <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                  <Label className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]">
                    Zip Code
                  </Label>
                  <Input
                    type="text"
                    id="zip_code"
                    placeholder="Enter here"
                    className="2xl:text-[18px] font-[400] 2xl:py-7 2xl:pl-5 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center mt-16 bg-transparent">
              <Button className="px-10 2xl:text-[17px] 2xl:py-6">
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateResume;
