import Advertisement from "@/components/EmployeePortal/Advertisement";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Analytics = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("Advertisements");
  const sideTabs = [
    {
      tab: "Costs",
      onClick: () => {},
    },
    {
      tab: "Profile Views",
      onClick: () => {},
    },
    {
      tab: "Job Posts",
      onClick: () => navigate("/job-posts"),
    },
    {
      tab: "Advertisements",
      onClick: () => setTab("Advertisements"),
    },
    {
      tab: "Blog Posts",
      onClick: () => navigate("/blog-posts"),
    },
  ];

  return (
    <div className="container 2xl:max-w-[1600px] lg:max-w-[1400px] 2xl:!my-36 !my-16 space-y-6">
      <div className="flex justify-between gap-3 md:items-center">
        <h1 className="text-heading !font-[700] !text-[24px]">
          {tab === "Blog Posts" ? "Blog Posts" : "Analytics"}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-x-12 gap-y-5">
        <div className="bg-white 2xl:!max-w-[420px] side-card h-fit flex flex-col gap-y-6 rounded-xl py-5 px-4 2xl:py-10 2xl:px-9  w-full md:max-w-[280px]">
          {sideTabs.map((t, i) => (
            <div
              onClick={() => t.onClick()}
              key={i}
              className={`${
                t.tab === tab ? "text-main_green" : "text-main"
              } cursor-pointer font-[500] 2xl:text-[22px] text-sm border-b-2 pb-3 2xl:py-5 flex justify-between`}
            >
              <p>{t.tab}</p>
              <ChevronRightIcon
                size={22}
                className={`${
                  t.tab === tab ? "text-main_green" : "text-main"
                } `}
              />
            </div>
          ))}
        </div>
        <div className="w-full">
          {tab === "Advertisements" ? <Advertisement /> : null}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
