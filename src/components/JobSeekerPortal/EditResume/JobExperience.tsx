import AddComponent from "@/components/common/AddComponent";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const JobExperience = () => {
  return (
    <div className="bg-white w-full h-fit  mx-4 md:mx-0 form_box_shadow flex flex-col gap-y-10 rounded-[30px] p-7  md:p-12  ">
      <div>
        <h1 className="text-heading 2xl:!text-[30px]">Job Experiences</h1>
      </div>
      {/* MAIN BLOCK  */}

      <div className="space-y-8">
        <div className="grid grid-cols-12 gap-6 w-full ">
          <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
            <Label
              className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]"
              htmlFor="mail_add"
            >
              Employer's Name
            </Label>
            <Input
              type="text"
              id="mail_add"
              placeholder="Ernst n Youngs"
              className="w-full 2xl:text-[18px]"
            />
          </div>
          <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
            <Label
              className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]"
              htmlFor="app_no"
            >
              Job Title
            </Label>
            <Input
              type="text"
              id="app_no"
              placeholder="Finance Executive"
              className="w-full 2xl:text-[18px]"
            />
          </div>
          <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
            <Label
              className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]"
              htmlFor="country"
            >
              Institution's Name
            </Label>
            <Input
              type="text"
              id="country"
              placeholder="Institution's Name"
              className="w-full 2xl:text-[18px]"
            />
          </div>
          <div className="flex flex-col gap-1 col-span-12">
            <Label
              className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]"
              htmlFor="country"
            >
              Description
            </Label>
            <Textarea
              id="country"
              placeholder="Max 150 Words Allowed"
              className="w-full 2xl:text-[18px]"
              rows={4}
            />
          </div>
          <div className="flex flex-col gap-1 col-span-12 md:col-span-4">
            <Label
              className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]"
              htmlFor="state"
            >
              From
            </Label>
            <Input
              //   type="date"
              id="state"
              placeholder="dd/mm/yyyy"
              className="w-full 2xl:text-[18px]"
            />
          </div>
          <div className="flex flex-col gap-1 col-span-12 md:col-span-4">
            <Label
              className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]"
              htmlFor="state"
            >
              To
            </Label>
            <Input
              //   type="date"
              id="state"
              placeholder="dd/mm/yyyy"
              className="w-full 2xl:text-[18px]"
            />
          </div>
          <div className="flex w-full col-span-12 md:col-span-4  gap-2 items-center mt-5 ">
            <Checkbox className="h-5 w-5 bg-[#ffff] border-[#C6C6C6]" />
            <Label className="text-[#7C7C7C] font-[500] text-[13px] 2xl:text-[16px]">
              Current Employer
            </Label>
          </div>
        </div>
        <div className="grid grid-cols-12 !mt-10 space-y-3">
          <div className="col-span-12 md:col-span-6 space-y-4 ">
            <p className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]">
              Was it a Supervisor Role?
            </p>
            <div className="flex space-x-5 items-center">
              <div className="flex space-x-3 items-center">
                <Checkbox className="h-5 w-5 bg-white border-[#C6C6C6]" />
                <Label className="text-[#7C7C7C] font-[500] text-[13px] 2xl:text-[16px]">
                  Current Employer
                </Label>
              </div>
              <div className="flex space-x-3 items-center">
                <Checkbox className="h-5 w-5 bg-white border-[#C6C6C6]" />
                <Label className="text-[#7C7C7C] font-[500] text-[13px] 2xl:text-[16px]">
                  Current Employer
                </Label>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="flex flex-col gap-1 col-span-12 md:col-span-4">
              <Label
                className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]"
                htmlFor="state"
              >
                Number of People Supervised
              </Label>
              <Input
                type="text"
                id="state"
                placeholder="Enter Here"
                className="w-full 2xl:text-[18px]"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 w-full ">
          <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
            <Label
              className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]"
              htmlFor="mail_add"
            >
              Type of Provider
            </Label>
            <Input
              type="text"
              id="mail_add"
              placeholder="Limited Liability Company (LLC)"
              className="w-full 2xl:text-[18px]"
            />
          </div>
          <div className="flex flex-col gap-1 col-span-12 md:col-span-6 "></div>
          <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
            <Label
              className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]"
              htmlFor="mail_add"
            >
              Years of Experience
            </Label>
            <Input
              type="text"
              id="mail_add"
              placeholder="02"
              className="w-full 2xl:text-[18px]"
            />
          </div>
          <div className="flex flex-col gap-1 col-span-12 md:col-span-6 "></div>
          <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
            <Label
              className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]"
              htmlFor="mail_add"
            >
              Duties & Responsibilities
            </Label>
            <Input
              type="text"
              id="mail_add"
              placeholder="Professional Skill"
              className="w-full 2xl:text-[18px]"
            />
          </div>
          <div className="flex flex-col gap-1 col-span-12 md:col-span-6  justify-center pt-4">
            <AddComponent text="Add More" />
          </div>
          <div className="flex flex-col gap-1 col-span-12">
            <Label
              className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]"
              htmlFor="country"
            >
              Description
            </Label>
            <Textarea
              id="country"
              placeholder="Max 150 Words Allowed"
              className="w-full 2xl:text-[18px]"
              rows={4}
            />
          </div>
        </div>
        <div className="!mt-10">
          <AddComponent text="Add Another Work Experience" />
        </div>
      </div>
      <hr className="border-t-2 border-gray-300  border-dashed mb-4" />

      {/* MAIN BLOCK  */}
      <div className="flex justify-end items-center mt-8 bg-transparent">
        <Button className="px-10 2xl:text-[17px] 2xl:py-6">
          Save & Continue
        </Button>
      </div>
    </div>
  );
};

export default JobExperience;
