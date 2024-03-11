import InfluencerCard from "../common/InfluencerCard";
import { Button } from "../ui/button";
import Influencer1 from "@/assets/images/influencer1.png";
import Influencer2 from "@/assets/images/influencer2.png";
import Influencer3 from "@/assets/images/influencer3.png";

const FeaturedInfluencers = () => {
  return (
    <div className="bg-[#E5F4F4] py-20  mx-auto container">
      <h1 className="text-heading text-[22px] sm:!text-[28px] 2xl:!text-[50px] text-center font-[600]">
        Featured Influencers
      </h1>
      <div className="mt-10 flex flex-col items-center justify-center  gap-y-6">
        <div className="flex items-center justify-center ">
          <div className="grid grid-cols-1 items-center gap-y-5 gap-x-9 md:grid-cols-2 justify-center  lg:grid-cols-3 w-full">
            <InfluencerCard img={Influencer1} />
            <InfluencerCard img={Influencer2} />
            <InfluencerCard img={Influencer3} />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Button className="w-28">See All</Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInfluencers;
