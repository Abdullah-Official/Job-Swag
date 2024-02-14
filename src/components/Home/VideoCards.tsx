import VideoElement from "@/assets/images/video-element.png";
import SearchIcon from "@/assets/images/card-search-icon.png";
import AdvJobIcon from "@/assets/images/adv-job-icon.png";
import PromoteIcon from "@/assets/images/promote-icon.png";
import PostJobIcon from "@/assets/images/post-job-icon.png";

export const VideoCards = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-10 lg:flex-row ">
      <div>
        <img
          src={VideoElement}
          className="object-contain w-full h-full md:h-[300px]"
          alt="video_elem"
        />
      </div>
      <div className="space-y-4">
        <div className=" flex flex-col gap-4 md:flex-row ">
          <div className="bg-[#E5F4F4] w-[200px] h-[110px] px-5 py-8 gap-x-4 shadow-sm rounded-lg flex items-center justify-between">
            <h4 className="text-main font-medium sm:text-[15px]">
              Simple Job Search
            </h4>
            <img
              src={SearchIcon}
              width={35}
              className="object-contain"
              alt="search_icon"
            />
          </div>
          <div className="bg-[#E5F4F4] w-[200px] h-[110px] px-5 py-8 gap-x-4 shadow-sm rounded-lg flex items-center justify-between">
            <h4 className="text-main font-medium sm:text-[15px]">
              Advanced Job Search
            </h4>
            <img
              src={AdvJobIcon}
              width={40}
              className="object-contain"
              alt="search_icon"
            />
          </div>
        </div>
        <div className=" flex flex-col gap-4 md:flex-row ">
          <div className="bg-[#E5F4F4] w-[200px] h-[110px] px-5 py-8 gap-x-4 shadow-sm rounded-lg flex items-center justify-between">
            <h4 className="text-main text-left font-medium sm:text-[15px]">
              Post a Job
            </h4>
            <img
              src={PostJobIcon}
              width={40}
              className="object-contain"
              alt="search_icon"
            />
          </div>
          <div className="bg-[#E5F4F4] w-[200px] h-[110px] px-5 py-8 gap-x-4 shadow-sm rounded-lg flex items-center justify-between">
            <h4 className="text-main font-medium sm:text-[15px]">
              Advertise & Promote
            </h4>
            <img
              src={PromoteIcon}
              width={40}
              className="object-contain"
              alt="search_icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
