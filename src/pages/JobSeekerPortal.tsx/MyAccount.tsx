import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FilePenLine } from "lucide-react";
import PicAvatar from "@/assets/images/profile_pic.png"
import { Textarea } from "@/components/ui/textarea";

const MyAccount = () => {
  return (
    <div className="container my-14">
      <div className="md:container w-full md:!w-[80%]">
      <div className="flex justify-between items-center">
            <h1 className="text-heading">My Account</h1>
            <Button
          variant="outline"
          className="text-main_green hover:text-main_green"
        >
       <FilePenLine size={16} className="mr-2" /> Edit Profile
        </Button>
      </div>
      <div className="flex items-center w-full justify-center">
      <div className="bg-white space-y-10 mt-8 form_box_shadow rounded-2xl p-7 md:p-12 w-full ">
          <div className="space-y-6">
            <h2 className="text-heading">Profile Picture</h2>
            <div className="flex flex-col sm:flex-row gap-y-2  gap-x-4 items-center">
              <img
                src={PicAvatar}
                className="object-contain h-24 w-2h-24"
                alt="pic_avatar"
              />
              <div>
                <h2 className="text-xl text-main font-[600]">John Dave</h2>
                <p className="text-xs text-[#7C7C7C] pt-1">Johndavid89@gmail.com</p>
              </div>
            </div>
          </div>
          <hr className="border-t-2 border-gray-300 my-10 border-dotted mb-4" />
          <div className="space-y-5">
            <h2 className="text-heading">Contact Information</h2>
            <div className="grid grid-cols-12 gap-6 w-full ">
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                >
                  Mailing Address
                </Label>
                <Input
                  type="text"
                  id="mail_add"
                  placeholder="Enter here"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                >
                  Appartment Number
                </Label>
                <Input
                  type="text"
                  id="app_no"
                  placeholder="Enter here"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-4 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                >
                  Country
                </Label>
                <Input
                  type="text"
                  id="country"
                  placeholder="Enter here"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-4 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                >
                  State
                </Label>
                <Input
                  type="text"
                  id="state"
                  placeholder="Enter here"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-4 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                >
                  City
                </Label>
                <Input
                  type="text"
                  id="city"
                  placeholder="Enter here"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                >
                  Zip Code
                </Label>
                <Input
                  type="text"
                  id="zip_code"
                  placeholder="Enter here"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 " />
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                >
                  Preferred Method of Contact
                </Label>
                <Input
                  type="text"
                  id="zip_code"
                  placeholder="Select"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <hr className="border-t-2 border-gray-300 my-10 border-dotted mb-4" />
          <div className="space-y-5">
            <h2 className="text-heading">
              Career Goals & Availability
            </h2>
            <div>
              <div className="grid grid-cols-12 gap-6">
                <div className="w-full flex col-span-12 flex-col gap-1">
                  <Label
                    htmlFor="message"
                    className="text-[#474747] font-[500] text-[14px]"
                  >
                    Career Global Statement
                  </Label>
                  <Textarea placeholder="Max 50 Words Allowed" id="message" />
                </div>
                <div className="w-full flex col-span-12 md:col-span-6 flex-col gap-1">
                  <Label
                    htmlFor="date"
                    className="text-[#474747] font-[500] text-[14px]"
                  >
                    Available Start Date
                  </Label>
                  <Input type="date" placeholder="mm-dd-yyyy" id="date" />
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
