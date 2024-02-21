import VideoElement from "@/assets/images/video-element.png";
import SearchIcon from "@/assets/images/card-search-icon.png";
import AdvJobIcon from "@/assets/images/adv-job-icon.png";
import PromoteIcon from "@/assets/images/promote-icon.png";
import PostJobIcon from "@/assets/images/post-job-icon.png";

export const VideoCards = () => {
  return (
    <div className=" flex flex-col flex-wrap items-center justify-center container w-full gap-6 lg:flex-row ">
      <div>
        <img
          src={VideoElement}
          className="object-contain w-full  md:w-[650px] "
          alt="video_elem"
        />
      </div>
      <div className="space-y-4">
        <div className=" flex flex-col gap-4 md:flex-row ">
          <div className="bg-[#E5F4F4] w-full h-[150px] px-5 py-8 gap-x-4 shadow-sm rounded-lg flex items-center justify-between">
            <h4 className="text-main font-medium sm:text-[20px]">
              Simple Job Search
            </h4>
            <img
              src={SearchIcon}
              width={50}
              className="object-contain"
              alt="search_icon"
            />
          </div>
          <div className="bg-[#E5F4F4] w-full h-[150px] px-5 py-8 gap-x-4 shadow-sm rounded-lg flex items-center justify-between">
            <h4 className="text-main font-medium sm:text-[20px]">
              Advanced Job Search
            </h4>
            <img
              src={AdvJobIcon}
              width={60}
              className="object-contain"
              alt="search_icon"
            />
          </div>
        </div>
        <div className=" flex flex-col gap-4 md:flex-row ">
          <div className="bg-[#E5F4F4] w-full h-[150px] px-5 py-8 gap-x-4 shadow-sm rounded-lg flex items-center justify-between">
            <h4 className="text-main text-left font-medium sm:text-[20px]">
              Post a Job
            </h4>
            <img
              src={PostJobIcon}
              width={50}
              className="object-contain"
              alt="search_icon"
            />
          </div>
          <div className="bg-[#E5F4F4] w-full h-[150px] px-5 py-8 gap-x-4 shadow-sm rounded-lg flex items-center justify-between">
            <h4 className="text-main font-medium sm:text-[20px]">
              Advertise & Promote
            </h4>
            <img
              src={PromoteIcon}
              width={50}
              className="object-contain"
              alt="search_icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
