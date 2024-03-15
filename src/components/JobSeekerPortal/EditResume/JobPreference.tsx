import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const JobPreference = () => {
  return (
    <div className="bg-white w-full h-fit  mx-4 md:mx-0 form_box_shadow flex flex-col gap-y-10 rounded-[30px] p-7  md:p-12  ">
      <div>
        <h1 className="text-heading 2xl:!text-[30px]">Job Preferences</h1>
      </div>
      {/* MAIN BLOCK  */}

      <div className="space-y-10 ">
        <div className="grid grid-cols-12 md:items-center md:flex-row gap-x-8 gap-y-2">
          <div className="col-span-12 sm:col-span-4  lg:col-span-2">
            <p className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]">
              Willing to Relocate:
            </p>
          </div>
          <div className="col-span-12  sm:col-span-8 lg:col-span-10  gap-x-6 flex items-center">
            <div className="flex  gap-2 ">
              <Checkbox className="h-5 w-5 bg-[#ffff] border-[#C6C6C6]" />
              <Label className="text-[#7C7C7C] font-[500] text-[13px] 2xl:text-[16px]">
                Yes
              </Label>
            </div>
            <div className="flex  gap-2 ">
              <Checkbox className="h-5 w-5 bg-[#ffff] border-[#C6C6C6]" />
              <Label className="text-[#7C7C7C] font-[500] text-[13px] 2xl:text-[16px]">
                No
              </Label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 md:items-center md:flex-row gap-x-8 gap-y-2">
          <div className="col-span-12 sm:col-span-4  lg:col-span-2">
            <p className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]">
              Work Type:
            </p>
          </div>
          <div className="col-span-12  sm:col-span-8 lg:col-span-10  gap-x-6 flex-wrap gap-y-4 flex items-center">
            {["On-site", "Traveling", "Remote", "Mixed"].map((v, i) => (
              <div key={i} className="flex  gap-2 ">
                <Checkbox className="h-5 w-5 bg-[#ffff] border-[#C6C6C6]" />
                <Label className="text-[#7C7C7C] font-[500] text-[13px] 2xl:text-[16px]">
                  {v}
                </Label>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-12 md:items-center md:flex-row gap-x-8 gap-y-2">
          <div className="col-span-12 sm:col-span-4  lg:col-span-2">
            <p className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]">
              Workdays:
            </p>
          </div>
          <div className="col-span-12  sm:col-span-8 lg:col-span-10  gap-x-6 flex-wrap gap-y-4 flex items-center">
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((v, i) => (
              <div key={i} className="flex  gap-2 ">
                <Checkbox className="h-5 w-5 bg-[#ffff] border-[#C6C6C6]" />
                <Label className="text-[#7C7C7C] font-[500] text-[13px] 2xl:text-[16px]">
                  {v}
                </Label>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-12 md:items-center md:flex-row gap-x-8 gap-y-2">
          <div className="col-span-12 sm:col-span-4  lg:col-span-2">
            <p className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]">
              Shifts:
            </p>
          </div>
          <div className="col-span-12  sm:col-span-8 lg:col-span-10  gap-x-6 flex flex-wrap gap-y-4 items-center">
            {["Morning", "Afternoon", "Evening", "All Options"].map((v, i) => (
              <div key={i} className="flex  gap-2 ">
                <Checkbox className="h-5 w-5 bg-[#ffff] border-[#C6C6C6]" />
                <Label className="text-[#7C7C7C] font-[500] text-[13px] 2xl:text-[16px]">
                  {v}
                </Label>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-12 md:items-center md:flex-row md:gap-x-8 gap-y-2">
          <div className="col-span-12 sm:col-span-4  lg:col-span-2">
            <p className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]">
              Career Level:
            </p>
          </div>
          <div className="col-span-12  sm:col-span-8 lg:col-span-10  gap-x-6 flex flex-wrap gap-y-4 items-center">
            {[
              "Executive",
              "Mid-Level",
              "Entry Level",
              "Training",
              "Internship",
              "Other",
            ].map((v, i) => (
              <div key={i} className="flex  gap-2 ">
                <Checkbox className="h-5 w-5 bg-[#ffff] border-[#C6C6C6]" />
                <Label className="text-[#7C7C7C] font-[500] text-[13px] 2xl:text-[16px]">
                  {v}
                </Label>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-12  md:flex-row md:gap-x-8 gap-y-2">
          <div className="col-span-12 sm:col-span-4  lg:col-span-2">
            <p className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]">
              Salary:
            </p>
          </div>
          <div className="col-span-12  sm:col-span-8 lg:col-span-10  gap-x-6 flex flex-wrap  gap-y-4 items-center">
            {["Lower Range", "Higher Range", "Currency", "Period"].map(
              (v, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1 col-span-12 md:col-span-6 "
                >
                  <Label
                    className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]"
                    htmlFor={v}
                  >
                    {v}
                  </Label>
                  <Input
                    type="text"
                    id={v}
                    placeholder="Bachelor's"
                    className="w-full 2xl:text-[18px]"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* MAIN BLOCK  */}
      <div className="flex justify-end items-center mt-8 bg-transparent">
        <Button className="px-10 2xl:text-[17px] 2xl:py-6">
          Save & Continue
        </Button>
      </div>
    </div>
  );
};

export default JobPreference;
