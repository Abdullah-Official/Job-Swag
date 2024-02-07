import VideoElement from "@/assets/images/video-element.png";
import SearchIcon from "@/assets/images/card-search-icon.png";

export const VideoCards = () => {
  return (
    <div className="container flex flex-col md:flex-row gap-y-7 justify-around items-center">
      <div className="w-full">
        <img
          src={VideoElement}
          className="object-contain w-full h-full lg:h-[300px]"
          alt="video_elem"
        />
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 w-full justify-center items-center">
        <div className="bg-[#E5F4F4] w-full md:w-fit px-5 py-10 gap-x-4 shadow-sm rounded-lg flex items-center justify-center">
          <h4 className="text-main font-medium sm:text-[18px] ">
            Simple Job Search
          </h4>
          <img
            src={SearchIcon}
            width={40}
            className="object-contain"
            alt="search_icon"
          />
        </div>
        <div className="bg-[#E5F4F4] w-full md:w-fit px-5 py-10 gap-x-4 shadow-sm rounded-lg flex items-center justify-center">
          <h4 className="text-main font-medium sm:text-[18px] ">
            Simple Job Search
          </h4>
          <img
            src={SearchIcon}
            width={40}
            className="object-contain"
            alt="search_icon"
          />
        </div>
        <div className="bg-[#E5F4F4] w-full md:w-fit px-5 py-10 gap-x-4 shadow-sm rounded-lg flex items-center justify-center">
          <h4 className="text-main font-medium sm:text-[18px] ">
            Simple Job Search
          </h4>
          <img
            src={SearchIcon}
            width={40}
            className="object-contain"
            alt="search_icon"
          />
        </div>
        <div className="bg-[#E5F4F4] w-full md:w-fit px-5 py-10 gap-x-4 shadow-sm rounded-lg flex items-center justify-center">
          <h4 className="text-main font-medium sm:text-[18px] ">
            Simple Job Search
          </h4>
          <img
            src={SearchIcon}
            width={40}
            className="object-contain"
            alt="search_icon"
          />
        </div>
      </div>
    </div>
  );
};
