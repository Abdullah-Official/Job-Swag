import { MapPin, SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const SearchComponent = ({className, btnText} : {className?:string, btnText?: string}) => {
  return (
    <div className="flex justify-center w-full">
      <div
        style={{ boxShadow: "10px 20px 80px 0px #00000026" }}
        className={cn(`bg-white w-full mx-4 md:mx-0 md:w-[80%] shadow-2xl px-5 py-7 rounded-3xl flex flex-col md:flex-row   items-center gap-4`, className)}
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
        <Button className="w-full md:w-fit px-6 2xl:py-6 py-3 2xl:text-[16px]">{btnText || "Find Jobs"}</Button>
      </div>
    </div>
  );
};

export default SearchComponent;
