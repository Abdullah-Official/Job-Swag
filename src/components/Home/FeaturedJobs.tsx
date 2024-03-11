import FeatureCard from "../common/FeatureCard";
import { Button } from "../ui/button";
import JobFeature from "@/assets/images/job-feature.png";
import JobFeature2 from "@/assets/images/job-feature2.png";
import JobFeature3 from "@/assets/images/job-feature3.png";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
  return (
    <div className=" mx-auto container">
      <h1 className="text-heading text-[22px] sm:!text-[28px] 2xl:!text-[50px] text-center font-[600]">
        Featured Jobs
      </h1>
      <div className="mt-10 flex flex-col items-center justify-center  gap-y-6">
        <div className="flex items-center justify-center ">
          <div className="grid grid-cols-1 items-center gap-y-5 gap-x-9 md:grid-cols-2 justify-center  lg:grid-cols-3 w-full">
            <FeatureCard img={JobFeature} />
            <FeatureCard img={JobFeature2} />
            <FeatureCard img={JobFeature3} />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Link to={"/featured-jobs"}>
            <Button className="w-28">See All</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
