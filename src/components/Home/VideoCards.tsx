import VideoElement from "@/assets/images/video-element.png";
import SearchIcon from "@/assets/images/card-search-icon.png";
import AdvJobIcon from "@/assets/images/adv-job-icon.png";
import PromoteIcon from "@/assets/images/promote-icon.png";
import PostJobIcon from "@/assets/images/post-job-icon.png";

export const VideoCards = () => {
  return (
    <div className=" flex flex-col items-center justify-center container w-full gap-5 xl:flex-row ">
      <div>
        <img
          src={VideoElement}
          className="object-contain w-full  lg:w-[800px] "
          alt="video_elem"
        />
      </div>
      <div className="flex flex-col gap-y-8">
        <div className=" flex flex-col gap-7 md:flex-row ">
          <div className="bg-[#E5F4F4] w-full 2xl:w-[350px] h-[175px] 2xl:h-[200px] px-10 py-9 gap-x-4 shadow-sm rounded-lg flex items-center justify-between">
            <div className="flex flex-col">
            <h4 className="text-main font-medium sm:text-[20px] 2xl:text-[30px]">
              Simple 
            </h4>
            <h4 className="text-main font-medium sm:text-[20px] 2xl:text-[30px]">
              Job Search 
            </h4>
            </div>
            <img
              src={SearchIcon}
              width={50}
              className="object-contain 2xl:w-[60px]"
              alt="search_icon"
            />
          </div>
          <div className="bg-[#E5F4F4] w-full 2xl:w-[350px] h-[175px] 2xl:h-[200px] px-10 py-9 gap-x-4 shadow-sm rounded-lg flex items-center justify-between">
            <h4 className="text-main font-medium sm:text-[20px] 2xl:text-[30px]">
              Advanced Job Search
            </h4>
            <img
              src={AdvJobIcon}
              width={60}
              className="object-contain 2xl:w-[60px]"
              alt="search_icon"
            />
          </div>
        </div>
        <div className=" flex flex-col gap-7 md:flex-row ">
          <div className="bg-[#E5F4F4] w-full 2xl:w-[350px] h-[175px] 2xl:h-[200px] px-10 py-9 gap-x-4 shadow-sm rounded-lg flex items-center justify-between">
            <h4 className="text-main text-left font-medium sm:text-[20px] 2xl:text-[30px]">
              Post a Job
            </h4>
            <img
              src={PostJobIcon}
              width={50}
              className="object-contain 2xl:w-[60px]"
              alt="search_icon"
            />
          </div>
          <div className="bg-[#E5F4F4] w-full 2xl:w-[350px] h-[175px] 2xl:h-[200px] px-10 py-9 gap-x-4 shadow-sm rounded-lg flex items-center justify-between">
            <h4 className="text-main font-medium sm:text-[20px] 2xl:text-[30px]">
              Advertise & Promote
            </h4>
            <img
              src={PromoteIcon}
              width={50}
              className="object-contain 2xl:w-[60px]"
              alt="search_icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
