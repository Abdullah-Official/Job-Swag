import CommonHeader from "@/components/common/CommonHeader";
import Banner from "@/assets/images/featured-banner.png";
import JobFeature from "@/assets/images/job-feature.png";
import JobFeature2 from "@/assets/images/job-feature2.png";
import JobFeature3 from "@/assets/images/job-feature3.png";
import FeatureCard from "@/components/common/FeatureCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, SearchIcon } from "lucide-react";
import PartnersCarousel from "@/components/Home/PartnersCarousel";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AdSection from "@/components/Home/AdSection";

const FeatureJobs = () => {
  const selectsArr = [
    "Posted Date ",
    "Within 25 miles",
    "Pay",
    "Job Type",
    "Location",
    "Company",
    "Job Language",
  ];

  return (
    <div className="mb-20 -mt-1">
      <CommonHeader title="Featured Jobs" bannerImg={Banner} />
      <div className="container mx-auto 2xl:w-[1600px] lg:max-w-[1400px]">
      <div className="flex justify-center w-full ">
        <div className="-mt-10 w-full flex justify-center ">
          <div
            style={{ boxShadow: "10px 20px 80px 0px #00000026" }}
            className="bg-white w-full  md:mx-0 md:w-[65%] shadow-2xl px-5 py-7 rounded-3xl flex flex-col md:flex-row  items-center gap-4"
          >
            <div className="relative w-full">
              <SearchIcon
                size={22}
                className="text-main_green absolute top-3.5 left-3.5"
              />
              <Input
                className="pl-11 py-6 border-[#C6C6C6] "
                type="search"
                placeholder="Job title, keyword or company"
              />
            </div>
            <div className="relative w-full">
              <MapPin
                size={22}
                className="text-main_green absolute top-3.5 left-3.5"
              />
              <Input
                className="pl-11 py-6 border-[#C6C6C6]"
                type="text"
                placeholder="Location"
              />
            </div>
            {/* <Input type="text" placeholder="Location" /> */}
            <Button className="w-full md:w-fit px-6">Find Jobs</Button>
          </div>
        </div>
      </div>

      <div className=" mt-16 space-y-16 flex flex-col items-center  ">
        <div className="flex flex-1 gap-4 flex-col md:flex-row w-full justify-center">
          {selectsArr.map((v, i) => (
            <Select  key={i}>
              <SelectTrigger className="border-[#C6C6C6]  w-full xl:w-fit xl:px-10 ">
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
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 items-center gap-9 md:grid-cols-2 justify-center  lg:grid-cols-3 w-full">
            <FeatureCard img={JobFeature} />
            <FeatureCard img={JobFeature2} />
            <FeatureCard img={JobFeature3} />
            <FeatureCard img={JobFeature} />
            <FeatureCard img={JobFeature2} />
            <FeatureCard img={JobFeature3} />
          </div>
        </div>
        <div className="w-full">
          <AdSection />
        </div>
      </div>
      </div>
    <div className="my-10">
    <PartnersCarousel />
    </div>

    </div>
  );
};

export default FeatureJobs;
