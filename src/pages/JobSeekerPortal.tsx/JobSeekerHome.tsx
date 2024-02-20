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
    <div className="container my-14">
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
      </div>
      <SearchComponent />
      <div className="mt-14 border-b-[1px] overflow-x-auto w-full border-[#C6C6C6] flex items-center gap-x-5 justify-center">
        <button className="border-b-4 border-[#55A7A6] pb-2 text-[#1B4C81] text-[14px] font-bold w-full md:w-[200px] overflow-hidden whitespace-nowrap">
          Job Feed
        </button>
        <button className="pb-2 text-[#7C7C7C] text-[14px] font-[500] w-full md:w-[200px] overflow-hidden whitespace-nowrap">
          Recently Searches
        </button>
        <button className="pb-2 text-[#7C7C7C] text-[14px] font-[500] w-full md:w-[200px] overflow-hidden whitespace-nowrap">
          Recently Viewed Jobs
        </button>
      </div>
      <div className="mt-20 flex flex-wrap md:flex-row justify-center flex-col gap-x-7 gap-y-5">
        <FeatureCard img={JobFeature} />
        <FeatureCard img={JobFeature2} />
        <FeatureCard img={JobFeature3} />
      </div>
      <div className="flex justify-center items-center mt-16 bg-transparent">
        <Button
          variant="outline"
          className="text-main_green hover:text-main_green"
        >
          <PlusIcon size={20} className="mr-2" /> Create Job Alert
        </Button>
      </div>
    </div>
  );
};

export default JobSeekerHome;
