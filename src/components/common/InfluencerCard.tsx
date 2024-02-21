import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

interface InfluencerCardPropTypes {
  img: string;
}

const InfluencerCard = ({ img }: InfluencerCardPropTypes) => {
  return (
    <Card className="w-auto max-w-[400px] px-5 py-6 space-y-5 mx-2 sm:mx-0 card-boxshadow rounded-xl border-none">
      <img src={img} alt="card-img" className="object-contain" />
      <div className="space-y-2">
        <CardTitle className="text-[#1B4C81] text-[22px] font-[600]">
          Influencer Name
        </CardTitle>
        <div>
          <CardDescription className="text-[#888888] text-sm font-[400]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardDescription>
        </div>
        <div className="flex gap-x-3 items-center pt-4">
          <Button>See Content</Button>
          <Button variant="outline" className=" text-main_green px-5">
            Follow
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default InfluencerCard;
