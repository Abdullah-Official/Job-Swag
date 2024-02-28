import InfluencerCard from "../common/InfluencerCard";
import { Button } from "../ui/button";
import Influencer1 from "@/assets/images/influencer1.png";
import Influencer2 from "@/assets/images/influencer2.png";
import Influencer3 from "@/assets/images/influencer3.png";

const FeaturedInfluencers = () => {
  return (
    <div className="bg-[#E5F4F4] py-20">
      <div className="container">
        <h1 className="text-heading text-[22px] sm:!text-[28px] text-center font-[600]">
          Featured Influencers
        </h1>
        <div className="mt-6 flex flex-col  gap-y-6">
          <div className="flex md:flex-row items-center  md:justify-evenly mt-4 flex-col gap-x-7 gap-y-5">
            <InfluencerCard img={Influencer1} />
            <InfluencerCard img={Influencer2} />
            <InfluencerCard img={Influencer3} />
          </div>
          <div className="flex justify-center mt-4">
            <Button className="w-28">See All</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInfluencers;
