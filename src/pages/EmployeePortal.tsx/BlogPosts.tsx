import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";

const BlogPosts = () => {
  const [tab, setTab] = useState("");
  const sideTabs = [
    "Active",
    "Inactive",
    "Drafts",
    "Deleted",
  ];


  return (
    <div className="container my-14 space-y-6">
      <div className="flex justify-between gap-3 md:items-center">
        <h1 className="text-heading !font-[700] !text-[24px]">Blog Posts</h1>
        <Button>Create a Blog Post</Button>
      </div>
      <div className="flex flex-col md:flex-row gap-x-7 gap-y-5">
        <div className="bg-white side-card h-fit flex flex-col gap-y-6 rounded-xl py-5 px-4  w-full md:max-w-[280px]">
          {sideTabs.map((t, i) => (
            <div
              onClick={() => setTab(t)}
              key={i}
              className={`${
                t === tab ? "text-main_green" : "text-main"
              } cursor-pointer font-[480] text-sm border-b-2 pb-3 flex justify-between`}
            >
              <p>{t}</p>
              <ChevronRightIcon
                size={20}
                className={`${t === tab ? "text-main_green" : "text-main"} `}
              />
            </div>
          ))}
        </div>
        <div className="w-full">
          <h1>Blog</h1>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
