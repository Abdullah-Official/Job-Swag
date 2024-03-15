
import Inbox from "@/components/JobSeekerPortal/Messages/Inbox";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";

const Messages = () => {
  const [tab, setTab] = useState("Inbox");
  const sideTabs = ["Create Message", "Inbox", "Sent", "Drafts", "Deleted"];

  return (
    <div className="container 2xl:max-w-[1600px] lg:max-w-[1400px] 2xl:!my-36 !my-16 space-y-9">
      <div className="flex justify-between gap-3 md:items-center">
        <h1 className="text-heading !font-[600] 2xl:!text-[35px] !text-[24px]">Messages</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-x-8 gap-y-5">
        <div className="bg-white 2xl:!max-w-[420px] side-card h-fit flex flex-col 2xl:py-10 2xl:px-9 gap-y-6 rounded-xl py-5 px-4  w-full md:max-w-[280px]">
          {sideTabs.map((t, i) => (
            <div
              onClick={() => setTab(t)}
              key={i}
              className={`${
                t === tab ? "text-main_green" : "text-main"
              } cursor-pointer font-[500] 2xl:text-[22px] text-sm border-b-2 pb-3 2xl:py-4 2xl:pb-8 flex justify-between`}
            >
              <p>{t}</p>
              <ChevronRightIcon
                size={20}
                className={`${t === tab ? "text-main_green" : "text-main"} `}
              />
            </div>
          ))}
        </div>
        <div className="w-full space-y-4">
              <Inbox />
        </div>
      </div>
    </div>
  );
};

export default Messages;
