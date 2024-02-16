import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PicAvatar from "@/assets/images/pic-avatar.png";
import VideoOpt from "@/assets/images/video-bg.png";
import UploadDoc from "@/assets/images/upload-doc.png";
import { UploadIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import AddComponent from "@/components/common/AddComponent";

const JobSeeker = () => {
  return (
    <div>
      <div className="bg-primary h-[65vh] flex items-center justify-center rounded-b-[60px]">
       
        <h3 className="text-white font-[600] text-[40px] -mt-20">Job Seeker</h3>
      </div>
      <div className="md:container flex justify-center -mt-40 mb-20">
        <div className="bg-white space-y-10 form_box_shadow rounded-2xl p-7 md:p-12 w-[90%] md:w-[80%]">
          <div className="space-y-3">
            <h2 className="text-heading !text-2xl">Profile Picture</h2>
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
            <h2 className="text-heading !text-2xl">Contact Information</h2>
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
                  htmlFor="app_no"
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
                  htmlFor="country"
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
                  htmlFor="state"
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
                  htmlFor="city"
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
                  htmlFor="zip_code"
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
                  htmlFor="zip_code"
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
            <h2 className="text-heading !text-2xl">
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
          <hr className="border-t-2 border-gray-300 my-10 border-dotted mb-4" />
          <div className="space-y-3">
            <h2 className="text-heading !text-2xl">Videos</h2>
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
          </div>
          <hr className="border-t-2 border-gray-300 my-10 border-dotted mb-4" />
          <div className="space-y-7">
            <h2 className="text-heading !text-2xl">Looking for</h2>
            <div className="grid grid-cols-12 md:items-center md:flex-row gap-x-8 gap-y-2">
              <div className="col-span-12 sm:col-span-4  lg:col-span-2">
                <p className="text-[#474747] font-[500] text-[14px]">
                  Willing to Relocate:
                </p>
              </div>
              <div className="col-span-12  sm:col-span-8 lg:col-span-10  gap-x-6 flex items-center">
                <div className="flex  gap-2 ">
                  <Checkbox className="h-5 w-5 bg-[#ffff] border-[#C6C6C6]" />
                  <Label className="text-[#7C7C7C] font-[500] text-[13px]">
                    Yes
                  </Label>
                </div>
                <div className="flex  gap-2 ">
                  <Checkbox className="h-5 w-5 bg-[#ffff] border-[#C6C6C6]" />
                  <Label className="text-[#7C7C7C] font-[500] text-[13px]">
                    No
                  </Label>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 md:items-center md:flex-row gap-x-8 gap-y-2">
              <div className="col-span-12 sm:col-span-4  lg:col-span-2">
                <p className="text-[#474747] font-[500] text-[14px]">
                  Work Type:
                </p>
              </div>
              <div className="col-span-12  sm:col-span-8 lg:col-span-10  gap-x-6 flex-wrap gap-y-4 flex items-center">
                {["On-site", "Traveling", "Remote", "Mixed"].map((v, i) => (
                  <div key={i} className="flex  gap-2 ">
                    <Checkbox className="h-5 w-5 bg-[#ffff] border-[#C6C6C6]" />
                    <Label className="text-[#7C7C7C] font-[500] text-[13px]">
                      {v}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-12 md:items-center md:flex-row gap-x-8 gap-y-2">
              <div className="col-span-12 sm:col-span-4  lg:col-span-2">
                <p className="text-[#474747] font-[500] text-[14px]">
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
                    <Label className="text-[#7C7C7C] font-[500] text-[13px]">
                      {v}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-12 md:items-center md:flex-row gap-x-8 gap-y-2">
              <div className="col-span-12 sm:col-span-4  lg:col-span-2">
                <p className="text-[#474747] font-[500] text-[14px]">Shifts:</p>
              </div>
              <div className="col-span-12  sm:col-span-8 lg:col-span-10  gap-x-6 flex flex-wrap gap-y-4 items-center">
                {["Morning", "Afternoon", "Evening", "All Options"].map(
                  (v, i) => (
                    <div key={i} className="flex  gap-2 ">
                      <Checkbox className="h-5 w-5 bg-[#ffff] border-[#C6C6C6]" />
                      <Label className="text-[#7C7C7C] font-[500] text-[13px]">
                        {v}
                      </Label>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="grid grid-cols-12 md:items-center md:flex-row md:gap-x-8 gap-y-2">
              <div className="col-span-12 sm:col-span-4  lg:col-span-2">
                <p className="text-[#474747] font-[500] text-[14px]">
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
                    <Label className="text-[#7C7C7C] font-[500] text-[13px]">
                      {v}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-12 md:items-center md:flex-row md:gap-x-8 gap-y-2">
              <div className="col-span-12 sm:col-span-4  lg:col-span-2">
                <p className="text-[#474747] font-[500] text-[14px]">Salary:</p>
              </div>
              <div className="col-span-12  sm:col-span-8 lg:col-span-10  gap-x-6 flex flex-wrap  gap-y-4 items-center">
                {["Lower Range", "Higher Range", "Currency", "Period"].map(
                  (v, i) => (
                    <div key={i}>
                      <Input
                        placeholder={v}
                        className=" bg-[#ffff] border-[#C6C6C6]"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <hr className="border-t-2 border-gray-300 my-10 border-dotted mb-4" />
          <div className="space-y-5">
            <h2 className="text-heading !text-2xl">Education Information</h2>
            <div className="grid grid-cols-12 gap-6 w-full ">
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                  htmlFor="mail_add"
                >
                  Education Level
                </Label>
                <Input
                  type="text"
                  id="mail_add"
                  placeholder="Bachelor's"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                  htmlFor="app_no"
                >
                  Field of Study
                </Label>
                <Input
                  type="text"
                  id="app_no"
                  placeholder="Business Administration"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                  htmlFor="country"
                >
                  Institution's Name
                </Label>
                <Input
                  type="text"
                  id="country"
                  placeholder="Institution's Name"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                  htmlFor="state"
                >
                  Status
                </Label>
                <Input
                  type="text"
                  id="state"
                  placeholder="Graduated"
                  className="w-full"
                />
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-[#474747] font-[500] text-[14px]">
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
          <hr className="border-t-2 border-gray-300 my-10 border-dotted mb-4" />
          <div className="space-y-5">
            <h2 className="text-heading !text-2xl">Job Experience</h2>
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
                  placeholder="Ernst n Youngs"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                  htmlFor="app_no"
                >
                  Job Title
                </Label>
                <Input
                  type="text"
                  id="app_no"
                  placeholder="Finance Executive"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                  htmlFor="country"
                >
                  Institution's Name
                </Label>
                <Input
                  type="text"
                  id="country"
                  placeholder="Institution's Name"
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
                  placeholder="Max 150 Words Allowed"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-4">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                  htmlFor="state"
                >
                  From
                </Label>
                <Input
                  type="date"
                  id="state"
                  placeholder="dd/mm/yyyy"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-4">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                  htmlFor="state"
                >
                  To
                </Label>
                <Input
                  type="date"
                  id="state"
                  placeholder="dd/mm/yyyy"
                  className="w-full"
                />
              </div>
              <div className="flex w-full col-span-12 md:col-span-4  gap-2 items-center mt-5 ">
                <Checkbox className="h-5 w-5 bg-[#ffff] border-[#C6C6C6]" />
                <Label className="text-[#7C7C7C] font-[500] text-[13px]">
                  Current Employer
                </Label>
              </div>
            </div>
            <div className="grid grid-cols-12 !mt-10 space-y-3">
              <div className="col-span-12 md:col-span-6 space-y-4 ">
                <p className="text-[#474747] font-[500] text-[14px]">
                  Was it a Supervisor Role?
                </p>
                <div className="flex space-x-5 items-center">
                  <div className="flex space-x-3 items-center">
                    <Checkbox className="h-5 w-5 bg-white border-[#C6C6C6]" />
                    <Label className="text-[#7C7C7C] font-[500] text-[13px]">
                      Current Employer
                    </Label>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <Checkbox className="h-5 w-5 bg-white border-[#C6C6C6]" />
                    <Label className="text-[#7C7C7C] font-[500] text-[13px]">
                      Current Employer
                    </Label>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex flex-col gap-1 col-span-12 md:col-span-4">
                  <Label
                    className="text-[#474747] font-[500] text-[14px]"
                    htmlFor="state"
                  >
                    Number of People Supervised
                  </Label>
                  <Input
                    type="text"
                    id="state"
                    placeholder="Enter Here"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6 w-full ">
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
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 "></div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                  htmlFor="mail_add"
                >
                  Years of Experience
                </Label>
                <Input
                  type="text"
                  id="mail_add"
                  placeholder="02"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 "></div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                  htmlFor="mail_add"
                >
                  Duties & Responsibilities
                </Label>
                <Input
                  type="text"
                  id="mail_add"
                  placeholder="Professional Skill"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6  justify-center pt-4">
                <AddComponent text="Add More" />
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
                  placeholder="Max 150 Words Allowed"
                  className="w-full"
                />
              </div>
            </div>
            <div className="!mt-10">
              <AddComponent text="Add Another Work Experience" />
            </div>
          </div>
          <hr className="border-t-2 border-gray-300 my-10 border-dotted mb-4" />
          <div className="space-y-5">
            <h2 className="text-heading !text-2xl">References</h2>
            <div className="grid grid-cols-12 gap-6 w-full ">
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                  htmlFor="mail_add"
                >
                  Reference Type
                </Label>
                <Input
                  type="text"
                  id="mail_add"
                  placeholder="Professional"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 "></div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-3 ">
                <Input
                  type="text"
                  id="country"
                  placeholder="Prefix"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-3 ">
                <Input
                  type="text"
                  id="country"
                  placeholder="Full name"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-3 ">
                <Input
                  type="text"
                  id="country"
                  placeholder="Suffix"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-3 ">
                <Input
                  type="text"
                  id="country"
                  placeholder="Title"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-3 ">
                <Input
                  type="text"
                  id="country"
                  placeholder="Employer"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-3 ">
                <Input
                  type="text"
                  id="country"
                  placeholder="Phone"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-3 ">
                <Input
                  type="text"
                  id="country"
                  placeholder="Email Address"
                  className="w-full"
                />
              </div>
            </div>
            <div className="!mt-10">
              <AddComponent text="Add Another Reference" />
            </div>
          </div>
          <hr className="border-t-2 border-gray-300 my-10 border-dotted mb-4" />
          <div className="space-y-5">
            <h2 className="text-heading !text-2xl">Other</h2>
            <div className="grid grid-cols-12 gap-6 w-full ">
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                <Label
                  className="text-[#474747] font-[500] text-[14px]"
                  htmlFor="mail_add"
                >
                  Attributes
                </Label>
                <Input
                  type="text"
                  id="mail_add"
                  placeholder="Professional Development"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-12 md:col-span-6  justify-center pt-4">
                <AddComponent text="Add More" />
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
                  placeholder="Max 150 Words Allowed"
                  className="w-full"
                />
              </div>
            </div>
            <div className="!mt-10">
              <AddComponent text="Add Another Attributes" />
            </div>
          </div>
          <hr className="border-t-2 border-gray-300 my-10 border-dotted mb-4" />
          <div className="space-y-5">
            <h2 className="text-heading !text-2xl">Immigration Status</h2>
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-6">
                <div className="flex flex-col gap-1 col-span-12 md:col-span-6 ">
                  <Label
                    className="text-[#474747] font-[500] text-[14px]"
                    htmlFor="mail_add"
                  >
                    Status
                  </Label>
                  <Input
                    type="text"
                    id="mail_add"
                    placeholder="I am a citizen - can work for any employer"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="border-t-2 border-gray-300 my-10 border-dotted mb-4" />
          <div className="space-y-5">
            <h2 className="text-heading !text-2xl">In The Media</h2>
            <div className="grid grid-cols-12 gap-6 w-full">
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
                  placeholder="Enter Here"
                  className="w-full"
                />
              </div>
              <div className="col-span-12 md:col-span-6">
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
                    placeholder="Enter Here"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <AddComponent text="Add Another Media" />
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

export default JobSeeker;
