import FeatureCard from "../common/FeatureCard";
import { Button } from "../ui/button";
import JobFeature from "@/assets/images/job-feature.png";
import JobFeature2 from "@/assets/images/job-feature2.png";
import JobFeature3 from "@/assets/images/job-feature3.png";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
  return (
    <div className="container">
      <h1 className="text-heading text-center">Featured Jobs</h1>
      <div className="mt-6 flex flex-col items-center justify-center gap-y-6">
        <div className="flex flex-wrap md:flex-row  justify-center flex-col gap-x-7 gap-y-5">
          <FeatureCard img={JobFeature} />
          <FeatureCard img={JobFeature2} />
          <FeatureCard img={JobFeature3} />
        </div>
        <Link to={"/featured-jobs"}>
        <Button className="w-28">See All</Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedJobs;
