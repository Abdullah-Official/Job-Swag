import FeatureCard from "../common/FeatureCard";
import { Button } from "../ui/button";

const FeaturedJobs = () => {
  return (
    <div className="container">
      <h1 className="text-heading text-center">Featured Jobs</h1>
      <div className="mt-6 flex flex-col items-center justify-center gap-y-6">
            <div className="flex flex-wrap md:flex-row  justify-center flex-col gap-x-7 gap-y-5">
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
            </div>
            <Button className="w-28">See All</Button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
