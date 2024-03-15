import AddComponent from "@/components/common/AddComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UploadDoc from "@/assets/images/upload-doc.png";
import { UploadIcon } from "lucide-react";

const Education = () => {
  return (
    <div className="bg-white w-full h-fit  mx-4 md:mx-0 form_box_shadow flex flex-col gap-y-7 rounded-[30px] p-7  md:p-12  ">
      <div>
        <h1 className="text-heading 2xl:!text-[30px]">Education</h1>
      </div>
      {/* MAIN BLOCK  */}

      <div className="space-y-8">
        <div className="grid grid-cols-12 gap-6 w-full ">
          <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
            <Label
              className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]"
              htmlFor="mail_add"
            >
              Education Level
            </Label>
            <Input
              type="text"
              id="mail_add"
              placeholder="Bachelor's"
              className="w-full 2xl:text-[18px]"
            />
          </div>
          <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
            <Label
              className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]"
              htmlFor="app_no"
            >
              Field of Study
            </Label>
            <Input
              type="text"
              id="app_no"
              placeholder="Business Administration"
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
          <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
            <Label
              className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]"
              htmlFor="state"
            >
              Status
            </Label>
            <Input
              type="text"
              id="state"
              placeholder="Graduated"
              className="w-full 2xl:text-[18px]"
            />
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]">
            Upload Documents
          </h2>
          <div className="flex flex-col gap-y-2 sm:flex-row gap-x-4 items-center">
            <img
              src={UploadDoc}
              className="object-contain h-30 w-30"
              alt="upload_doc"
            />
            <div className="space-y-2">
              <p className="text-main text-sm font-[450]">
                File Size Limited to 50MB.
              </p>
              <Button size={"sm"} className="text-xs  w-[100px]">
                <UploadIcon className="!text-[1px]" /> &nbsp; Upload
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <AddComponent text="Add Another Degree or Certification" />
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

export default Education;
