import CommonHeader from "@/components/common/CommonHeader";
import Banner from "@/assets/images/contact-banner.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="mb-20 -mt-1">
      <CommonHeader title="Contact Us" bannerImg={Banner} />
      <div className="md:container mt-16 lg:max-w-[1400px]">
        <div className="flex flex-wrap justify-center items-center flex-col   gap-x-7 gap-y-10">
          <div className="text-center space-y-4 mx-4">
            <h1 className="text-heading !text-[26px] !font-[600] 2xl:!text-[50px]">Fill the form!</h1>
            <p className="text-[#888888] font-[400] text-[14px] xl:text-[18px] 2xl:text-[22px]">
              There are many ways to donate! We appreciate your support!
            </p>
          </div>
          <div className="bg-white form_box_shadow rounded-2xl mt-4 p-7 md:p-12 w-[90%] md:w-[80%] 2xl:w-[1240px]">
            <div className="grid grid-cols-12 gap-6 w-full ">
              <div className="flex flex-col gap-2 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#4E4E4E] font-[400] text-[14px] 2xl:text-[20px]"
                  htmlFor="email"
                >
                  Full name
                </Label>
                <Input type="email" id="email" className="w-full" />
              </div>
              <div className="flex flex-col gap-2 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#4E4E4E] font-[400] text-[14px] 2xl:text-[20px]"
                  htmlFor="email"
                >
                  Phone number
                </Label>
                <Input type="text" id="email" className="w-full" />
              </div>
              <div className="flex flex-col gap-2 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#4E4E4E] font-[400] text-[14px] 2xl:text-[20px]"
                  htmlFor="email"
                >
                  Email Address
                </Label>
                <Input type="email" id="email" className="w-full" />
              </div>
              <div className="flex flex-col gap-2 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#4E4E4E] font-[400] text-[14px] 2xl:text-[20px]"
                  htmlFor="email"
                >
                  Subject
                </Label>
                <Input type="text" className="w-full" />
              </div>
              <div className="w-full gap-2 col-span-12">
                <Label
                  htmlFor="message"
                  className="text-[#4E4E4E] font-[400] text-[14px] 2xl:text-[20px]"
                >
                  Message
                </Label>
                <Textarea id="message" />
              </div>
              <div className="w-full flex flex-col md:flex-row gap-3 col-span-12">
                <Checkbox
                  className="h-5 w-5 2xl:w-7 2xl:mt-1 2xl:h-7 bg-[#DDDDDD] border-none"
                  id="terms"
                />
                <Label
                  htmlFor="terms"
                  className="text-[#4E4E4E] font-[400] text-[14px] 2xl:text-[18px] pl-1"
                >
                  I agree to terms & conditions provided by the company. By
                  providing my phone number, I agree to receive text messages
                  from the business.
                </Label>
              </div>
            </div>
            <div className="flex justify-center items-center mt-10 w-full ">
              <Button className="w-full md:w-[160px]">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
