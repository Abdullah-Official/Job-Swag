import { NotificationCard } from "@/components/JobSeekerPortal/NotificationCard";
import SettingIcon from "@/assets/images/setting.png";

const Notifications = () => {
  return (
    <div className="container mx-auto !my-14 2xl:!my-32 lg:max-w-[1400px] 2xl:max-w-[1600px]">
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
        <h1 className="text-heading 2xl:!text-[35px]">Notifications</h1>
        <div className="flex gap-8 items-center">
          <button className="border-1 border border-[#5D6A7B] text-[#5D6A7B] rounded-md 2xl:px-7 2xl:py-4 py-2.5 px-5 font-[500] text-sm 2xl:text-[18px]">
            Mark All Read
          </button>
          <img
            src={SettingIcon}
            alt="SettingIcon"
            className="object-contain w-[33.71px] h-[35px]"
          />
        </div>
      </div>
      <div className="mt-10 border-b-[1px] overflow-x-auto w-full border-[#C6C6C6] flex items-center gap-x-8 justify-center">
        <button className="border-b-4 border-[#55A7A6] pb-2 2xl:pb-4 2xl:text-[24px] font-[700] text-[#1B4C81] text-[14px]  w-full 2xl:w-[260px] md:w-[200px] overflow-hidden whitespace-nowrap">
          All
        </button>
        <button className="pb-2 2xl:pb-4 2xl:text-[24px] font-[400]  text-[#7C7C7C] text-[14px] w-full 2xl:w-[260px] md:w-[200px] overflow-hidden whitespace-nowrap">
          Read
        </button>
        <button className="pb-2 2xl:pb-4 2xl:text-[24px] font-[400] text-[#7C7C7C] text-[14px] w-full 2xl:w-[260px] md:w-[200px] overflow-hidden whitespace-nowrap">
          Not Read
        </button>
      </div>
      <div className=" flex flex-wrap md:flex-row justify-center flex-col gap-x-7 gap-y-5">
        <div className="w-full space-y-4">
          <div className="flex items-center justify-center w-full !mt-20">
            <div className="grid grid-cols-1 items-center gap-9 justify-center  w-full">
              <NotificationCard />
              <NotificationCard />
              <NotificationCard />
              <NotificationCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
