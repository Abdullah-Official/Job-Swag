import SearchComponent from "@/components/common/SearchComponent";
import JobFeature from "@/assets/images/job-feature.png";
import JobFeature2 from "@/assets/images/job-feature2.png";
import JobFeature3 from "@/assets/images/job-feature3.png";
import { Link } from "react-router-dom";
import FeatureCard from "@/components/common/FeatureCard";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

const JobSeekerHome = () => {
  return (
    <div className="container !my-14 2xl:!my-32 lg:max-w-[1400px] 2xl:max-w-[1600px]">
      <div className="flex gap-4 mb-10">
        <Link className="text-main text-sm" to="/my-account">
          My Account
        </Link>
        <Link className="text-main text-sm" to="/my-resume">
          My Resume
        </Link>
        <Link className="text-main text-sm" to="/blog-post">
          Blog Post
        </Link>
        <Link className="text-main text-sm" to="/my-jobs">
          My Jobs
        </Link>
        <Link className="text-main text-sm" to="/reviews">
          Reviews
        </Link>
        <Link className="text-main text-sm" to="/notifications">
          Notifications
        </Link>
        <Link className="text-main text-sm" to="/settings">
          Settings
        </Link>
      </div>
      <SearchComponent />
      <div className="mt-20 border-b-[1px] overflow-x-auto w-full border-[#C6C6C6] flex items-center gap-x-10  justify-center">
        <button className="border-b-4 border-[#55A7A6] pb-2 2xl:pb-4 2xl:text-[24px] font-[700] text-[#1B4C81] text-[14px]  w-full 2xl:w-[260px] md:w-[200px] overflow-hidden whitespace-nowrap">
          Job Feed
        </button>
        <button className="pb-2 2xl:pb-4 2xl:text-[24px] font-[400]  text-[#7C7C7C] text-[14px] w-full 2xl:w-[260px] md:w-[200px] overflow-hidden whitespace-nowrap">
          Recent Searches
        </button>
        <button className="pb-2 2xl:pb-4 2xl:text-[24px] font-[400]  text-[#7C7C7C] text-[14px] w-full 2xl:w-[260px] md:w-[200px] overflow-hidden whitespace-nowrap">
          Recently Viewed Jobs
        </button>
      </div>
      <div className="flex items-center justify-center w-full !mt-20">
        <div className="grid grid-cols-1 items-center gap-y-7 gap-x-8 md:grid-cols-2 justify-center  lg:grid-cols-3 w-full">
          <FeatureCard img={JobFeature} />
          <FeatureCard img={JobFeature2} />
          <FeatureCard img={JobFeature3} />
        </div>
      </div>
      <div className="flex justify-center items-center mt-16 bg-transparent">
        <Button
          variant="outline"
          className="text-main_green hover:text-main_green 2xl:text-[18px] 2xl:py-6"
        >
          <PlusIcon size={22} className="mr-2" /> Create Job Alert
        </Button>
      </div>
    </div>
  );
};

export default JobSeekerHome;
