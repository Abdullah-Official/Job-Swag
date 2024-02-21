import FeatureCard from "../common/FeatureCard";
import { Button } from "../ui/button";
import JobFeature from "@/assets/images/job-feature.png";
import JobFeature2 from "@/assets/images/job-feature2.png";
import JobFeature3 from "@/assets/images/job-feature3.png";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
  return (
    <div className="container">
      <h1 className="text-heading text-[22px] sm:!text-[28px] text-center font-[600]">
        Featured Jobs
      </h1>
      <div className="mt-6 flex flex-col  gap-y-6">
        <div className="flex flex-wrap md:flex-row  md:justify-evenly flex-col gap-x-7 gap-y-5">
          <FeatureCard img={JobFeature} />
          <FeatureCard img={JobFeature2} />
          <FeatureCard img={JobFeature3} />
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
