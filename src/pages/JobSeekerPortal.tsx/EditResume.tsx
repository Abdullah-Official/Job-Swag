import Education from "@/components/JobSeekerPortal/EditResume/Education";
import JobExperience from "@/components/JobSeekerPortal/EditResume/JobExperience";
import JobPreference from "@/components/JobSeekerPortal/EditResume/JobPreference";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";

const EditResume = () => {
  const [tab, setTab] = useState("Job Preferences");
  const sideTabs = [
    {
      tab: "Basic Information",
      onClick: () => {},
    },
    {
      tab: "Video",
      onClick: () => {},
    },
    {
      tab: "Job Preferences",
      onClick: () => setTab("Job Preferences"),
    },
    {
      tab: "Job Experiences",
      onClick: () => setTab("Job Experiences"),
    },
    {
      tab: "Education",
      onClick: () => setTab("Education"),
    },
    {
      tab: "Reference",
      onClick: () => {},
    },
    {
      tab: "Other",
      onClick: () => {},
    },
    {
      tab: "Status",
      onClick: () => {},
    },
    {
      tab: "Media",
      onClick: () => {},
    },
  ];

  return (
    <div className="container 2xl:max-w-[1600px] lg:max-w-[1400px] 2xl:!my-36 !my-16 space-y-6">
      <div className="flex flex-col  md:flex-row  gap-3 md:items-center">
        <h1 className="text-heading !font-[700] !text-[24px] 2xl:!text-[30px]">
          My Resume
        </h1>
        <p className="2xl:text-[20px]  text-[16px] text-[#5D6A7B] md:ml-48 2xl:ml-72 font-[500]">
          {"My Resume > Edit Resume"}
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-x-12 gap-y-5">
        <div className="bg-white 2xl:!max-w-[420px] side-card h-fit flex flex-col gap-y-6 rounded-xl py-6 px-7 2xl:py-10 2xl:px-9  w-full md:max-w-[280px]">
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
          {tab === "Job Preferences" ? (
            <JobPreference />
          ) : tab === "Job Experiences" ? (
            <JobExperience />
          ) : tab === "Education" ? (
            <Education />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default EditResume;
