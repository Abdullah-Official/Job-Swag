import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Ad1 from "@/assets/images/ad1.png";
import Ad2 from "@/assets/images/ad2.png";
import Ad3 from "@/assets/images/ad3.png";

const Advertisement = () => {
  return (
    <div>
      <div className="flex flex-col  gap-y-2 gap-x-4">
        <h4 className="text-[19px] text-main font-[600] 2xl:text-[26px]">Filter by</h4>
        <div className="w-full flex flex-col md:flex-row justify-center  items-center gap-4">
          {["Total Clicks", "Location", "Gender", "Age Group"].map((v, i) => (
            <Select key={i}>
              <SelectTrigger className="border-[#C6C6C6] text-sm text-main  ">
                <SelectValue placeholder={v} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          ))}
          {/* <Input type="text" placeholder="Location" /> */}
          <Button className="w-full md:w-fit px-8 font-[500] ">Filter</Button>
        </div>
      </div>
      <div className="mt-9">
      <div className="flex items-center justify-center ">
          <div className="grid grid-cols-1 items-center gap-y-5 gap-x-7 md:grid-cols-2 justify-center  lg:grid-cols-3 w-full">
          <div>
            <img src={Ad1} className="object-contain w-[352.71px] h-[278.83px] " alt="ad1" />
          </div>
          <div>
            <img src={Ad2} className="object-contain w-[352.71px] h-[278.83px] " alt="ad2" />
          </div>
          <div>
            <img src={Ad3} className="object-contain w-[352.71px] h-[278.83px] " alt="ad3" />
          </div>
          <div>
            <img src={Ad2} className="object-contain w-[352.71px] h-[278.83px] " alt="ad2" />
          </div>
          <div>
            <img src={Ad3} className="object-contain w-[352.71px] h-[278.83px] " alt="ad3" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
