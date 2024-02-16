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
        <h4 className="text-[19px] text-main font-[500]">Filter by</h4>
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
          <Button className="w-full md:w-fit px-6">Filter</Button>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex flex-wrap items-center md:items-start md:flex-row flex-col gap-x-5 ">
          <div>
            <img src={Ad1} className="object-contain w-[200px] h-[200px] " alt="ad1" />
          </div>
          <div>
            <img src={Ad2} className="object-contain w-[200px] h-[200px] " alt="ad2" />
          </div>
          <div>
            <img src={Ad3} className="object-contain w-[200px] h-[200px] " alt="ad3" />
          </div>
          <div>
            <img src={Ad2} className="object-contain w-[200px] h-[200px] " alt="ad2" />
          </div>
          <div>
            <img src={Ad3} className="object-contain w-[200px] h-[200px] " alt="ad3" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
