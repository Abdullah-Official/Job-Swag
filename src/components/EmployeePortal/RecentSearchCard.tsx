import { Button } from "../ui/button";
import { Card, CardDescription, CardTitle } from "../ui/card";


interface RecentSearchCardPropsTypes {
    img: string;
    applicantMode?: boolean
  }

const RecentSearchCard = ({img, applicantMode}: RecentSearchCardPropsTypes) => {
  return (
    <Card className="w-auto  2xl:max-w-[506px] px-6 py-8 space-y-5 mx-2 card-boxshadow rounded-xl border-none">
      <div className="flex flex-col sm:flex-row gap-y-8 gap-x-7">
        <img
          src={img}
          alt={img}
          className="object-contain w-[100px] 2xl:w-[151px] 2xl:h-[151px]"
        />
        <div>
          <div>
            <CardTitle className="text-[#1B4C81] text-[20px] 2xl:text-[30px] font-bold">
              Ronald Greyson
            </CardTitle>
            <p className="font-[600] pt-1 text-[#888888] 2xl:text-[18px] text-xs">
              Accountant Executive
            </p>
          </div>
          <div>
            <div className="pt-4 space-y-1.5">
              <p className="text-[#888888] text-xs 2xl:text-[14px]">Location: New York</p>
              <p className="text-[#888888] text-xs 2xl:text-[14px]">Availability: DD-MM-YYYY</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-1 pt-1">
        <p className="text-main text-sm font-[400] 2xl:text-[16px]">+1 589 785 4598</p>
        <p className="text-main text-sm font-[400] 2xl:text-[16px]">ronaldgreyson@outlook.com</p>
      </div>
      <hr />
      <div className="space-y-2 !mb-3">
        <p className="text-main text-[14px] font-[600] 2xl:text-[18px]">
          Career Goal Statement:
        </p>
        <CardDescription className="text-[#888888] text-[12px] 2xl:text-[16px] font-[400]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </CardDescription>
      </div>
      {
        !applicantMode ? (<Button className="text-[12px]   2xl:text-[14px] py-5 px-8 font-[500]">View Profile</Button>) : (
          <div className="!mt-8 space-y-6">
            <p className="text-[#888888] text-xs 2xl:text-[18px]">Added on <b>DD-MM-YYYY</b></p>
            <div className="flex gap-x-5">
                <Button className="2xl:text-[14px] py-5 px-8 font-[500]">Download Resume</Button>
                <Button variant="outline" className="text-main_green hover:text-main_green 2xl:text-[14px] py-5 px-8 font-[500]">View Profile</Button>
            </div>
          </div>
        )
      }
    </Card>
  );
};

export default RecentSearchCard;
