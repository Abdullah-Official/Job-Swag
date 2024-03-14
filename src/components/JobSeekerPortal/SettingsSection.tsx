import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const SettingsSection = () => {
  const inputsData = [
    {
      title: "Account Type",
      placeholder: "Job Seeker",
      btnTxt: "Change Account Type",
    },
    {
      title: "Email Address",
      placeholder: "johndave19@gmail.com",
      btnTxt: "Change Email",
    },
    {
      title: "Password",
      placeholder: "xxxxxxxxxxxx",
      btnTxt: "Change Password",
    },
    {
      title: "Phone Number",
      placeholder: "+4 586 854 9426",
      btnTxt: "Change Number",
    },
  ];

  return (
    <div className="bg-white side-card h-fit flex flex-col gap-y-7 rounded-xl py-6 pb-10 px-8 2xl:py-10 2xl:px-9  w-full ">
      <h1 className="text-heading !font-[700] !text-[24px] lg:!text-[22px] 2xl:!text-[30px]">
        Account Settings
      </h1>
      <div className="space-y-4">
        {inputsData.map((v, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row sm:gap-5 items-center"
          >
            <div className="flex flex-col gap-1 w-full ">
              <Label
                className="text-[#474747] font-[500] text-[14px] 2xl:text-[18px]"
                htmlFor={v.title}
              >
                {v.title}
              </Label>
              <Input
                type="text"
                id={v.title}
                placeholder={v.placeholder}
                className="w-full 2xl:text-[18px] py-5 lg:!max-w-[500px]"
              />
            </div>
            <div className="w-full flex pt-6">
              <Button
                className="text-main_green hover:text-main_green !font-[400] lg:!w-[250px] py-5"
                variant="outline"
              >
                {v.btnTxt}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <hr className="border-t-[2px] border-gray-300  border-dashed mb-4" />
        <div className="space-y-2 my-6">
          <p className="text-[#474747] font-[500] 2xl:text-[18px] text-sm">
            Third-party applications
          </p>
          <p className="text-[#7C7C7C] font-[500] 2xl:text-[18px] text-sm">
            No third-party applications have access to your account
          </p>
        </div>
        <hr className="border-t-[2px] border-gray-300  border-dashed mb-4" />
        <div className="mt-7">
        <Button
          className="text-main_green hover:text-main_green !font-[400] !w-[250px] py-5"
          variant="outline"
        >
          Deactivate My Account
        </Button>
      </div>
      </div>
      
    </div>
  );
};

export default SettingsSection;
