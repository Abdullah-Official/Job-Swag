import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import BlogImg from "@/assets/images/blog-img.png";
import { Eye, MessageCircle, ThumbsUp } from "lucide-react";

const BlogCard = () => {
  return (
    <Card className="sm:w-[350px] w-full px-5 py-6 space-y-7 mx-2 card-boxshadow rounded-xl border-none">
      <img
        src={BlogImg}
        alt="JobFeature"
        className="object-contain w-full h-auto"
      />
      <div className="space-y-2">
        <CardTitle className="text-[#1B4C81] font-bold">
          Blog Title Here
        </CardTitle>
        <div>
          <CardDescription className="text-[#888888]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </CardDescription>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-main font-400 text-sm ">Author: Alex Thomas</p>
          <p className="text-main_green text-xs pt-2 font-[600] cursor-pointer ">Follow</p>
        </div>
        <div className="flex justify-between items-center pt-2">
          <p className="text-main font-400 text-sm ">dd-mm-yyyy </p>
          <div className="flex justify-evenly font-medium  gap-x-2">
            <p className="text-main text-xs flex gap-x-1">
              <Eye size={14} strokeWidth={2} /> 109
            </p>
            <p className="text-main text-xs flex gap-x-1 items-center">
              <ThumbsUp size={14} strokeWidth={2} /> 08
            </p>
            <p className="text-main text-xs flex gap-x-1 items-center">
              <MessageCircle size={14} strokeWidth={2} /> Message Author
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
