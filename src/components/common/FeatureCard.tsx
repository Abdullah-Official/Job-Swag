import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface FeatureCardPropsTypes {
  img: string;
}

const FeatureCard = ({ img }: FeatureCardPropsTypes) => {
  return (
    <Card className="w-auto max-w-[400px] px-5 py-6 space-y-5 lg:mx-2 card-boxshadow rounded-xl border-none">
      <img src={img} alt="JobFeature" className="object-contain w-full" />
      <div className="space-y-2">
        <CardTitle className="text-[#1B4C81] text-[22px] font-[600]">
          Job Title Here
        </CardTitle>
        <div>
          <CardDescription className="text-[#888888] -">
            Dynamic Resources Private Limited
          </CardDescription>
          <CardDescription className="text-[#888888]">
            Location: New York
          </CardDescription>
        </div>
        <div className="flex justify-between items-center !mt-4">
          <p className="text-[#1B4C81] text-sm font-[400] ">
            USD 450 - 750 a month
          </p>
          <p className="text-[#888888]  font-[400] text-sm ">DD-MM-YYY</p>
        </div>
        <div className="flex justify-between items-center pt-2">
          <Button>Apply Now</Button>
          <button className="text-main font-[500] text-sm flex items-center gap-x-1.5">
            <Heart size={18} />
            Save Job
          </button>
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;
