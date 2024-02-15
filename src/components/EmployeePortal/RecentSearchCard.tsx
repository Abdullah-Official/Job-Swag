import { Button } from "../ui/button";
import { Card, CardDescription, CardTitle } from "../ui/card";


interface RecentSearchCardPropsTypes {
    img: string;
  }

const RecentSearchCard = ({img}: RecentSearchCardPropsTypes) => {
  return (
    <Card className="w-auto max-w-[350px] px-5 py-7 space-y-5 mx-2 card-boxshadow rounded-xl border-none">
      <div className="flex gap-x-4">
        <img
          src={img}
          alt={img}
          className="object-contain w-[100px]"
        />
        <div>
          <div>
            <CardTitle className="text-[#1B4C81] text-[20px] font-bold">
              Ronald Greyson
            </CardTitle>
            <p className="font-[500] text-[#888888] text-xs">
              Accountant Executive
            </p>
          </div>
          <div>
            <div className="pt-2">
              <p className="text-[#888888] text-xs">Location: New York</p>
              <p className="text-[#888888] text-xs">Availability: DD-MM-YYYY</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-main text-sm">+1 589 785 4598</p>
        <p className="text-main text-sm">ronaldgreyson@outlook.com</p>
      </div>
      <hr />
      <div className="space-y-1.5">
        <p className="text-main text-[14px] font-bold">
          Career Goal Statement:
        </p>
        <CardDescription className="text-[#888888] text-[12px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </CardDescription>
      </div>
      <Button className="text-[12px] px-5">View Profile</Button>
    </Card>
  );
};

export default RecentSearchCard;
