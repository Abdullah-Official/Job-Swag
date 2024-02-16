import JobFeature from "@/assets/images/job-feature.png";
import { Card, CardDescription, CardTitle } from "../ui/card";

const JobApplicationCard = () => {
  return (
    <Card className="bg-white job_app_card items-center flex gap-x-7 rounded-lg p-5 w-full">
      <img
        src={JobFeature}
        alt="JobFeatureCard"
        className="w-[200px] h-[220px] rounded-lg object-cover"
      />
      <div className="space-y-4 w-full">
        <CardTitle className="text-[#1B4C81] text-[23px] font-bold">
          Job Title Here
        </CardTitle>
        <div className="flex justify-between">
          <div className="space-y-1">
            <CardDescription className="text-[#888888]">
              Dynamic Resources Private Limited
            </CardDescription>
            <CardDescription className="text-[#888888]">
              Location: New York
            </CardDescription>
          </div>
          <div>
            <p className="text-[#1B4C81] text-sm font-[700]">
              USD 450 - 750 a month
            </p>
          </div>
        </div>
        <div>
          <CardDescription className="text-[#888888]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua....
          </CardDescription>
        </div>
        <div className="flex justify-between">
          <p className="text-[#888888] text-sm">Added on DD-MM-YYYY</p>
          <p className="text-main_green font-[500] text-sm">
            88 Applications Received
          </p>
        </div>
      </div>
    </Card>
  );
};

export default JobApplicationCard;
