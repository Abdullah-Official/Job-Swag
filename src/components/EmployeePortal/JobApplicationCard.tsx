import JobFeature from "@/assets/images/job-feature.png";
import { Card, CardDescription, CardTitle } from "../ui/card";

const JobApplicationCard = () => {
  return (
    <Card className="bg-white 2xl:max-w-[1140px] job_app_card items-center flex flex-col gap-y-7 md:flex-row gap-x-7 rounded-lg p-5 w-full">
      <img
        src={JobFeature}
        alt="JobFeatureCard"
        className="w-[200px] h-[220px] 2xl:w-[265px] 2xl:h-[265px] rounded-lg object-cover"
      />
      <div className="space-y-4 w-full">
        <CardTitle className="text-[#1B4C81] text-[23px]  font-[600] 2xl:text-[30px]">
          Job Title Here
        </CardTitle>
        <div className="flex justify-between">
          <div className="space-y-1 2xl:space-y-2">
            <CardDescription className="text-[#888888] 2xl:text-[18px]">
              Dynamic Resources Private Limited
            </CardDescription>
            <CardDescription className="text-[#888888] 2xl:text-[18px]">
              Location: New York
            </CardDescription>
          </div>
          <div>
            <p className="text-[#1B4C81] text-sm font-[600] 2xl:text-[18px]">
              USD 450 - 750 a month
            </p>
          </div>
        </div>
        <div>
          <CardDescription className="text-[#888888] font-[500] 2xl:text-[16px] leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. adipiscing elit.....
          </CardDescription>
        </div>
        <div className="flex justify-between pt-1">
          <p className="text-[#888888] text-sm 2xl:text-[18px]">Added on DD-MM-YYYY</p>
          <p className="text-main_green font-[500] text-sm 2xl:text-[18px]">
            88 Applications Received
          </p>
        </div>
      </div>
    </Card>
  );
};

export default JobApplicationCard;
