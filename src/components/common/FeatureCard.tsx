import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import JobFeature from "@/assets/images/job-feature.png";
import { Heart } from "lucide-react";

const FeatureCard = () => {
  return (
    <Card className="w-[350px] px-5 py-6 space-y-5 shadow-lg rounded-lg border-none">
      <img
        src={JobFeature}
        alt="JobFeature"
        className="object-contain w-full"
      />
      <div className="space-y-3">
        <CardTitle className="text-[#1B4C81] font-bold">
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
          <p className="text-[#1B4C81] text-sm ">USD 450 - 750 a month</p>
          <p className="text-[#888888] text-sm ">DD-MM-YYY</p>
        </div>
        <div className="flex justify-between items-center pt-2">
            <Button>Apply Now</Button>
            <button className="text-main font-medium flex items-center gap-x-1.5">
            <Heart size={20} />
            Save Job
            </button>
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;
