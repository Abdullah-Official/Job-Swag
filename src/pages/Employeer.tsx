import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PicAvatar from "@/assets/images/pic-avatar.png";
import VideoOpt from "@/assets/images/video-bg.png";
import { UploadIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import AddComponent from "@/components/common/AddComponent";

const Employeer = () => {
  return (
    <div>
      <div className="bg-primary h-[65vh] flex items-center justify-center rounded-b-[60px]">
        <h3 className="text-white font-[600] text-[40px] -mt-20">Employeer</h3>
      </div>
      <div className="md:container flex justify-center -mt-40 mb-20">
        <div className="bg-white space-y-10 form_box_shadow rounded-2xl p-7 md:p-12 w-[90%] md:w-[80%]">
          <div className="space-y-3">
            <h2 className="text-heading !text-2xl">Company Logo</h2>
            <div className="flex flex-col gap-y-2 sm:flex-row gap-x-4 items-center">
              <img
                src={PicAvatar}
                className="object-contain h-30 w-30"
                alt="pic_avatar"
              />
              <div className="space-y-2">
                <p className="text-main text-sm font-[450]">
                  File Size Limited to 2MB.
                </p>
                <Button size={"sm"} className="text-xs  w-[100px]">
                  <UploadIcon className="!text-[1px]" /> &nbsp; Upload
                </Button>
              </div>
            </div>
          </div>
          <hr className="border-t-2 border-gray-300 my-10 border-dotted mb-4" />
          <div className="space-y-5">
            <h2 className="text-heading !text-2xl">About Company</h2>
            <div className="grid grid-cols-12 gap-6 w-full ">
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                  htmlFor="mail_add"
                >
                  Employer's Name
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
                  htmlFor="mail_add"
                >
                  Type of Provider
                </Label>
                <Input
                  type="text"
                  id="mail_add"
                  placeholder="Limited Liability Company (LLC)"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                  htmlFor="mail_add"
                >
                  EIN
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
                  htmlFor="mail_add"
                >
                  URLs
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
                  htmlFor="mail_add"
                >
                  Number of Employees
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
                  htmlFor="mail_add"
                >
                  Annual Budget
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
                  htmlFor="mail_add"
                >
                  Number of Location
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
                  htmlFor="mail_add"
                >
                  Year Established
                </Label>
                <Input
                  type="text"
                  id="mail_add"
                  placeholder="Enter here"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                  htmlFor="country"
                >
                  Description
                </Label>
                <Textarea
                  id="country"
                  placeholder="Max 1000 Words Allowed"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <hr className="border-t-2 border-gray-300 my-10 border-dotted mb-4" />
          <div className="space-y-5">
            <h2 className="text-heading !text-2xl">Contact Information</h2>
            <div className="grid grid-cols-12 gap-6 w-full ">
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                  htmlFor="mail_add"
                >
                  Full name
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
                  htmlFor="mail_add"
                >
                  Title
                </Label>
                <Input
                  type="text"
                  id="mail_add"
                  placeholder="Limited Liability Company (LLC)"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                  htmlFor="mail_add"
                >
                  Email Address
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
                  htmlFor="mail_add"
                >
                  Phone Number
                </Label>
                <Input
                  type="text"
                  id="mail_add"
                  placeholder="Enter here"
                  className="w-full"
                />
              </div>
              <div className="flex  gap-2 col-span-12 md:col-span-6">
                <Checkbox className="h-5 w-5 bg-[#ffff] border-[#C6C6C6]" />
                <Label className="text-[#7C7C7C] font-[500] text-[13px]">
                  Main Person to Contact
                </Label>
              </div>
            </div>
            <div className="!mt-6">
              <AddComponent text="Add Another Contact" />
            </div>
          </div>
          <hr className="border-t-2 border-gray-300 my-10 border-dotted mb-4" />
          <div className="space-y-5">
            <h2 className="text-heading !text-2xl">Locations</h2>
            <div className="grid grid-cols-12 gap-6 w-full ">
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                  htmlFor="mail_add"
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
                  htmlFor="mail_add"
                >
                  Zip Code
                </Label>
                <Input
                  type="text"
                  id="mail_add"
                  placeholder="Enter here"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-4 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                  htmlFor="mail_add"
                >
                  Country
                </Label>
                <Input
                  type="text"
                  id="mail_add"
                  placeholder="Enter here"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-4 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                  htmlFor="mail_add"
                >
                  State
                </Label>
                <Input
                  type="text"
                  id="mail_add"
                  placeholder="Enter here"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-4 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                  htmlFor="mail_add"
                >
                  City
                </Label>
                <Input
                  type="text"
                  id="mail_add"
                  placeholder="Enter here"
                  className="w-full"
                />
              </div>
            </div>
            <div className="!mt-6">
              <AddComponent text="Add Another Location" />
            </div>
          </div>
          <hr className="border-t-2 border-gray-300 my-10 border-dotted mb-4" />
          <div className="space-y-3">
            <h2 className="text-heading !text-2xl">Images and Videos</h2>
            <div className="flex flex-col gap-y-2 sm:flex-row gap-x-4 items-center">
              <img
                src={VideoOpt}
                className="object-contain h-30 w-30"
                alt="pic_avatar"
              />
              <div className="space-y-2">
                <p className="text-main text-sm font-[450]">
                  File Size Limited to 20MB.
                </p>
                <Button size={"sm"} className="text-xs  w-[100px]">
                  <UploadIcon className="!text-[1px]" /> &nbsp; Upload
                </Button>
              </div>
            </div>
            <div className="!mt-6">
              <AddComponent text="Add More Images & Videos" />
            </div>
          </div>
          <div className="flex justify-end">
            <Button className="w-full md:w-[160px]">Create Profile</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employeer;
