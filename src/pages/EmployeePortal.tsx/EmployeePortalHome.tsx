import RecentSearchCard from "@/components/EmployeePortal/RecentSearchCard";
import SearchComponent from "@/components/common/SearchComponent";
import Applicant1 from "@/assets/images/applicant1.png";
import Applicant2 from "@/assets/images/applicant2.png";
import Applicant3 from "@/assets/images/applicant3.png";
import { Link } from "react-router-dom";

const EmployeePortalHome = () => {
  return (
    <div className="container lg:max-w-[1400px] 2xl:max-w-[1600px] my-14 mb-28 space-y-16">
       <div className="flex gap-4">
          <Link className="text-main text-sm" to="/applicants">
            Applicants
          </Link>
          <Link className="text-main text-sm" to="/analytics">
            Analytics
          </Link>
          
        </div>
      <SearchComponent />
      <div className="border-b-[1px] overflow-x-auto w-full border-[#C6C6C6] flex items-center gap-x-10 justify-center">
        <button className="border-b-4 border-[#55A7A6]  pb-2 2xl:pb-4 2xl:text-[24px] font-[700] text-[#1B4C81] text-sm  w-full md:w-[200px] 2xl:w-[300px] overflow-hidden whitespace-nowrap">
          Recent Searches
        </button>
        <button className="pb-2 2xl:pb-4 2xl:text-[24px] font-[400] text-[#7C7C7C] text-sm  w-full md:w-[200px] 2xl:w-[300px] overflow-hidden whitespace-nowrap">
          Recently Viewed Profiles
        </button>
      </div>
      <div className="flex items-center justify-center w-full ">
          <div className="grid grid-cols-1 items-center gap-y-5 gap-x-5 md:grid-cols-2 justify-center  lg:grid-cols-3 w-full">
        <RecentSearchCard img={Applicant1}  />
        <RecentSearchCard img={Applicant2} />
        <RecentSearchCard img={Applicant3} />
      </div>
      </div>
    </div>
  );
};

export default EmployeePortalHome;
