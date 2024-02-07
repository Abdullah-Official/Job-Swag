import VideoElement from "@/assets/images/video-element.png";
import SearchIcon from "@/assets/images/card-search-icon.png";

export const VideoCards = () => {
  return (
    <div className="container flex flex-col lg:flex-row gap-y-7  gap-x-5  items-center">
      <div className="w-full">
        <img
          src={VideoElement}
          className="object-contain w-full h-full md:h-[300px]"
          alt="video_elem"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center w-full">
  <div className="bg-[#E5F4F4]  col-span-full md:col-span-1 px-5 py-8 gap-x-4 shadow-sm rounded-lg flex items-center justify-center">
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
  <div className="bg-[#E5F4F4] col-span-full md:col-span-1 px-5 py-8 gap-x-4 shadow-sm rounded-lg flex items-center justify-center">
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
  <div className="bg-[#E5F4F4] col-span-full md:col-span-1 px-5 py-8 gap-x-4 shadow-sm rounded-lg flex items-center justify-center">
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
  <div className="bg-[#E5F4F4] col-span-full md:col-span-1 px-5 py-8 gap-x-4 shadow-sm rounded-lg flex items-center justify-center">
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
</div>

    </div>
  );
};
