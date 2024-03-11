import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface FeatureCardPropsTypes {
  img: string;
}

const FeatureCard = ({ img }: FeatureCardPropsTypes) => {
  return (
    <Card className="w-auto 2xl:max-w-[500px]  px-6 py-8 space-y-5  card-boxshadow rounded-xl border-none">
      <div className="w-full items-center justify-center flex">
        <img src={img} alt="JobFeature" className="w-[448px]" />
      </div>
      <div className="space-y-2">
        <CardTitle className="text-[#1B4C81] text-[22px] 2xl:text-[30px] font-[600]">
          Job Title Here
        </CardTitle>
        <div className="pt-1">
          <CardDescription className="text-[#888888] 2xl:text-[18px]">
            Dynamic Resources Private Limited
          </CardDescription>
          <CardDescription className="text-[#888888] 2xl:text-[18px] pt-2">
            Location: New York
          </CardDescription>
        </div>
        <div className="flex justify-between items-center !mt-4">
          <p className="text-[#1B4C81] text-sm 2xl:text-[18px] font-[400] ">
            USD 450 - 750 a month
          </p>
          <p className="text-[#888888]  font-[400] text-sm 2xl:text-[18px] ">
            DD-MM-YYY
          </p>
        </div>
        <div className="flex justify-between items-center pt-4">
          <Button className="px-6 py-3 font-[400]">Apply Now</Button>
          <button className="text-main font-[500] text-sm 2xl:text-[18px] flex items-center gap-x-1.5">
            <Heart className="text-[18px]" />
            Save Job
          </button>
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;
