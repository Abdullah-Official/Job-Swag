import RecentSearchCard from "@/components/EmployeePortal/RecentSearchCard";
import Applicant1 from "@/assets/images/applicant1.png";
import Applicant2 from "@/assets/images/applicant2.png";
import Applicant3 from "@/assets/images/applicant3.png";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SortSelect from "@/components/common/SortSelect";

const Applicants = () => {
  return (
    <div className="container lg:max-w-[1400px] 2xl:max-w-[1600px] !my-16 2xl:!my-36 space-y-10">
      <div className="  flex flex-col gap-y-5  justify-center w-full">
        <h1 className="text-heading !text-[24px]">Applicants</h1>
        <div
          style={{ boxShadow: "10px 20px 80px 0px #00000026" }}
          className="bg-white w-full mx-4 md:mx-0  shadow-2xl px-5 py-7 rounded-3xl flex flex-col md:flex-row justify-center   items-center gap-4"
        >
          {["Job Posts", "Category", "Location", "Age Group"].map((v, i) => (
            <Select key={i}>
              <SelectTrigger className="w-full border-[#C6C6C6] text-xs py-4 2xl:py-7 2xl:text-[18px] ">
                <SelectValue placeholder={v} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          ))}
          {/* <Input type="text" placeholder="Location" /> */}
          <Button className="w-full md:w-fit px-6 2xl:py-6 py-3">Find Applicants</Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-y-4 justify-between">
        <p className="text-sm text-[#7C7C7C] 2xl:text-[20px] font-[400]">
          Showing 05 based on your filter
        </p>
        <SortSelect />
      </div>
      <div className="flex items-center justify-center ">
          <div className="grid grid-cols-1 items-center gap-y-8 gap-x-5 md:grid-cols-2 justify-center  lg:grid-cols-3 w-full">
        <RecentSearchCard img={Applicant1} applicantMode={true} />
        <RecentSearchCard img={Applicant2} applicantMode={true} />
        <RecentSearchCard img={Applicant3} applicantMode={true} />
        <RecentSearchCard img={Applicant1} applicantMode={true} />
        <RecentSearchCard img={Applicant2} applicantMode={true} />
      </div>
      </div>
    </div>
  );
};

export default Applicants;
