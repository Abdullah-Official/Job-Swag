import RecentSearchCard from "@/components/EmployeePortal/RecentSearchCard";
import SearchComponent from "@/components/common/SearchComponent";
import Applicant1 from "@/assets/images/applicant1.png";
import Applicant2 from "@/assets/images/applicant2.png";
import Applicant3 from "@/assets/images/applicant3.png";
import { Link } from "react-router-dom";

const EmployeePortalHome = () => {
  return (
    <div className="container my-14 space-y-16">
       <div className="flex gap-4">
          <Link className="text-main text-sm" to="/applicants">
            Applicants
          </Link>
          <Link className="text-main text-sm" to="/analytics">
            Analytics
          </Link>
          
        </div>
      <SearchComponent />
      <div className="border-b-[1px] overflow-x-auto w-full border-[#C6C6C6] flex items-center gap-x-5 justify-center">
        <button className="border-b-4 border-[#55A7A6] pb-2 text-[#1B4C81] text-sm font-bold w-full md:w-[200px] overflow-hidden whitespace-nowrap">
          Recent Searches
        </button>
        <button className="pb-2 text-[#7C7C7C] text-sm font-[500] w-full md:w-[200px] overflow-hidden whitespace-nowrap">
          Recently Viewed Profiles
        </button>
      </div>
      <div className="flex flex-wrap md:flex-row justify-center flex-col gap-x-7 gap-y-5">
        <RecentSearchCard img={Applicant1}  />
        <RecentSearchCard img={Applicant2} />
        <RecentSearchCard img={Applicant3} />
      </div>
    </div>
  );
};

export default EmployeePortalHome;
