import InfluencerCard from "../common/InfluencerCard";
import { Button } from "../ui/button";

const FeaturedInfluencers = () => {
  return (
   <div className="bg-[#E5F4F4] py-10">
     <div className="container">
      <h1 className="text-heading text-center">Featured Influencers</h1>
      <div className="mt-6 flex flex-col items-center justify-center gap-y-6">
            <div className="flex flex-wrap md:flex-row justify-center flex-col gap-x-7 gap-y-5">
                <InfluencerCard />
                <InfluencerCard />
                <InfluencerCard />
            </div>
            <Button className="w-28">See All</Button>
      </div>
    </div>
   </div>
  );
};

export default FeaturedInfluencers;
