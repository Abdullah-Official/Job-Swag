import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FilePenLine } from "lucide-react";
import PicAvatar from "@/assets/images/profile_pic.png";
import { Textarea } from "@/components/ui/textarea";

const MyAccount = () => {
  return (
    <div className="container !my-14 2xl:!my-32 lg:max-w-[1400px] 2xl:max-w-[1600px]">
      <div className="md:container w-full md:!w-[80%]">
        <div className="flex justify-between items-center">
          <h1 className="text-heading 2xl:!text-[30px]">My Account</h1>
          <Button
            variant="outline"
            className="text-main_green hover:text-main_green 2xl:text-[18px] 2xl:py-6"
          >
            <FilePenLine size={18} className="mr-2" /> Edit Profile
          </Button>
        </div>
        <div className="flex items-center mt-5 w-full justify-center">
          <div className="bg-white space-y-10 mt-8 form_box_shadow rounded-2xl p-7 md:p-12 w-full ">
            <div className="space-y-6">
              <h2 className="text-heading 2xl:!text-[30px]">Profile Picture</h2>
              <div className="flex flex-col sm:flex-row gap-y-2  gap-x-4 items-center">
                <img
                  src={PicAvatar}
                  className="object-contain h-24 2xl:w-[130px] 2xl:h-[130px]"
                  alt="pic_avatar"
                />
                <div>
                  <h2 className="text-xl 2xl:text-[30px] text-main font-[600]">
                    John Dave
                  </h2>
                  <p className="text-xs text-[#7C7C7C] pt-1 2xl:pt-3 2xl:text-[16px] font-[500]">
                    Johndavid89@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <hr className="border-t-2 border-gray-300 my-10 border-dotted mb-4" />
            <div className="space-y-5">
              <h2 className="text-heading 2xl:!text-[30px]">Contact Information</h2>
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
                <div className="flex flex-col gap-1 col-span-12 md:col-span-6 " />
                <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                  <Label className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]">
                    Preferred Method of Contact
                  </Label>
                  <Input
                    type="text"
                    id="zip_code"
                    placeholder="Select"
                    className="2xl:text-[18px] font-[400] 2xl:py-7 2xl:pl-5 w-full"
                  />
                </div>
              </div>
            </div>
            <hr className="border-t-2 border-gray-300 my-10 border-dotted mb-4" />
            <div className="space-y-5">
              <h2 className="text-heading 2xl:!text-[30px]">Career Goals & Availability</h2>
              <div>
                <div className="grid grid-cols-12 gap-6">
                  <div className="w-full flex col-span-12 flex-col gap-1">
                    <Label
                      htmlFor="message"
                      className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]"
                    >
                      Career Global Statement
                    </Label>
                    <Textarea
                      rows={4}
                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                      id="message"
                      className="2xl:text-[16px] text-[12px] font-[400] 2xl:py-4 2xl:pl-5"
                    />
                  </div>
                  <div className="w-full flex col-span-12 md:col-span-6 flex-col gap-1">
                    <Label
                      htmlFor="date"
                      className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]"
                    >
                      Available Start Date
                    </Label>
                    <Input
                      type="date"
                      placeholder="mm-dd-yyyy"
                      id="date"
                      className="2xl:text-[18px] font-[400] 2xl:py-7 2xl:pl-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
