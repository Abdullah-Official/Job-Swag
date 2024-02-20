import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface FeatureCardPropsTypes {
  img: string;
}

const FeatureCard = ({ img }: FeatureCardPropsTypes) => {
  return (
    <Card className="w-auto max-w-[350px] px-5 py-6 space-y-5 mx-2 card-boxshadow rounded-xl border-none">
      <img src={img} alt="JobFeature" className="object-contain w-full" />
      <div className="space-y-3">
        <CardTitle className="text-[#1B4C81] text-[22px] font-[600]">
          Job Title Here
        </CardTitle>
        <div>
          <CardDescription className="text-[#888888]">
            Dynamic Resources Private Limited
          </CardDescription>
          <CardDescription className="text-[#888888]">
            Location: New York
          </CardDescription>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#1B4C81] text-sm font-medium ">USD 450 - 750 a month</p>
          <p className="text-[#888888]  font-medium text-sm ">DD-MM-YYY</p>
        </div>
        <div className="flex justify-between items-center pt-2">
          <Button>Apply Now</Button>
          <button className="text-main font-medium text-sm flex items-center gap-x-1.5">
            <Heart size={18} />
            Save Job
          </button>
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;
