import Advertisement from "@/components/EmployeePortal/Advertisement";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Analytics = () => {
  const navigate = useNavigate()
  const [tab, setTab] = useState("Advertisements");
  const sideTabs = [
    {
      tab: "Costs",
      onClick: () => {}
    },
    {
      tab: "Profile Views",
      onClick: () =>  {}
    },
    {
      tab: "Job Posts",
      onClick:  () => {}
    },
    {
      tab: "Advertisements",
      onClick: () =>  setTab("Advertisements")
    },
    {
      tab: "Blog Posts",
      onClick: () =>  navigate("/blog-posts")
    }

  ];

  return (
    <div className="container my-14 space-y-6">
      <div className="flex justify-between gap-3 md:items-center">
        <h1 className="text-heading !font-[700] !text-[24px]">{tab === "Blog Posts" ? "Blog Posts" : "Analytics"}</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-x-7 gap-y-5">
        <div className="bg-white side-card h-fit flex flex-col gap-y-6 rounded-xl py-5 px-4  w-full md:max-w-[280px]">
          {sideTabs.map((t, i) => (
            <div
              onClick={() => t.onClick()}
              key={i}
              className={`${
                t.tab === tab ? "text-main_green" : "text-main"
              } cursor-pointer font-[480] text-sm border-b-2 pb-3 flex justify-between`}
            >
              <p>{t.tab}</p>
              <ChevronRightIcon
                size={20}
                className={`${t.tab === tab ? "text-main_green" : "text-main"} `}
              />
            </div>
          ))}
        </div>
        <div className="w-full">
          {tab === "Advertisements" ? (
            <Advertisement />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
